// app/components/Projects.js
import Link from 'next/link';

export default function Projects({ projects }) {
  return (
    <section id="projects" className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.slice(0, 4).map((project, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-gray-600 mb-2">{project.duration}</p>
            <p className="mb-2">{project.description.slice(0, 100)}...</p>
          </div>
        ))}
      </div>
      <Link
        href="/projects"
        className="text-blue-500 hover:underline mt-4 inline-block"
      >
        View All Projects →
      </Link>
    </section>
  );
}
