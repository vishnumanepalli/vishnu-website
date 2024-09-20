// app/components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="#toc" className="text-white hover:text-gray-300">
            Table of Contents
          </Link>
        </li>
        <li>
          <Link href="#about" className="text-white hover:text-gray-300">
            About Me
          </Link>
        </li>
        <li>
          <Link href="#education" className="text-white hover:text-gray-300">
            Education
          </Link>
        </li>
        <li>
          <Link href="#companies" className="text-white hover:text-gray-300">
            Companies
          </Link>
        </li>
        <li>
          <Link href="#experience" className="text-white hover:text-gray-300">
            Experience
          </Link>
        </li>
      </ul>
    </nav>
  );
}
