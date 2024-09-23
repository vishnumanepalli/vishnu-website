// app/components/Footer.js
import Link from 'next/link';

export default function Footer({ personalInfo }) {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Personal Info</h3>
            <p>{personalInfo.name}</p>
            <p>Phone: {personalInfo.phone}</p>
            <p>
              Email:{' '}
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:underline"
              >
                {personalInfo.email}
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Professional Links</h3>
            <ul>
              <li>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Personal Website
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Site Map</h3>
            <ul>
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:underline">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/#education" className="hover:underline">
                  Education
                </Link>
              </li>
              <li>
                <Link href="/#experience" className="hover:underline">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:underline">
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
