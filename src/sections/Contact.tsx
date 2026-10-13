import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { Card } from "@/components/Card";

export const ContactSection = () => {
  return (
    <div className="py-12 lg:py-16">
      <div className="container">
        <Card className="p-8 md:p-10 text-center md:text-left">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center md:justify-between">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let's get in touch
              </h2>
              <p className="text-sm md:text-base text-white/60 mt-2">
                Whether it's a role, a project, or just to chat, my inbox is
                always open.
              </p>
            </div>
            <a
              href="mailto:saaranganand2013@gmail.com"
              className="inline-flex items-center gap-2 bg-white text-gray-900 h-12 px-6 rounded-xl w-max hover:bg-white/70 transition duration-300 shrink-0"
            >
              <span className="font-semibold">Contact Me</span>
              <ArrowUpRightIcon className="size-4" />
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
};
