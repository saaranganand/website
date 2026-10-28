"use client";

import Image, { StaticImageData } from "next/image";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

type Book = {
  title: string;
  author: string;
  cover: StaticImageData;
  href: string;
};

const BOOK_HEIGHT = 168;

// How far each step back in the stack is nudged aside, lifted, turned and shrunk
const STEP_X = 30;
const STEP_Y = 6;
const STEP_ROTATE = 6;
const STEP_SCALE = 0.05;

// How far sideways a held book travels before it trades places with its neighbour
const SLOT_WIDTH = 56;
// Pointer travel that still counts as a click rather than a drag
const CLICK_SLOP = 6;
// A held book stays near the shelf however far the pointer wanders
const LIFT_LIMIT = 32;

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const moveSlot = (order: number[], from: number, to: number) => {
  const next = order.slice();
  next.splice(to, 0, next.splice(from, 1)[0]);
  return next;
};

export const BookStack = ({
  books,
  className,
}: {
  books: Book[];
  className?: string;
}) => {
  // Book indices, front of the stack first
  const [order, setOrder] = useState(() => books.map((_, i) => i));
  const [drag, setDrag] = useState<{ book: number; dx: number; dy: number } | null>(null);
  const grab = useRef<{ book: number; x: number; y: number; slot: number; moved: boolean } | null>(null);
  // A drag ends in a click event too, which shouldn't also follow the link
  const suppressClick = useRef(false);

  const reorder = (book: number, slot: number) =>
    setOrder((current) =>
      moveSlot(current, current.indexOf(book), clamp(slot, 0, books.length - 1)),
    );

  const release = () => {
    grab.current = null;
    setDrag(null);
  };

  return (
    <div className={twMerge("relative", className)}>
      <p className="sr-only">
        Drag a book sideways, or press the left and right arrow keys, to reorder
        the stack.
      </p>
      {books.map((book, i) => {
        const slot = order.indexOf(i);
        const held = drag?.book === i;
        // Spread the fan either side of centre so the stack stays put as it grows
        const fan = slot - (books.length - 1) / 2;
        const x = fan * STEP_X + (held ? drag.dx : 0);
        const y = -slot * STEP_Y + (held ? drag.dy : 0);

        return (
          <div
            key={book.title}
            className={twMerge(
              "absolute bottom-0 left-1/2 origin-bottom",
              !held &&
                "transition-[transform,filter] duration-300 ease-out motion-reduce:transition-none",
            )}
            style={{
              height: BOOK_HEIGHT,
              zIndex: held ? books.length : books.length - slot,
              // A held book straightens up and lifts out of the fan
              transform: [
                "translateX(-50%)",
                `translate(${x}px, ${y}px)`,
                `rotate(${held ? 0 : fan * STEP_ROTATE}deg)`,
                `scale(${held ? 1.06 : 1 - slot * STEP_SCALE})`,
              ].join(" "),
              filter:
                slot === 0 || held
                  ? undefined
                  : `brightness(${(1 - slot * 0.18).toFixed(2)})`,
            }}
          >
            <a
              href={book.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${book.title} by ${book.author}, book ${slot + 1} of ${books.length}${
                slot === 0 ? "" : " — bring to front"
              }`}
              className="block h-full cursor-grab touch-none select-none rounded outline-offset-4 transition-transform duration-300 hover:-translate-y-1 active:cursor-grabbing motion-reduce:transition-none"
              onPointerDown={(e) => {
                if (e.pointerType === "mouse" && e.button !== 0) return;
                e.currentTarget.setPointerCapture(e.pointerId);
                grab.current = { book: i, x: e.clientX, y: e.clientY, slot, moved: false };
                suppressClick.current = false;
                setDrag({ book: i, dx: 0, dy: 0 });
              }}
              onPointerMove={(e) => {
                const g = grab.current;
                if (g?.book !== i) return;
                const dx = e.clientX - g.x;
                const dy = e.clientY - g.y;
                if (!g.moved && Math.hypot(dx, dy) > CLICK_SLOP) g.moved = true;
                if (!g.moved) return;

                const span = books.length * SLOT_WIDTH;
                setDrag({
                  book: i,
                  dx: clamp(dx, -span, span),
                  dy: clamp(dy, -LIFT_LIMIT, LIFT_LIMIT),
                });

                // Slots are measured from where the book was picked up, so the
                // live reshuffle can't drag its own target along with it
                const target = clamp(g.slot + Math.round(dx / SLOT_WIDTH), 0, books.length - 1);
                if (target !== slot) reorder(i, target);
              }}
              onPointerUp={() => {
                suppressClick.current = grab.current?.moved ?? false;
                release();
              }}
              onPointerCancel={() => {
                suppressClick.current = false;
                release();
              }}
              onClick={(e) => {
                if (suppressClick.current) {
                  e.preventDefault();
                  return;
                }
                // Only the book on top is a link; the ones behind come forward first
                if (slot !== 0) {
                  e.preventDefault();
                  reorder(i, 0);
                }
              }}
              onKeyDown={(e) => {
                if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
                e.preventDefault();
                reorder(i, slot + (e.key === "ArrowLeft" ? -1 : 1));
              }}
            >
              <Image
                src={book.cover}
                alt=""
                draggable={false}
                className="h-full w-auto rounded shadow-lg shadow-black/50 ring-1 ring-white/10"
              />
            </a>
          </div>
        );
      })}
    </div>
  );
};
