import ProjectCard from "@/components/ProjectCard";
import { ProjectsCardProps } from "@/types-interface";

export default function Projects() {
  const projectCardItems: ProjectsCardProps[] = [
    {
      id: 1,
      title: "Promptopia",
      description: "A web app where you can create and explore AI prompts.",
      thumbnail: "/assets/project-img/promptopia.jpg",
      sourceCode: "https://github.com/i-amWin/promptopia",
      liveDemo: "https://promptopia-jet-two.vercel.app",
    },
    {
      id: 2,
      title: "Netflix Landing Page Clone",
      description: "A clone of Netflix Landing page with responsiveness.",
      thumbnail: "/assets/project-img/netflix-landing-page.jpg",
      sourceCode: "https://github.com/i-amWin/netflix-landing-page-clone",
      liveDemo: "https://i-amwin.github.io/netflix-landing-page-clone/",
    },
    {
      id: 3,
      title: "Litlines",
      description: "This is project 3",
      thumbnail: "/assets/project-img/litlines.jpg",
      sourceCode: "https://github.com/i-amWin/litlines",
      liveDemo: "https://litlines.netlify.app",
    },
    {
      id: 4,
      title: "Wicked Wit",
      description:
        "A site which shows you a new random joke in every refresh or every click.",
      thumbnail: "/assets/project-img/wicked-wit.jpg",
      sourceCode: "https://github.com/i-amWin/wicked-wit",
      liveDemo: "https://wickedwit.netlify.app",
    },
  ];

  return (
    <div className="text-white">
      <div className="max-w-screen-lg w-full mx-auto px-4 py-14">
        <h2
          className="
            relative mb-6 pb-2
            text-2xl md:text-3xl lg:text-4xl font-bold
            after:absolute after:-bottom-px after:-left-[calc((100vw-100%)/2)]
            after:w-screen after:h-[.125rem] after:bg-[#151529]         
          "
        >
          Projects
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 px-4 md:px-2">
          {projectCardItems.map((card) => (
            <ProjectCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}
