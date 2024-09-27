// app/components/Experience.js
import SectionTitle from "./section/SectionTitle";

export default function Experience({ experience }) {
  return (
    <section id="experience" className="mb-8">
      <SectionTitle title="Experience" id="experience" />
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
