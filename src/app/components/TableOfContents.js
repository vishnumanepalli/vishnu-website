// app/components/TableOfContents.js
import Link from "next/link";
import SectionTitle from "./section/SectionTitle";

export default function TableOfContents() {
  return (
    <section id="toc" className="mb-8">
      <SectionTitle title="Table of Contents" id="toc" />
      <ul className="list-disc pl-5">
        <li>
          <Link href="#about">About Me</Link>
        </li>
        <li>
          <Link href="#education">Education</Link>
        </li>
        <li>
          <Link href="#companies">Companies Worked On</Link>
        </li>
        <li>
          <Link href="#experience">Experience</Link>
        </li>
      </ul>
    </section>
  );
}
