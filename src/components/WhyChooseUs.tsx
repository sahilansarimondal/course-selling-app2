"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
  {
    title: "Experienced Instructors",
    description:
      "Our music school boasts a team of highly experienced instructors who are passionate about nurturing talent and guiding students on their musical journey. With decades of combined experience in music education and performance, our instructors are dedicated to helping you reach your full potential.",
  },
  {
    title: "Diverse Curriculum",
    description:
      "We offer a diverse curriculum covering various musical genres, instruments, and styles. Whether you're interested in classical piano or electric guitar, we have something for everyone. Our comprehensive program includes theory, technique, repertoire, improvisation, and more, ensuring a well-rounded musical education.",
  },
  {
    title: "Individualized Instruction",
    description:
      "We believe in tailoring our instruction to meet the unique needs and goals of each student. Our personalized approach ensures that you receive the attention and guidance you need to succeed. From beginners to advanced players, our instructors provide customized lessons that focus on your strengths and areas for growth.",
  },
  {
    title: "State-of-the-Art Facilities",
    description:
      "Our music school is equipped with state-of-the-art facilities, including soundproof practice rooms, recording studios, and performance spaces, providing an optimal environment for learning and creativity. Our modern amenities enhance your learning experience and allow you to explore music in a comfortable and inspiring setting.",
  },
  {
    title: "Performance Opportunities",
    description:
      "We offer regular performance opportunities for our students, including recitals, concerts, and competitions. These events not only showcase your progress but also help you build confidence and stage presence. Whether you're performing solo, with an ensemble, or as part of a band, our supportive community encourages artistic expression and musical growth.",
  },
  // Add more objects as needed
];

export default function WhyChooseUs() {
  return (
    <div className="">
      <StickyScroll content={musicSchoolContent} />
    </div>
  );
}
