"use client";

import { useState } from "react";
import Link from "next/link";
import { handleSmoothScroll } from "@/app/utils/utils";

const menuItems = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About Me" },
  { href: "/#education", label: "Education" },
  { href: "/#experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/technical-skills", label: "Technical Skills" },
];

const MenuItem = ({ href, label }) => {
  const isHashLink = href.startsWith("/#");
  const targetId = isHashLink ? href.split("#")[1] : null;

  return (
    <li>
      <Link
        href={href}
        className="text-white hover:text-gray-300"
        onClick={isHashLink ? handleSmoothScroll(targetId) : undefined} // Pass target ID for internal links
      >
        {label}
      </Link>
    </li>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        <div className="text-white font-bold">My Website</div>
        <button
          onClick={toggleMenu}
          className="block md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <ul className="hidden md:flex md:space-x-4">
          {menuItems.map((item) => (
            <MenuItem key={item.href} {...item} />
          ))}
        </ul>
      </div>
      {isOpen && (
        <ul className="md:hidden mt-4">
          {menuItems.map((item) => (
            <MenuItem key={item.href} {...item} />
          ))}
        </ul>
      )}
    </nav>
  );
}
