"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
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
import { TechIcon } from "@/components/TechIcon";
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
  },
  {
    title: "TypeScript",
    iconType: TypescriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Tailwind",
    iconType: TailwindIcon,
  },
  {
    title: "Git",
    iconType: GitIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "Python",
    iconType: PythonIcon,
  },
  {
    title: "C",
    iconType: CIcon,
  },
  {
    title: "C++",
    iconType: CppIcon,
  },
  {
    title: "Java",
    iconType: JavaIcon,
  },
  {
    title: "C#",
    iconType: CsharpIcon,
  },
  {
    title: "Lua",
    iconType: LuaIcon,
  },
  {
    title: "Kotlin",
    iconType: KotlinIcon,
  },
  {
    title: "R",
    iconType: RIcon,
  },
  {
    title: "Bash",
    iconType: BashIcon,
  },
  {
    title: "LaTeX",
    iconType: LatexIcon,
  },
  {
    title: "PyTorch",
    iconType: TorchIcon,
  },
  {
    title: "HuggingFace",
    iconType: HuggingIcon,
  },
  {
    title: "OpenCV",
    iconType: OpencvIcon,
  },
  {
    title: "Scikit-Learn",
    iconType: SKLIcon,
  },
  {
    title: "Numpy",
    iconType: NumpyIcon,
  },
  {
    title: "pandas",
    iconType: PandasIcon,
  },
  {
    title: "Matplotlib",
    iconType: MPLIcon,
  },
  {
    title: "Claude",
    iconType: ClaudeIcon,
  },
  {
    title: "Next.js",
    iconType: NextIcon,
  },
  {
    title: "Node.js",
    iconType: NodeIcon,
  },
  {
    title: "Flask",
    iconType: FlaskIcon,
  },
  {
    title: "Java Spring",
    iconType: SprIcon,
  },
  {
    title: "Unity",
    iconType: UnityIcon,
  },
  {
    title: "Godot",
    iconType: GodotIcon,
  },
  {
    title: "Raylib",
    iconType: RaylibIcon,
  },
  {
    title: "SDL",
    iconType: SDLIcon,
  },
  {
    title: "Odin",
    iconType: OdinIcon,
  },
  {
    title: "Monogame",
    iconType: MonogameIcon,
  },
  {
    title: "OpenGL",
    iconType: OpenGLIcon,
  },
  {
    title: "Docker",
    iconType: DockerIcon,
  },
  {
    title: "GCP",
    iconType: GCPIcon,
  },
  {
    title: "Github Actions",
    iconType: ActionsIcon,
  },
  {
    title: "PostgreSQL",
    iconType: PostgresIcon,
  },
  {
    title: "CMake",
    iconType: CmakeIcon,
  },
  {
    title: "Gradle",
    iconType: GradleIcon,
  },
  {
    title: "Maven",
    iconType: MavenIcon,
  },
  {
    title: "Postman",
    iconType: PostmanIcon,
  },
  {
    title: "Jira",
    iconType: JiraIcon,
  },
  {
    title: "Figma",
    iconType: FigmaIcon,
  },
  {
    title: "Linux Mint",
    iconType: MintIcon,
  },
  {
    title: "Pop!_OS",
    iconType: PoposIcon,
  },
  {
    title: "Fedora Linux",
    iconType: FedoraIcon,
  },
  {
    title: "Android",
    iconType: AndroidIcon,
  },
  {
    title: "VSCode",
    iconType: VScodeIcon,
  },
  {
    title: "PyCharm",
    iconType: PyCharmIcon,
  },
  {
    title: "IntelliJ",
    iconType: IntellijIcon,
  },
  {
    title: "CLion",
    iconType: CLionIcon,
  },
  {
    title: "XCode",
    iconType: XCodeIcon,
  },
  {
    title: "Neovim",
    iconType: NvimIcon,
  },
  {
    title: "FFmpeg",
    iconType: ffmpegIcon,
  },
  {
    title: "Jupyter Notebook",
    iconType: JnoteIcon,
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
                description="The book that's currently shaping my perspectives."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book cover" />
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
                className="mt-6"
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
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
