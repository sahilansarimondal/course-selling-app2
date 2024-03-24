import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8 px-4 sm:px-6 lg:px-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className=" text-lg font-bold py-4">About Us</h2>
          <p>
            Music School is a premier institution dedicated to creating the art
            and science of music. We nurture telent from the ground up,
            fostering a vibrant community of music enthusiasts.
          </p>
        </div>
        <div>
          <h2 className=" text-lg font-bold py-4">Quick Links</h2>
          <div className="flex flex-col">
            <Link href="/">Home</Link>
            <Link href="/">About</Link>
            <Link href="/">Courses</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>
        <div>
          <h2 className=" text-lg font-bold py-4">Follow Us</h2>
          <div className="flex gap-4">
            <Link href="/">Facebook</Link>
            <Link href="/">Twitter</Link>
            <Link href="/">Instagram</Link>
          </div>
        </div>
        <div>
          <h2 className=" text-lg font-bold py-4">Contact Us</h2>
          <p>
            New Delhi, India <br /> Delhi 10001 <br /> Email: <br />{" "}
            info@musicschool.com <br /> phone: +91 123456789
          </p>
        </div>
      </div>
      <p className="text-center mt-8 text-xs p-8">
        © 2023 Music School. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
