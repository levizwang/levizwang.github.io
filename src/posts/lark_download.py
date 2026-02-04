import json
import os
import re
import requests
import lark_oapi as lark
from lark_oapi.api.docs.v1 import *

# SDK 使用说明: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/server-side-sdk/python--sdk/preparations-before-development
# 以下示例代码默认根据文档示例值填充，如果存在代码问题，请在 API 调试台填上相关必要参数后再复制代码使用

def sanitize_filename(name):
    # Remove invalid characters for filenames
    name = re.sub(r'[\\/*?:"<>|]', "", name).strip()
    return name.replace(" ", "_")

def clean_markdown_content(content):
    if not content:
        return content
        
    # Debug print to help identify issues
    # for line in content.split('\n'):
    #     if 'Web3' in line:
    #         print(f"DEBUG LINE BEFORE: {repr(line)}")

    # 1. Robust handling of escaped HTML entities
    # Lark export often produces \&#34; or \&\#34; or even \\&#34;
    
    # Map of escaped patterns to their actual character
    entity_map = {
        # Quotes "
        r"\&#34;": '"',
        r"\&\#34;": '"',
        r"&#34;": '"',
        r"&quot;": '"',
        r"\\&#34;": '"',  # Double escaped backslash
        r"\\\&#34;": '"',
        
        # Apostrophes '
        r"\&#39;": "'",
        r"\&\#39;": "'",
        r"&#39;": "'",
        r"&apos;": "'",
        r"\\&#39;": "'",
        
        # Ampersands &
        r"\&amp;": "&",
        r"\&\#38;": "&",
        r"&#38;": "&",
        r"&amp;": "&",
        r"\\&": "&",     # Sometimes just \& is seen
        
        # Less than <
        r"\&lt;": "<",
        r"\&\#60;": "<",
        r"&#60;": "<",
        r"&lt;": "<",
        
        # Greater than >
        r"\&gt;": ">",
        r"\&\#62;": ">",
        r"&#62;": ">",
        r"&gt;": ">",
    }
    
    for pattern, replacement in entity_map.items():
        content = content.replace(pattern, replacement)
    
    # 2. Unescape common markdown characters that Lark escapes unnecessarily
    # We strip the backslash from these characters
    chars_to_unescape = [
        r"\.", r"\!", r"\-", r"\_", r"\+", r"\*", r"\#", r"\`", r"\~", r"\|",
        r"\(", r"\)", r"\[", r"\]", r"\{", r"\}", r"\>", r"\<"
    ]
    
    for escaped_char in chars_to_unescape:
        # escaped_char is like r"\." (literal backslash then char)
        # We replace it with just the char (e.g. ".")
        clean_char = escaped_char.replace('\\', '')
        content = content.replace(escaped_char, clean_char)
        
    # 3. Fix bold formatting with extra spaces
    # Example: ** bold ** -> **bold**
    # Example: **bold ** -> **bold**
    # Example: ** bold** -> **bold**
    # This regex looks for ** followed by optional whitespace, content, optional whitespace, **
    # and replaces it with **content**
             
    content = re.sub(r'\*\*\s+(.*?)\s+\*\*', r'**\1**', content)
    content = re.sub(r'\*\*\s+(.*?)\*\*', r'**\1**', content)
    content = re.sub(r'\*\*(.*?)\s+\*\*', r'**\1**', content)
         
    return content

def download_image(url, save_path, token):
    headers = {
        # Feishu images often require the token in headers or cookies
        "Authorization": f"Bearer {token}",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    }
    try:
        # Some Feishu images might need cookie authentication instead of Bearer token depending on the domain
        # But for OAPI exported docs, usually the token works or the URL is temporary accessible.
        resp = requests.get(url, headers=headers, stream=True)
        if resp.status_code == 200:
            with open(save_path, 'wb') as f:
                for chunk in resp.iter_content(1024):
                    f.write(chunk)
            return True
        else:
            print(f"Failed to download image: {url}, status: {resp.status_code}")
            return False
    except Exception as e:
        print(f"Error downloading image {url}: {e}")
        return False

def process_markdown(content, output_base_dir, token):
    if not content:
        print("No content found.")
        return

    # Extract title from the first H1 header
    lines = content.split('\n')
    title = "Untitled_Article"
    for line in lines:
        if line.strip().startswith('# '):
            title = line.strip()[2:].strip()
            break
    
    safe_title = sanitize_filename(title)
    if not safe_title:
        safe_title = "Untitled_Article"

    # Create directories
    article_dir = os.path.join(output_base_dir, safe_title)
    if not os.path.exists(article_dir):
        os.makedirs(article_dir)
        
    images_dir = os.path.join(article_dir, "images")
    if not os.path.exists(images_dir):
        os.makedirs(images_dir)

    print(f"Processing article: {title}")
    print(f"Output directory: {article_dir}")

    # Clean the content first
    print(f"Content snippet before cleaning: {repr(content[:100])}")
    content = clean_markdown_content(content)
    print(f"Content snippet after cleaning: {repr(content[:100])}")

    # Find all images
    # Markdown image format: ![alt](url)
    image_pattern = r'!\[(.*?)\]\((.*?)\)'
    matches = re.findall(image_pattern, content)
    
    new_content = content
    
    print(f"Found {len(matches)} images.")
    
    for idx, (alt, url) in enumerate(matches):
        # Determine extension
        ext = "png"
        # Try to guess extension from URL
        path_part = url.split('/')[-1].split('?')[0]
        if '.' in path_part:
            possible_ext = path_part.split('.')[-1].lower()
            if possible_ext in ['jpg', 'jpeg', 'png', 'gif', 'webp', 'bmp']:
                ext = possible_ext
        
        image_filename = f"image_{idx + 1}.{ext}"
        save_path = os.path.join(images_dir, image_filename)
        
        print(f"Downloading image {idx+1}/{len(matches)}: {url[:50]}...")
        if download_image(url, save_path, token):
            # Replace the URL in the markdown content
            # We construct the relative path for the markdown file
            relative_path = f"images/{image_filename}"
            
            # Escape special characters in regex
            safe_url = re.escape(url)
            safe_alt = re.escape(alt)
            
            # Replace this specific image occurrence
            # Note: If the same image URL is used multiple times with same alt, this replaces all.
            # If used with different alt, we might need more precise replacement.
            # Simple re.sub is usually sufficient for standard exports.
            pattern = f"!\\[{safe_alt}\\]\\({safe_url}\\)"
            replacement = f"![{alt}]({relative_path})"
            
            new_content = re.sub(pattern, replacement, new_content)
        else:
            print(f"Skipping image replacement for {url}")

    # Save the markdown file
    md_filename = f"{safe_title}.md"
    md_path = os.path.join(article_dir, md_filename)
    
    with open(md_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"Successfully saved article to: {md_path}")

def main():
    # Configuration
    DOC_TOKEN = "RY0rwdPuoiWySPk01PUcx2z9nVd"
    USER_ACCESS_TOKEN = "u-cQ_tzVckl6_WOPUJmDrP.U14jx3h01grro2aJwg02bZY"

    # 创建client
    # 使用 user_access_token 需开启 token 配置, 并在 request_option 中配置 token
    client = lark.Client.builder() \
        .enable_set_token(True) \
        .log_level(lark.LogLevel.INFO) \
        .build()

    # 构造请求对象
    request: GetContentRequest = GetContentRequest.builder() \
        .doc_token(DOC_TOKEN) \
        .doc_type("docx") \
        .content_type("markdown") \
        .build()

    # 发起请求
    option = lark.RequestOption.builder().user_access_token(USER_ACCESS_TOKEN).build()
    
    print("Fetching document content...")
    response: GetContentResponse = client.docs.v1.content.get(request, option)

    # 处理失败返回
    if not response.success():
        lark.logger.error(
            f"client.docs.v1.content.get failed, code: {response.code}, msg: {response.msg}, log_id: {response.get_log_id()}, resp: \n{json.dumps(json.loads(response.raw.content), indent=4, ensure_ascii=False)}")
        return

    # 处理业务结果
    # lark.logger.info(lark.JSON.marshal(response.data, indent=4))
    
    # Process content to generate file
    output_dir = os.path.dirname(os.path.abspath(__file__))
    process_markdown(response.data.content, output_dir, USER_ACCESS_TOKEN)


if __name__ == "__main__":
    main()
