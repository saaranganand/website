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
const MAX_SPEED = 500;
const CURSOR_RADIUS = 10;
const CURSOR_BOUNCE = 0.5;

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), Math.max(min, max));

const collide = (a: Body, b: Body) => {
  const overlapX = Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x);
  const overlapY = Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y);
  if (overlapX <= 0 || overlapY <= 0) return;

  const p = overlapX < overlapY ? "x" : "y";
  const v = p === "x" ? "vx" : "vy";
  const size = p === "x" ? "w" : "h";
  const overlap = Math.min(overlapX, overlapY);
  const dir = Math.sign(b[p] + b[size] / 2 - (a[p] + a[size] / 2)) || 1;

  a[p] -= (dir * overlap) / 2;
  b[p] += (dir * overlap) / 2;
  if ((b[v] - a[v]) * dir < 0) [a[v], b[v]] = [b[v], a[v]];
};

const hitCursor = (b: Body, cx: number, cy: number, cvx: number, cvy: number) => {
  const r = b.h / 2;
  let nx = clamp(cx, b.x + r, b.x + b.w - r) - cx;
  let ny = b.y + r - cy;
  const dist = Math.hypot(nx, ny);
  const overlap = r + CURSOR_RADIUS - dist;
  if (overlap <= 0) return;

  if (dist > 0) {
    nx /= dist;
    ny /= dist;
  } else {
    nx = 0;
    ny = 1;
  }
  b.x += nx * overlap;
  b.y += ny * overlap;

  const approach = (b.vx - cvx) * nx + (b.vy - cvy) * ny;
  if (approach >= 0) return;
  b.vx -= (1 + CURSOR_BOUNCE) * approach * nx;
  b.vy -= (1 + CURSOR_BOUNCE) * approach * ny;

  const speed = Math.hypot(b.vx, b.vy);
  if (speed > MAX_SPEED) {
    b.vx *= MAX_SPEED / speed;
    b.vy *= MAX_SPEED / speed;
  }
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

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const pills = pillRefs.current;
    const drift = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : DRIFT_SPEED;
    const bounds = { w: container.clientWidth, h: container.clientHeight };

    // Start from each hobby's left/top, then switch to transforms
    const bodies: Body[] = pills.map((pill, i) => {
      const angle = Math.random() * Math.PI * 2;
      const w = pill.offsetWidth;
      const h = pill.offsetHeight;
      return {
        x: clamp((parseFloat(hobbies[i].left) / 100) * bounds.w, 0, bounds.w - w),
        y: clamp((parseFloat(hobbies[i].top) / 100) * bounds.h, 0, bounds.h - h),
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

    const observer = new ResizeObserver(() => {
      bounds.w = container.clientWidth;
      bounds.h = container.clientHeight;
      pills.forEach((pill, i) => {
        bodies[i].w = pill.offsetWidth;
        bodies[i].h = pill.offsetHeight;
      });
    });
    observer.observe(container);
    pills.forEach((pill) => observer.observe(pill));

    let pointer: { x: number; y: number; vx: number; vy: number; t: number } | null = null;
    let pointerMoved = false;
    let cursor: { x: number; y: number } | null = null;

    const onPointerMove = (e: PointerEvent) => {
      let vx = 0;
      let vy = 0;
      const dt = pointer ? (e.timeStamp - pointer.t) / 1000 : Infinity;
      if (pointer && dt < 0.1) {
        const d = Math.max(dt, 1 / 240);
        vx = 0.6 * ((e.clientX - pointer.x) / d) + 0.4 * pointer.vx;
        vy = 0.6 * ((e.clientY - pointer.y) / d) + 0.4 * pointer.vy;
      }
      pointer = { x: e.clientX, y: e.clientY, vx, vy, t: e.timeStamp };
      pointerMoved = true;
    };
    const onPointerEnd = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") pointer = null;
    };
    const onPointerOut = (e: PointerEvent) => {
      if (!e.relatedTarget) pointer = null;
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerMove, { passive: true });
    window.addEventListener("pointerup", onPointerEnd);
    window.addEventListener("pointercancel", onPointerEnd);
    window.addEventListener("pointerout", onPointerOut);

    const keepInside = (b: Body) => {
      const { w, h } = bounds;
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

      bodies.forEach((b) => {
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

      if (pointer) {
        const rect = container.getBoundingClientRect();
        const to = { x: pointer.x - rect.left, y: pointer.y - rect.top };
        const stale = now - pointer.t > 60;
        const cvx = stale ? 0 : pointer.vx;
        const cvy = stale ? 0 : pointer.vy;
        const from = cursor && pointerMoved ? cursor : to;
        const steps =
          Math.min(Math.ceil(Math.hypot(to.x - from.x, to.y - from.y) / CURSOR_RADIUS), 30) || 1;
        for (let s = 1; s <= steps; s++) {
          const cx = from.x + ((to.x - from.x) * s) / steps;
          const cy = from.y + ((to.y - from.y) * s) / steps;
          bodies.forEach((b) => hitCursor(b, cx, cy, cvx, cvy));
        }
        cursor = to;
      } else {
        cursor = null;
      }
      pointerMoved = false;

      for (let pass = 0; pass < 3; pass++) {
        for (let i = 0; i < bodies.length; i++) {
          for (let j = i + 1; j < bodies.length; j++) {
            collide(bodies[i], bodies[j]);
          }
        }
        bodies.forEach(keepInside);
      }

      bodies.forEach((b, i) => {
        pills[i].style.transform = `translate(${b.x}px, ${b.y}px)`;
      });
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerMove);
      window.removeEventListener("pointerup", onPointerEnd);
      window.removeEventListener("pointercancel", onPointerEnd);
      window.removeEventListener("pointerout", onPointerOut);
    };
  }, [hobbies]);

  return (
    <div ref={containerRef} className={twMerge("relative", className)}>
      {hobbies.map((hobby, i) => (
        <div
          key={hobby.title}
          ref={(el) => {
            if (el) pillRefs.current[i] = el;
          }}
          className="absolute inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm select-none will-change-transform"
          style={{ left: hobby.left, top: hobby.top }}
        >
          <span className="font-medium">{hobby.title}</span>
          <span>{hobby.emoji}</span>
        </div>
      ))}
    </div>
  );
};
