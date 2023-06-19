import { ProjectsCardProps } from "@/types-interface";
import Image from "next/image";
import "animate.css/animate.min.css";
import Animate from "./Animate";

export default function ProjectCard({
  id,
  thumbnail,
  title,
  description,
  sourceCode,
  liveDemo,
}: ProjectsCardProps) {
  return (
    <Animate animateIn="fadeInUp" duration={0.5} delay={id! * 0.05}>
      <div className="border-2 border-zinc-800 rounded-lg flex flex-col justify-between">
        <div>
          <div>
            <Image
              src={thumbnail}
              width={960}
              height={540}
              alt={title}
              className="w-full hover:scale-105 transition object-contain object-center rounded-md"
            />
          </div>
          <div className="p-4 pb-0">
            <h3 className="text-lg text-gray-100 font-bold">{title}</h3>
            <p className="text-gray-400">{description}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 p-4 pt-3">
          <a
            href={liveDemo}
            target="_blank"
            rel="noreferrer noopener"
            className="
              flex justify-center items-center py-3
              bg-primary-button text-white
              font-medium
              hover:opacity-70
              rounded-l-md 
              border-r-[1px] border-accent
            "
          >
            Live Demo
          </a>
          <a
            href={sourceCode}
            target="_blank"
            rel="noreferrer noopener"
            className="
              flex justify-center items-center py-3
              bg-primary-button text-white
              font-medium
              hover:opacity-70
              rounded-r-md 
            "
          >
            Source Code
          </a>
        </div>
      </div>
    </Animate>
  );
}
