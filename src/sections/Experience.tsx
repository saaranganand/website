import { twMerge } from "tailwind-merge";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

type Experience = {
  company: string;
  period: string;
  roles: { title: string; period?: string }[];
  highlights: string[];
  link?: { label: string; href: string };
};

const experiences: Experience[] = [
  {
    company: "Grit Financial Inc.",
    period: "2024 - Present",
    roles: [
      { title: "Software Developer", period: "Part-time · Sep 2026 - Present" },
      { title: "Software Developer Intern", period: "Summers 2024 - 2026" },
    ],
    highlights: [
      "Architected an end-to-end Playwright test automation platform, cutting manual regression time by 80% across 6 core workflows",
      "Diagnose production issues on the Earned-Wage Access product and turn recurring ones into backend fixes and product improvements",
      "Migrated hard-coded legacy data to cloud storage, reducing technical debt and improving security",
      "Automated string localization for an application rebrand with scripts that streamlined API integration",
    ],
  },
  {
    company: "Tangent Lab @ SFU",
    period: "Sep 2025 - Present",
    roles: [
      { title: "Research Lead", period: "Jan 2026 - Present" },
      { title: "Research Assistant", period: "Sep - Dec 2025" },
    ],
    highlights: [
      "Led a team of 3 through the design and development of SpeakSwarm",
      "Collected in-person system evaluation data and presented the work at a research symposium",
      "Led development of swarm robot interactions for emotion regulation",
    ],
  },
  {
    company: "Simon Fraser University",
    period: "Sep 2024 - May 2025",
    roles: [{ title: "Research Assistant" }],
    highlights: [
      "Collaborated with undergraduate researchers on LLM-driven Intent-Based Networking, the research behind netAI",
      "Prototyped experiments relating networking metrics to QoE for haptic data",
      "Designed and presented a research poster at an on-campus conference",
    ],
    link: {
      label: "Google Research certificate",
      href: "https://drive.google.com/file/d/1RyYHY2lZ0dgjp5SpbRaJgi3J_Pi-d3TZ/view?usp=sharing",
    },
  },
];

const leadership = [
  {
    organization: "Developers & Systems Club",
    role: "Executive Director",
    period: "Jan 2023 - Sep 2026",
    hours: "~500 volunteer hours",
    highlights: [
      "Hosted a 2-hour game development workshop attended by 30+ students",
      "Built Python and Kotlin libraries used in club programming competitions",
      "Led community engagement and programming content creation",
      "Owned the club's finances, including bookkeeping and transaction tracking",
    ],
    link: {
      label: "Watch my workshop",
      href: "https://www.youtube.com/watch?v=kLs5zaqYha4",
    },
  },
  {
    organization: "Google Developer Student Club",
    role: "Executive",
    period: "Jan 2023 - May 2025",
    hours: "~400 volunteer hours",
    highlights: [
      "Organized technical events and workshops on Google technologies for 100+ students",
      "Developed interactive workshop content to improve attendee learning",
      "Planned monthly events with a team of 6 executives, from logistics to outreach",
    ],
    link: {
      label: "Core Team certificate",
      href: "https://drive.google.com/file/d/1uLUwcE4xCo0gBJJ35Pkm-GgsGauoZX18/view?usp=sharing",
    },
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-12 lg:py-16">
      <div className="container">
        <SectionHeader
          eyebrow="The Journey So Far"
          title="Experience"
          description="Some of the teams I've been part of."
        />

        <div className="mt-10 md:mt-20 flex flex-col gap-8">
          {experiences.map((experience) => (
            <Card
              key={experience.company}
              className="md:grid md:grid-cols-5 lg:grid-cols-3"
            >
              <div className="p-6 md:py-8 md:px-10 md:col-span-2 lg:col-span-1">
                <p className="font-semibold uppercase tracking-widest text-sm text-emerald-300">
                  {experience.period}
                </p>
                <h3 className="font-serif text-2xl md:text-3xl mt-2">
                  {experience.company}
                </h3>
                {/* Role ladder: most recent role first, highlighted in emerald */}
                <ol className="flex flex-col gap-3 mt-5">
                  {experience.roles.map((role, roleIndex) => (
                    <li key={role.title} className="relative pl-5">
                      {roleIndex < experience.roles.length - 1 && (
                        <span className="absolute left-[4.5px] top-3 -bottom-6 w-px bg-white/10" />
                      )}
                      <span
                        className={twMerge(
                          "absolute left-0 top-[7px] size-2.5 rounded-full bg-gray-600",
                          roleIndex === 0 && "bg-emerald-300"
                        )}
                      />
                      <p className="font-semibold">{role.title}</p>
                      {role.period && (
                        <p className="text-sm text-white/50">{role.period}</p>
                      )}
                    </li>
                  ))}
                </ol>
              </div>

              <hr className="border-t-2 border-white/5 mx-6 md:hidden" />

              <div className="p-6 md:col-span-3 md:self-center md:py-8 md:pl-0 md:pr-10 lg:col-span-2">
                <ul className="flex flex-col gap-4">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2 text-sm md:text-base text-white/50">
                      <CheckCircleIcon className="size-5 md:size-6 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {experience.link && (
                  <a
                    href={experience.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-2 px-3 mt-6 border border-white/10 rounded-lg text-sm font-semibold text-white/70 transition-colors duration-200 hover:bg-white/5 hover:text-white"
                  >
                    <span>{experience.link.label}</span>
                    <ArrowUpRightIcon className="size-4" />
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-16 md:mt-20">
          <div className="h-px flex-1 bg-white/10" />
          <p className="uppercase text-sm font-semibold tracking-widest text-white/40 text-center">
            Leadership & Community
          </p>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 md:mt-12">
          {leadership.map((item) => (
            <Card key={item.organization} className="p-6 md:p-8 flex flex-col">
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                <p className="font-semibold uppercase tracking-widest text-sm text-emerald-300">
                  {item.period}
                </p>
                <span className="px-3 py-1 rounded-full border border-white/10 text-xs font-semibold text-white/60">
                  {item.hours}
                </span>
              </div>
              <h3 className="font-serif text-2xl mt-3">{item.organization}</h3>
              <p className="text-white/60 mt-1">{item.role}</p>

              <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

              <ul className="flex flex-col gap-3 mt-4 mb-6 md:mt-5">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2 text-sm text-white/50">
                    <CheckCircleIcon className="size-5 shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {item.link && (
                <a
                  href={item.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 self-start py-2 px-3 mt-auto border border-white/10 rounded-lg text-sm font-semibold text-white/70 transition-colors duration-200 hover:bg-white/5 hover:text-white"
                >
                  <span>{item.link.label}</span>
                  <ArrowUpRightIcon className="size-4" />
                </a>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
