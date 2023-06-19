import { Great_Vibes } from "next/font/google";
import Link from "next/link";
import SocialLinks from "./SocialLinks";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: ["400"] });

export default function Navbar() {
  return (
    <nav>
      <div className="flex justify-between items-center max-w-screen-xl w-full px-4 py-3 mx-auto text-white">
        <Link
          href="/"
          className={`text-4xl text-[hsl(240,33%,40%)] ${greatVibes.className}`}
        >
          Jeet
        </Link>

        <SocialLinks />
      </div>
    </nav>
  );
}
