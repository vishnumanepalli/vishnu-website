// app/components/Experience.js
export default function Experience({ experience }) {
  return (
    <section id="experience" className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      {experience.map((exp, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold">{exp.title}</h3>
          <p>
            {exp.company}, {exp.location}
          </p>
          <p>{exp.duration}</p>
          <ul className="list-disc pl-5">
            {exp.responsibilities.map((resp, respIndex) => (
              <li key={respIndex}>{resp}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
