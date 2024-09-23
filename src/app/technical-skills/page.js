// app/technical-skills/page.js
import Link from 'next/link';
import resumeData from '../config/resumeData.json';

export default function TechnicalSkillsPage() {
  const { technicalSkills, keyCourses } = resumeData;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Technical Skills</h1>
      <Link
        href="/"
        className="text-blue-500 hover:underline mb-4 inline-block"
      >
        ← Back to Home
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Programming Languages</h2>
          <p>{technicalSkills.programmingLanguages}</p>
        </div>

        <div className="border p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Tools</h2>
          <p>{technicalSkills.tools}</p>
        </div>

        <div className="border p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Programming Skills</h2>
          <p>{technicalSkills.programmingSkills}</p>
        </div>

        <div className="border p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Key Courses</h2>
          <h3 className="text-xl font-semibold mt-2">CSE</h3>
          <p>{keyCourses.cse}</p>
          <h3 className="text-xl font-semibold mt-2">Mathematics</h3>
          <p>{keyCourses.mathematics}</p>
          <h3 className="text-xl font-semibold mt-2">Others</h3>
          <p>{keyCourses.others}</p>
        </div>
      </div>
    </div>
  );
}
