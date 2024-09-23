// app/projects/page.js
import Link from 'next/link';
import resumeData from '../config/resumeData.json';

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <Link
        href="/"
        className="text-blue-500 hover:underline mb-4 inline-block"
      >
        ← Back to Home
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resumeData.projects.map((project, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
            <p className="text-gray-600 mb-2">{project.duration}</p>
            <p className="text-gray-600 mb-2">{project.category}</p>
            <p className="mb-2">{project.description}</p>
            {project.skills && (
              <p className="text-sm text-gray-500 mb-2">
                Skills: {project.skills}
              </p>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              GitHub Repository
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
