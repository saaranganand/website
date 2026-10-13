import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";

const AVAILABLE = false;

export const HeroSection = () => {
  return (
    <div id="home" className="py-24 md:py-36 lg:py-44 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px] [filter:drop-shadow(1px_0_0_#047857)_drop-shadow(-1px_0_0_#047857)_drop-shadow(0_1px_0_#047857)_drop-shadow(0_-1px_0_#047857)]"
            alt="Person smirking"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">
              {AVAILABLE ? "Available for new projects" : "SWE co-op at Grit Financial Inc."}
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Saarang Anand
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            Computer science student @ SFU and software engineer with experience across the full stack. Passionate about writing clean, efficient software.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:bg-white/5 transition duration-300"
          >
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </a>
          <a href="mailto:saaranganand2013@gmail.com" className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl hover:bg-white/70 transition duration-300">
            <span>👋</span>
            <span className="font-semibold">Let's Connect</span>
          </a>
        </div>
      </div>
    </div>
  );
};
