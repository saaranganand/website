"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import TypescriptIcon from "@/assets/icons/ts.svg";
import TailwindIcon from "@/assets/icons/tailwind.svg";
import JavaIcon from "@/assets/icons/java-brands-solid-full.svg";
import CssIcon from "@/assets/icons/css3.svg";
import CIcon from "@/assets/icons/c.svg";
import CsharpIcon from "@/assets/icons/csharp-original.svg";
import CppIcon from "@/assets/icons/cplusplus.svg";
import RIcon from "@/assets/icons/r.svg";
import BashIcon from "@/assets/icons/gnubash.svg";
import LatexIcon from "@/assets/icons/latex.svg";
import TorchIcon from "@/assets/icons/pytorch.svg";
import HuggingIcon from "@/assets/icons/huggingface.svg";
import MPLIcon from "@/assets/icons/matplotlib-original.svg";
import ClaudeIcon from "@/assets/icons/claude.svg";
import NextIcon from "@/assets/icons/nextdotjs.svg";
import NodeIcon from "@/assets/icons/nodedotjs.svg";
import FlaskIcon from "@/assets/icons/flask.svg";
import SprIcon from "@/assets/icons/springboot.svg";
import UnityIcon from "@/assets/icons/unity.svg";
import GodotIcon from "@/assets/icons/godotengine.svg";
import RaylibIcon from "@/assets/icons/raylib.svg";
import SDLIcon from "@/assets/icons/sdl-original.svg";
import OdinIcon from "@/assets/icons/odin.svg";
import MonogameIcon from "@/assets/icons/monogame.svg";
import OpenGLIcon from "@/assets/icons/opengl.svg";
import DockerIcon from "@/assets/icons/docker.svg";
import GCPIcon from "@/assets/icons/googlecloud.svg";
import ActionsIcon from "@/assets/icons/githubactions.svg";
import PostgresIcon from "@/assets/icons/postgresql.svg";
import CmakeIcon from "@/assets/icons/cmake.svg";
import GradleIcon from "@/assets/icons/gradle.svg";
import MavenIcon from "@/assets/icons/apachemaven.svg";
import PostmanIcon from "@/assets/icons/postman.svg";
import JiraIcon from "@/assets/icons/jira.svg";
import FigmaIcon from "@/assets/icons/figma.svg";
import MintIcon from "@/assets/icons/linuxmint.svg";
import PoposIcon from "@/assets/icons/popos.svg";
import FedoraIcon from "@/assets/icons/fedora.svg";
import AndroidIcon from "@/assets/icons/android.svg";
import VScodeIcon from "@/assets/icons/vscode-original.svg";
import PyCharmIcon from "@/assets/icons/pycharm.svg";
import IntellijIcon from "@/assets/icons/intellijidea.svg";
import CLionIcon from "@/assets/icons/clion.svg";
import XCodeIcon from "@/assets/icons/xcode.svg";
import NvimIcon from "@/assets/icons/neovim.svg";
import ffmpegIcon from "@/assets/icons/ffmpeg.svg";
import JnoteIcon from "@/assets/icons/jupyter.svg";
import OpencvIcon from "@/assets/icons/opencv.svg";
import SKLIcon from "@/assets/icons/scikitlearn.svg";
import NumpyIcon from "@/assets/icons/numpy.svg";
import PandasIcon from "@/assets/icons/pandas.svg";
import KotlinIcon from "@/assets/icons/kotlin.svg";
import GitIcon from "@/assets/icons/git.svg";
import LuaIcon from "@/assets/icons/lua.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import PythonIcon from "@/assets/icons/python-logo-only.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from 'framer-motion';
import { useRef } from "react";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    title: "TypeScript",
    iconType: TypescriptIcon,
    href: "https://www.typescriptlang.org/",
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    title: "CSS3",
    iconType: CssIcon,
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    title: "React",
    iconType: ReactIcon,
    href: "https://react.dev/",
  },
  {
    title: "Tailwind",
    iconType: TailwindIcon,
    href: "https://tailwindcss.com/",
  },
  {
    title: "Git",
    iconType: GitIcon,
    href: "https://git-scm.com/",
  },
  {
    title: "Github",
    iconType: GithubIcon,
    href: "https://github.com",
  },
  {
    title: "Python",
    iconType: PythonIcon,
    href: "https://www.python.org",
  },
  {
    title: "C",
    iconType: CIcon,
    href: "https://www.c-language.org/",
  },
  {
    title: "C++",
    iconType: CppIcon,
    href: "https://cplusplus.com/",
  },
  {
    title: "Java",
    iconType: JavaIcon,
    href: "https://www.java.com/en/",
  },
  {
    title: "C#",
    iconType: CsharpIcon,
    href: "https://learn.microsoft.com/en-us/dotnet/csharp/",
  },
  {
    title: "Lua",
    iconType: LuaIcon,
    href: "https://www.lua.org/",
  },
  {
    title: "Kotlin",
    iconType: KotlinIcon,
    href: "https://kotlinlang.org/",
  },
  {
    title: "R",
    iconType: RIcon,
    href: "https://www.r-project.org/",
  },
  {
    title: "Bash",
    iconType: BashIcon,
    href: "https://www.gnu.org/software/bash/",
  },
  {
    title: "LaTeX",
    iconType: LatexIcon,
    href: "https://www.latex-project.org/",
  },
  {
    title: "PyTorch",
    iconType: TorchIcon,
    href: "https://pytorch.org/",
  },
  {
    title: "HuggingFace",
    iconType: HuggingIcon,
    href: "https://huggingface.co/",
  },
  {
    title: "OpenCV",
    iconType: OpencvIcon,
    href: "https://opencv.org/",
  },
  {
    title: "Scikit-Learn",
    iconType: SKLIcon,
    href: "https://scikit-learn.org/",
  },
  {
    title: "Numpy",
    iconType: NumpyIcon,
    href: "https://numpy.org/",
  },
  {
    title: "pandas",
    iconType: PandasIcon,
    href: "https://pandas.pydata.org/",
  },
  {
    title: "Matplotlib",
    iconType: MPLIcon,
    href: "https://matplotlib.org/",
  },
  {
    title: "Claude",
    iconType: ClaudeIcon,
    href: "https://claude.ai/",
  },
  {
    title: "Next.js",
    iconType: NextIcon,
    href: "https://nextjs.org/",
  },
  {
    title: "Node.js",
    iconType: NodeIcon,
    href: "https://nodejs.org/",
  },
  {
    title: "Flask",
    iconType: FlaskIcon,
    href: "https://flask.palletsprojects.com/",
  },
  {
    title: "Java Spring",
    iconType: SprIcon,
    href: "https://spring.io/projects/spring-boot",
  },
  {
    title: "Unity",
    iconType: UnityIcon,
    href: "https://unity.com/",
  },
  {
    title: "Godot",
    iconType: GodotIcon,
    href: "https://godotengine.org/",
  },
  {
    title: "Raylib",
    iconType: RaylibIcon,
    href: "https://www.raylib.com/",
  },
  {
    title: "SDL",
    iconType: SDLIcon,
    href: "https://www.libsdl.org/",
  },
  {
    title: "Odin",
    iconType: OdinIcon,
    href: "https://odin-lang.org/",
  },
  {
    title: "Monogame",
    iconType: MonogameIcon,
    href: "https://monogame.net/",
  },
  {
    title: "OpenGL",
    iconType: OpenGLIcon,
    href: "https://www.opengl.org/",
  },
  {
    title: "Docker",
    iconType: DockerIcon,
    href: "https://www.docker.com/",
  },
  {
    title: "GCP",
    iconType: GCPIcon,
    href: "https://cloud.google.com/",
  },
  {
    title: "Github Actions",
    iconType: ActionsIcon,
    href: "https://github.com/features/actions",
  },
  {
    title: "PostgreSQL",
    iconType: PostgresIcon,
    href: "https://www.postgresql.org/",
  },
  {
    title: "CMake",
    iconType: CmakeIcon,
    href: "https://cmake.org/",
  },
  {
    title: "Gradle",
    iconType: GradleIcon,
    href: "https://gradle.org/",
  },
  {
    title: "Maven",
    iconType: MavenIcon,
    href: "https://maven.apache.org/",
  },
  {
    title: "Postman",
    iconType: PostmanIcon,
    href: "https://www.postman.com/",
  },
  {
    title: "Jira",
    iconType: JiraIcon,
    href: "https://www.atlassian.com/software/jira",
  },
  {
    title: "Figma",
    iconType: FigmaIcon,
    href: "https://www.figma.com/",
  },
  {
    title: "Linux Mint",
    iconType: MintIcon,
    href: "https://linuxmint.com/",
  },
  {
    title: "Pop!_OS",
    iconType: PoposIcon,
    href: "https://system76.com/pop/",
  },
  {
    title: "Fedora Linux",
    iconType: FedoraIcon,
    href: "https://fedoraproject.org/",
  },
  {
    title: "Android",
    iconType: AndroidIcon,
    href: "https://www.android.com/",
  },
  {
    title: "VSCode",
    iconType: VScodeIcon,
    href: "https://code.visualstudio.com/",
  },
  {
    title: "PyCharm",
    iconType: PyCharmIcon,
    href: "https://www.jetbrains.com/pycharm/",
  },
  {
    title: "IntelliJ",
    iconType: IntellijIcon,
    href: "https://www.jetbrains.com/idea/",
  },
  {
    title: "CLion",
    iconType: CLionIcon,
    href: "https://www.jetbrains.com/clion/",
  },
  {
    title: "XCode",
    iconType: XCodeIcon,
    href: "https://developer.apple.com/xcode/",
  },
  {
    title: "Neovim",
    iconType: NvimIcon,
    href: "https://neovim.io/",
  },
  {
    title: "FFmpeg",
    iconType: ffmpegIcon,
    href: "https://ffmpeg.org/",
  },
  {
    title: "Jupyter Notebook",
    iconType: JnoteIcon,
    href: "https://jupyter.org/",
  },
];

const hobbies = [
  {
    title: "Drumming",
    emoji: "🥁",
    left: "5%",
    top: "5%",
  },
  {
    title: "Badminton",
    emoji: "🏸",
    left: "50%",
    top: "5%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "35%",
    top: "40%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "70%",
    top: "45%",
  },
  {
    title: "Fitness",
    emoji: "🏋🏽",
    left: "5%",
    top: "65%",
  },
  {
    title: "Biking",
    emoji: "🚲",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="A little background"
          title="About Me"
          description="Learn more about who I am, tools I use, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Books currently shaping my perspectives."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <a
                  href="https://www.goodreads.com/book/show/30289.The_Republic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform duration-300 hover:scale-110"
                >
                  <Image src={bookImage} alt="Book cover" />
                </a>
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Some of the technologies and tools I'm comfortable using."
                className=""
              />
              <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:120s]" />
              <ToolboxItems
                items={toolboxItems}
                className="mt-3"
                itemsWrapperClassName="animate-move-right [animation-duration:100s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Some of my interests and hobbies."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={smileMemoji}
                  alt="smiling memoji"
                  className="size-20 px-1 py-0.5"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
