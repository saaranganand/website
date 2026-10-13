"use client";

import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

type Hobby = {
  title: string;
  emoji: string;
  left: string;
  top: string;
};

type Body = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  w: number;
  h: number;
};

// Speeds in px/s
const DRIFT_SPEED = 15;
const MAX_THROW_SPEED = 600;

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), Math.max(min, max));

// Pushes two overlapping pills apart along the axis they overlap least on, and
// bounces them if they're moving towards each other. A held pill acts like an
// immovable wall that shoves the other one.
const collide = (a: Body, b: Body, aHeld: boolean, bHeld: boolean) => {
  const overlapX = Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x);
  const overlapY = Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y);
  if (overlapX <= 0 || overlapY <= 0) return;

  const p = overlapX < overlapY ? "x" : "y";
  const v = p === "x" ? "vx" : "vy";
  const size = p === "x" ? "w" : "h";
  const overlap = Math.min(overlapX, overlapY);
  const dir = Math.sign(b[p] + b[size] / 2 - (a[p] + a[size] / 2)) || 1;

  const aShare = aHeld ? 0 : bHeld ? 1 : 0.5;
  a[p] -= dir * overlap * aShare;
  b[p] += dir * overlap * (1 - aShare);

  if ((b[v] - a[v]) * dir >= 0) return;
  if (aHeld) b[v] = 2 * a[v] - b[v];
  else if (bHeld) a[v] = 2 * b[v] - a[v];
  else [a[v], b[v]] = [b[v], a[v]];
};

export const FloatingHobbies = ({
  hobbies,
  className,
}: {
  hobbies: Hobby[];
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pillRefs = useRef<HTMLDivElement[]>([]);
  const bodies = useRef<Body[]>([]);
  const bounds = useRef({ w: 0, h: 0 });
  const held = useRef<{ index: number; offsetX: number; offsetY: number; lastT: number } | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const pills = pillRefs.current;
    const drift = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : DRIFT_SPEED;

    const measure = () => {
      bounds.current = { w: container.clientWidth, h: container.clientHeight };
      pills.forEach((pill, i) => {
        if (!bodies.current[i]) return;
        bodies.current[i].w = pill.offsetWidth;
        bodies.current[i].h = pill.offsetHeight;
      });
    };

    // Start from each hobby's left/top, then switch to transforms
    bounds.current = { w: container.clientWidth, h: container.clientHeight };
    bodies.current = pills.map((pill, i) => {
      const angle = Math.random() * Math.PI * 2;
      const w = pill.offsetWidth;
      const h = pill.offsetHeight;
      return {
        x: clamp((parseFloat(hobbies[i].left) / 100) * bounds.current.w, 0, bounds.current.w - w),
        y: clamp((parseFloat(hobbies[i].top) / 100) * bounds.current.h, 0, bounds.current.h - h),
        vx: Math.cos(angle) * drift,
        vy: Math.sin(angle) * drift,
        w,
        h,
      };
    });
    pills.forEach((pill) => {
      pill.style.left = "0";
      pill.style.top = "0";
    });

    const observer = new ResizeObserver(measure);
    observer.observe(container);
    pills.forEach((pill) => observer.observe(pill));

    const keepInside = (b: Body) => {
      const { w, h } = bounds.current;
      if (b.x < 0) { b.x = 0; b.vx = Math.abs(b.vx); }
      else if (b.x + b.w > w) { b.x = Math.max(0, w - b.w); b.vx = -Math.abs(b.vx); }
      if (b.y < 0) { b.y = 0; b.vy = Math.abs(b.vy); }
      else if (b.y + b.h > h) { b.y = Math.max(0, h - b.h); b.vy = -Math.abs(b.vy); }
    };

    let frame: number;
    let last = performance.now();
    const step = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      const all = bodies.current;
      const heldIndex = held.current?.index;

      all.forEach((b, i) => {
        // A held pill's velocity fades if the pointer stops moving, so a
        // pause before letting go doesn't throw it
        if (i === heldIndex) {
          b.vx *= Math.exp(-12 * dt);
          b.vy *= Math.exp(-12 * dt);
          return;
        }
        // Ease thrown pills back down (or stalled ones back up) to a slow drift
        const speed = Math.hypot(b.vx, b.vy);
        if (speed > 0) {
          const target = drift + (speed - drift) * Math.exp(-2 * dt);
          b.vx *= target / speed;
          b.vy *= target / speed;
        } else if (drift > 0) {
          const angle = Math.random() * Math.PI * 2;
          b.vx = Math.cos(angle) * drift;
          b.vy = Math.sin(angle) * drift;
        }
        b.x += b.vx * dt;
        b.y += b.vy * dt;
      });

      for (let pass = 0; pass < 3; pass++) {
        for (let i = 0; i < all.length; i++) {
          for (let j = i + 1; j < all.length; j++) {
            collide(all[i], all[j], i === heldIndex, j === heldIndex);
          }
        }
        all.forEach(keepInside);
      }

      all.forEach((b, i) => {
        pills[i].style.transform = `translate(${b.x}px, ${b.y}px)`;
      });
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [hobbies]);

  const pointerPos = (e: React.PointerEvent) => {
    const rect = containerRef.current!.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const release = (index: number) => {
    if (held.current?.index !== index) return;
    held.current = null;
    const b = bodies.current[index];
    const speed = Math.hypot(b.vx, b.vy);
    if (speed > MAX_THROW_SPEED) {
      b.vx *= MAX_THROW_SPEED / speed;
      b.vy *= MAX_THROW_SPEED / speed;
    }
  };

  return (
    <div ref={containerRef} className={twMerge("relative", className)}>
      {hobbies.map((hobby, i) => (
        <div
          key={hobby.title}
          ref={(el) => {
            if (el) pillRefs.current[i] = el;
          }}
          className="absolute inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm cursor-grab active:cursor-grabbing select-none touch-none will-change-transform"
          style={{ left: hobby.left, top: hobby.top }}
          onPointerDown={(e) => {
            const b = bodies.current[i];
            if (!b) return;
            e.currentTarget.setPointerCapture(e.pointerId);
            const { x, y } = pointerPos(e);
            held.current = { index: i, offsetX: x - b.x, offsetY: y - b.y, lastT: e.timeStamp };
            b.vx = 0;
            b.vy = 0;
          }}
          onPointerMove={(e) => {
            const h = held.current;
            if (!h || h.index !== i) return;
            const b = bodies.current[i];
            const { x, y } = pointerPos(e);
            const nx = clamp(x - h.offsetX, 0, bounds.current.w - b.w);
            const ny = clamp(y - h.offsetY, 0, bounds.current.h - b.h);
            const dt = Math.max((e.timeStamp - h.lastT) / 1000, 1 / 240);
            // Blend with the previous velocity so one jittery sample doesn't decide the throw
            b.vx = 0.6 * ((nx - b.x) / dt) + 0.4 * b.vx;
            b.vy = 0.6 * ((ny - b.y) / dt) + 0.4 * b.vy;
            b.x = nx;
            b.y = ny;
            h.lastT = e.timeStamp;
          }}
          onPointerUp={() => release(i)}
          onPointerCancel={() => release(i)}
        >
          <span className="font-medium">{hobby.title}</span>
          <span>{hobby.emoji}</span>
        </div>
      ))}
    </div>
  );
};
