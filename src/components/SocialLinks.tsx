import { IconType } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

type SocialType = {
  id: number;
  name: string;
  url: string;
  icon: IconType;
  download?: boolean;
};

export default function SocialLinks() {
  const socials: SocialType[] = [
    {
      id: 1,
      name: "Github",
      url: "https://github.com/i-amWin",
      icon: FaGithub,
    },
    {
      id: 2,
      name: "Linkedin",
      url: "https://www.linkedin.com/in/jeet-gangwar-399369246",
      icon: FaLinkedin,
    },
    {
      id: 3,
      name: "Mail",
      url: "mailto:jeetgangwar625@gmail.com",
      icon: HiOutlineMail,
    },
    {
      id: 4,
      name: "Resume",
      url: "/resume.pdf",
      icon: BsFillPersonLinesFill,
      download: true,
    },
  ];

  return (
    <div className="flex gap-4">
      {socials.map((social) => (
        <a
          href={social.url}
          target="_blank"
          rel="noreferrer"
          download={social.download}
          key={social.id}
          className="text-[hsl(240,33%,35%)] hover:text-[hsl(240,33%,65%)]"
        >
          <span className="sr-only">{social.name}</span>
          <div className="h-5 w-5 md:h-6 md:w-6">
            <social.icon size={22} className="h-full w-full" />
          </div>
        </a>
      ))}
    </div>
  );
}
