"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    quote:
      "Attending this music school has been a transformative experience for me. The instructors are incredibly talented and supportive, and the atmosphere is conducive to learning and growth.",
    name: "Emily Johnson",
    title: "Piano Student",
  },
  {
    quote:
      "I've been a student at this music school for years, and I can't imagine learning music anywhere else. The curriculum is diverse, the facilities are top-notch, and the faculty truly cares about your success.",
    name: "Alex Rodriguez",
    title: "Guitarist",
  },
  {
    quote:
      "As a parent, I couldn't be happier with the progress my child has made at this music school. The instructors are patient and skilled at working with young learners, and the performances have helped boost my child's confidence.",
    name: "Sarah Chen",
    title: "Parent",
  },
  {
    quote:
      "I've had the pleasure of attending concerts and recitals hosted by this music school, and I'm always impressed by the caliber of talent on display. It's clear that the instructors are dedicated to nurturing their students' abilities.",
    name: "David Smith",
    title: "Music Enthusiast",
  },
  // Add more testimonial objects as needed
];

function MusicSchoolTestimonials() {
  return (
    <div className=" h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className=" text-3xl font-bold text-center mb-8 z-10">
        Hear our Harmony: Voices of Success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards speed="slow" items={musicSchoolTestimonials} />
        </div>
      </div>
    </div>
  );
}

export default MusicSchoolTestimonials;
