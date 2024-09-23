// app/components/AboutMe.js
import React from 'react';
import Image from 'next/image';

export default function AboutMe({ about, personalInfo }) {
  return (
    <section id="about" className="mb-8">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <div className="relative w-full aspect-square rounded-lg overflow-hidden">
            <Image
              src={about.image}
              alt="Profile Picture"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="md:w-2/3">
          <p className="mb-4">{about.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">Personal Information</h3>
              <p>Name: {personalInfo.name}</p>
              <p>Email: {personalInfo.email}</p>
              <p>Phone: {personalInfo.phone}</p>
              <p>Residence: {about.residence}</p>
            </div>
            <div>
              <h3 className="font-semibold">Interests & Skills</h3>
              <p>Interests: {about.interests}</p>
              <p>Skills: {about.skills}</p>
              <p>Languages: {about.languages}</p>
              <p>Hobbies: {about.hobbies}</p>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold">Connect with me</h3>
            <div className="flex gap-4 mt-2">
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
