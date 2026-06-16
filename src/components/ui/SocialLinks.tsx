import { siteConfig } from '../../config/site';

/** The row of social icons, shared by the Hero and the Footer. */
export function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      {siteConfig.social.map((item) => (
        <a
          key={item.name}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.name}
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          <item.icon size={item.size} />
        </a>
      ))}
    </div>
  );
}
