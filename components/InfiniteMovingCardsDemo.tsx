"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[24rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "/#material",
    title: "A Tale of Two Cities",
    image: "https://drive.google.com/uc?export=view&id=1BPz2tRkTyRabHbiheoZQQdqvEBOw5uOy",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "/order",
    title: "Hamlet",
    image: "https://drive.google.com/uc?export=view&id=1hWpvPTpkEivuTfdOPyvIKZvJ5Y-W4zQ7",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "/afterExams",
    title: "A Dream Within a Dream",
    image: "https://drive.google.com/uc?export=view&id=1zbMRXJbhpGYbq3TTBILS64PcY8Hohs4c",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "",
    title: "Pride and Prejudice",
    image: "https://drive.google.com/uc?export=view&id=1YnjDAY2tJOO-AmsxY5rFJ77ELvNvPMJ_",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "/examTips",
    title: "Moby-Dick",
    image: "https://drive.google.com/uc?export=view&id=1msqw6kxu3NAbdOLXchuR0ZTL0HDGGfOV",
  },
];
