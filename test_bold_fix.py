
import re

def fix_bold_spacing(content):
    # Pattern to match ** followed by spaces, content, spaces, followed by **
    # We use non-greedy matching .*? for content
    # We need to handle cases where there might be newlines too? 
    # Usually bold is inline, but let's see. User examples suggest inline.
    
    # Attempt 1: \*\*\s+(.*?)\s+\*\* -> **\1** (matches spaces on both sides)
    # Attempt 2: \*\*\s+(.*?)\*\* -> **\1** (matches leading space)
    # Attempt 3: \*\*(.*?)\s+\*\* -> **\1** (matches trailing space)
    
    # Combined approach:
    # Look for **
    # Followed by optional whitespace \s*
    # Followed by content (non-greedy) .*?
    # Followed by optional whitespace \s*
    # Followed by **
    
    # Issue: This might match across multiple bold sections if not careful?
    # Example: **bold1** normal **bold2**
    # If I use \s*, it matches empty string too. So **bold** matches **bold**.
    # Replacement is **\1**. So **bold** -> **bold**. No change. Good.
    
    # Example: ** bold **
    # Match: ** bold **. Group 1: "bold". Result: **bold**. Good.
    
    # Example: ** bold**
    # Match: ** bold**. Group 1: "bold". Result: **bold**. Good.
    
    # Example: **bold **
    # Match: **bold **. Group 1: "bold". Result: **bold**. Good.
    
    # But we need to make sure we don't merge two bolds.
    # Text: **a** b **c**
    # Regex: \*\*\s*(.*?)\s*\*\*
    # First match: **a**. OK.
    # Second match: **c**. OK.
    
    # Text: ** a ** b ** c **
    # First match: ** a **.
    
    # Is there a risk of: ** a ** b ** c **
    # matching "** a ** b ** c **" ?
    # .*? is non-greedy, so it should stop at the first **?
    # No, it stops at the first point where the rest of the pattern matches.
    # The rest of the pattern is \s*\*\*.
    # So for "** a ** b ** c **":
    # It sees **. Then space a space. Then **.
    # It will match "** a **".
    
    # Let's try to be more specific to ensure we fix the issue user mentioned.
    # User mentioned: **xxxx **, ** xxxx **, ** xxx**
    
    pattern = r'\*\*\s*(.*?)\s*\*\*'
    
    # We need to make sure we are not matching across lines if bold shouldn't span lines (usually it doesn't in simple cases, but can).
    # But standard markdown bold is usually within a paragraph.
    
    return re.sub(pattern, r'**\1**', content)

test_cases = [
    "Normal **bold** text",
    "Space inside ** bold ** text",
    "Leading space ** bold** text",
    "Trailing space **bold ** text",
    "Multiple ** bold ** and ** bold2**",
    "Multiline ** bold \n text **",
    "- **Represents: ** DOGE", # User specific example
]

for t in test_cases:
    print(f"Original: '{t}'")
    print(f"Fixed:    '{fix_bold_spacing(t)}'")
    print("-" * 20)
