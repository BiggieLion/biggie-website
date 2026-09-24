import { GithubIcon, LinkedInIcon, XIcon, InstagramIcon, EmailIcon } from "@/components/icons";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/BiggieLion",
    icon: <GithubIcon />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jairleon/",
    icon: <LinkedInIcon />,
  },
  {
    name: "Twitter / X",
    href: "https://x.com/_Biggie_Lion",
    icon: <XIcon />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/_biggie_lion_/",
    icon: <InstagramIcon />,
  },
  {
    name: "Email",
    href: "mailto:hleonr1300@gmail.com",
    icon: <EmailIcon />,
  },
];

export function SocialCard() {
  return (
    <div className="bento-card col-span-1 row-span-1 p-6 flex flex-col justify-between">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">
        Connect
      </h2>
      <div className="flex flex-col gap-3 flex-1 justify-center">
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.href}
            target={s.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-muted hover:text-accent transition-colors group"
          >
            <span className="group-hover:scale-110 transition-transform">{s.icon}</span>
            <span className="text-sm font-medium">{s.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
