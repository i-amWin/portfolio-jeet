import TechCard from "@/components/TechCard";
import { TechCardProps } from "@/types-interface";

export default function TechStack() {
  const techs: TechCardProps[] = [
    {
      id: 1,
      thumbnail: "/assets/tech-img/html.png",
      name: "HTML",
      shadowStyle: "shadow-[#e44d25]",
    },
    {
      id: 2,
      thumbnail: "/assets/tech-img/css.png",
      name: "CSS",
      shadowStyle: "shadow-[#019be4]",
    },
    {
      id: 3,
      thumbnail: "/assets/tech-img/tailwind.png",
      name: "TAILWIND CSS",
      shadowStyle: "shadow-[#44a8b4]",
    },
    {
      id: 4,
      thumbnail: "/assets/tech-img/javascript.png",
      name: "JAVASCRIPT",
      shadowStyle: "shadow-[#edc900]",
    },
    {
      id: 5,
      thumbnail: "/assets/tech-img/typescript.png",
      name: "TYPESCRIPT",
      shadowStyle: "shadow-[#3179c7]",
    },

    {
      id: 6,
      thumbnail: "/assets/tech-img/node.png",
      name: "NODE JS",
      shadowStyle: "shadow-[#8ec64a]",
    },
    {
      id: 7,
      thumbnail: "/assets/tech-img/react.png",
      name: "REACT JS",
      shadowStyle: "shadow-[#00cfeb]",
    },
    {
      id: 8,
      thumbnail: "/assets/tech-img/redux.png",
      name: "REDUX",
      shadowStyle: "shadow-[#7546b9]",
    },
    {
      id: 9,
      thumbnail: "/assets/tech-img/nextjs.png",
      name: "NEXT JS",
      shadowStyle: "shadow-gray-200",
    },
    {
      id: 10,
      thumbnail: "/assets/tech-img/git.png",
      name: "GIT",
      shadowStyle: "shadow-[#d14732]",
    },
    {
      id: 11,
      thumbnail: "/assets/tech-img/github.png",
      name: "GITHUB",
      shadowStyle: "shadow-gray-300",
    },
  ];

  return (
    <div data-scroll-section className="bg-accent text-white">
      <div className="max-w-screen-lg w-full mx-auto px-4 py-14">
        <h2
          className="
            relative mb-6 pb-2
            text-2xl md:text-3xl lg:text-4xl font-bold
            after:absolute after:-bottom-px after:-left-[calc((100vw-100%)/2)]
            after:w-screen after:h-[0.125rem] after:bg-primary-button         
          "
        >
          My Tech Stack
        </h2>
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 px-6">
          {techs.map((tech) => (
            <TechCard key={tech.id} {...tech} />
          ))}
        </div>
      </div>
    </div>
  );
}
