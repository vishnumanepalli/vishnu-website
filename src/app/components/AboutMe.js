import React from 'react';
import Image from 'next/image';

export default function AboutMe({ about, personalInfo }) {
  return (
    <section id="about" className="mb-8">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <div className="flex mb-6 gap-6">
        <div className="w-1/4 mr-4">
          <div className="relative w-full aspect-square rounded-lg overflow-hidden">
            <Image
              src={about.image}
              alt="Profile Picture"
              layout="fill"
              objectFit="cover"
              // className="rounded-lg"
            />
          </div>
        </div>
        <div className="w-3/4">
          <p className="mb-4">{about.description}</p>
          <div>
            <h3 className="font-semibold">Interests & Skills</h3>
            <p>Interests: {about.interests}</p>
            <p>Skills: {about.skills}</p>
            <p>Languages: {about.languages}</p>
            <p>Hobbies: {about.hobbies}</p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <h3 className="font-semibold mb-2">Contact Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p>
              <strong>Full Name: </strong>
              {personalInfo.name}
            </p>
            <p>
              <strong>Email</strong>: {personalInfo.email}
            </p>
            <p>
              <strong>Phone: </strong>
              {personalInfo.phone}
            </p>
            <p>
              <strong>Residence: </strong>
              {about.residence}
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-1">
              <strong>Connect with me:</strong>
            </h4>
            <div className="flex flex-wrap gap-4">
              <a
                href={personalInfo.github}
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
              <a
                href={personalInfo.website}
                className="text-blue-600 hover:underline"
              >
                Website
              </a>
              <a
                href={personalInfo.linkedin}
                className="text-blue-600 hover:underline"
              >
                LinkedIn
              </a>
              <a
                href={about.resume_link}
                className="text-blue-600 hover:underline"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
