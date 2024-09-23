import React from 'react';

const EducationImage = ({ image, alt }) => {
  return <Image src={image} alt={alt} className="object-contain" />;
};

export default function Education({ education }) {
  return (
    <section id="education" className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <div className="grid grid-cols-1 gap-4">
        {education.map((edu, index) => (
          <div
            key={index}
            className="flex bg-white rounded-lg shadow-md overflow-hidden"
          > 
            <div className="flex-grow p-6">
              <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
              <p className="text-sm text-gray-600 mb-1">{edu.institute}</p>
              <p className="text-sm mb-1">CGPA/Percentage: {edu.cgpa}</p>
              <p className="text-sm">Year: {edu.year}</p>
            </div>
            <div className="flex items-center justify-center p-2 bg-gray-100 w-40">
              <EducationImage image={edu.image} alt={`${edu.institute} logo`} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
