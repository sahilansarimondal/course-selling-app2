"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

export default function UpcomingWebiners() {
  const featuredWebinars = [
    {
      title: "Mastering Jazz Improvisation",
      description:
        "Join us for an in-depth exploration of jazz improvisation techniques led by renowned jazz pianist, Professor John Smith. This webinar is perfect for intermediate to advanced musicians looking to enhance their improvisational skills.",
      slug: "mastering-jazz-improvisation",
      isFeatured: true,
    },
    {
      title: "Introduction to Music Theory",
      description:
        "Discover the fundamentals of music theory in this comprehensive webinar series. From basic concepts like notes and scales to more advanced topics like harmony and counterpoint, this webinar is suitable for beginners and those looking to refresh their knowledge.",
      slug: "introduction-to-music-theory",
      isFeatured: true,
    },
    {
      title: "Exploring World Music Traditions",
      description:
        "Embark on a musical journey around the world as we explore diverse music traditions and cultures. Led by ethnomusicologist Dr. Maria Rodriguez, this webinar series will broaden your understanding of music and its cultural significance.",
      slug: "exploring-world-music-traditions",
      isFeatured: true,
    },
    {
      title: "Songwriting Workshop: From Inspiration to Composition",
      description:
        "Unleash your creativity and learn the art of songwriting in this interactive workshop. Led by award-winning songwriter Sarah Johnson, this webinar will guide you through the songwriting process from finding inspiration to crafting lyrics and melodies.",
      slug: "songwriting-workshop-inspiration-to-composition",
      isFeatured: true,
    },
    {
      title: "The Art of Music Production",
      description:
        "Delve into the world of music production and learn how to produce professional-quality recordings from start to finish. This webinar series covers recording techniques, mixing, mastering, and more, with insights from experienced music producers.",
      slug: "art-of-music-production",
      isFeatured: true,
    },
    {
      title: "Mindfulness for Musicians",
      description:
        "Discover how mindfulness practices can enhance your musical performance and overall well-being. Led by mindfulness coach and musician David Lee, this webinar will explore techniques to reduce performance anxiety, improve focus, and cultivate a deeper connection with music.",
      slug: "mindfulness-for-musicians",
      isFeatured: true,
    },
    // Add more featured webinar objects as needed
  ];

  return (
    <div className=" p-12 bg-gray-900">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Feautred Webiners
          </h2>
          <p className=" mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: "/",
              isFeatured: webinar.isFeatured,
            }))}
          />
        </div>
        <div className=" mt-10 text-center">
          <Link
            className=" px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200
        "
            href={"/courses"}
          >
            View All Courses{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
