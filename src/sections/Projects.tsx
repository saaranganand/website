import React from "react";
import vibe from "@/assets/images/home-loggedin.png";
import medical from "@/assets/images/medical.png";
import speakswarm from "@/assets/images/usageexample1.png";
import netai from "@/assets/images/1764903068285.jpeg";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "SFU Tangent Lab",
    year: "2026",
    title: "SpeakSwarm",
    results: [
      { title: "Built the first system to generate and execute co-speech gestures on a non-humanoid robot swarm"},
      { title: "Achieved 92.5% keyword coverage across 40 concepts in evaluation"},
      { title: "Co-authored a full paper submitted to ACM UIST 2026 and ACM CHI 2027"},
    ],
    link: "https://youtu.be/W3Wush9SCtM",
    image: speakswarm,
  },
  {
    company: "ExploreCSR",
    year: "2025",
    title: "netAI",
    results: [
      { title: "Built a pipeline that translates natural language into P4_16 network configs" },
      { title: "Implemented compiler error feedback to the LLM for retry" },
      { title: "Verified generated programs via p4c in Docker and persisted results to PostgreSQL" },
    ],
    link: "https://github.com/saaranganand/netAI",
    image: netai,
  },
  {
    company: "CMPT 419",
    year: "2024",
    title: "Surgical VQA Pipeline",
    results: [
      { title: "Built a pipeline answering questions from trauma simulation videos" },
      { title: "Benchmarked 3 models across zero-shot configs using Accuracy & F1-score" },
      { title: "Fine-tuned CLIP and ViLT via cross-entropy classification" },
    ],
    link: "https://github.com/saaranganand/medical-vqa-pipeline",
    image: medical,
  },
  {
    company: "CMPT 276",
    year: "2024",
    title: "Vibe",
    results: [
      { title: "Led a team of 5 to develop a fully-functional social media music platform" },
      { title: "Built with Java and PostgreSQL, containerized with Docker" },
      { title: "Integrated MusicBrainz and Spotify APIs for user-matching" },
    ],
    link: "https://github.com/saaranganand/vibe-276",
    image: vibe,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 lg:py-16">
      <div className="container">
        <SectionHeader
          eyebrow="Selected Work"
          title="Featured Projects"
          description="Some of the things I've worked on."
        />

        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:pl-20 lg:pr-0 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
                zIndex: projectIndex + 1,
              }}
            >
              <div className="lg:grid lg:grid-cols-[45%_55%] lg:gap-0">
                <div className="lg:pb-16 lg:pr-12">
                  <div className="inline-flex gap-2 font-semibold uppercase tracking-widest text-sm text-emerald-300">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>

                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6 shrink-0" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white/15 hover:bg-white/5 transition duration-300 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8"
                  >
                    <span>Visit Project</span>
                    <ArrowUpRightIcon className="size-4" />
                  </a>
                </div>
                <div className="relative overflow-hidden mt-8 h-64 md:h-80 lg:mt-0 lg:h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
