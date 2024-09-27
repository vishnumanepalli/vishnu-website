// app/components/TechnicalSkills.js
import Link from "next/link";
import SectionTitle from "./section/SectionTitle";

export default function TechnicalSkills({ skills }) {
  return (
    <section id="technical-skills" className="mb-8">
      <SectionTitle title="Technical Skills" id="technical-skills" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">Programming Languages</h3>
          <p>{skills.programmingLanguages}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Tools</h3>
          <p>{skills.tools}</p>
        </div>
      </div>
      <Link
        href="/technical-skills"
        className="text-blue-500 hover:underline mt-4 inline-block"
      >
        View All Technical Skills →
      </Link>
    </section>
  );
}
