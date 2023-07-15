import { TechCardProps } from "@/types-interface";
import Image from "next/image";
import Animate from "./Animate";

export default function TechCard({
  name,
  thumbnail,
  shadowStyle,
}: TechCardProps) {
  return (
    <Animate animateIn="fadeInUp" duration={0.5} delay={0.02}>
      <div
        className={`flex flex-col gap-3 justify-between rounded-lg text-gray-100 p-4 bg-primary-button shadow-md ${shadowStyle}`}
      >
        <div className="flex justify-center">
          <Image
            src={thumbnail}
            width={100}
            height={100}
            alt={name}
            className="hover:scale-105 transition object-contain object-center px-3"
          />
        </div>
        <div>
          <h3 className="text-sm font-bold text-center">{name}</h3>
        </div>
      </div>
    </Animate>
  );
}
