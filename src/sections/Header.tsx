"use client";

const SCROLL_DURATION = 1100;

// easeOutQuint: moves quickly at first, then eases to a near stop at the target
const easeOutQuint = (t: number) => 1 - Math.pow(1 - t, 5);

const scrollToSection = (id: string) => {
  const target = document.querySelector(id);
  if (!target) return;

  const start = window.scrollY;
  const end = start + target.getBoundingClientRect().top;
  const distance = end - start;

  if (Math.abs(distance) < 1) return;

  let startTime: number | null = null;

  const step = (timestamp: number) => {
    if (startTime === null) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / SCROLL_DURATION, 1);

    window.scrollTo({ top: start + distance * easeOutQuint(progress), behavior: "instant" });

    if (progress < 1) requestAnimationFrame(step);
    else history.replaceState(null, "", id);
  };

  requestAnimationFrame(step);
};

export const Header = () => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const id = event.currentTarget.getAttribute("href");
    if (!id?.startsWith("#")) return;

    event.preventDefault();
    scrollToSection(id);
  };

  return (
  <div className="flex justify-center items-center fixed top-3 w-full z-index z-10">
    <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
      <a href="#home" onClick={handleClick} className="nav-item">Home</a>
      <a href="#projects" onClick={handleClick} className="nav-item">Projects</a>
      <a href="#about" onClick={handleClick} className="nav-item">About</a>
      <a href="mailto:saaranganand2013@gmail.com" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</a>
    </nav>
  </div>
  );
};
