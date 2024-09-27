// app/page.js
"use client"

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import TableOfContents from "./components/TableOfContents";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import TechnicalSkills from "./components/TechnicalSkills";
import resumeData from "./config/resumeData.json";
import { disableInspect } from "./utils/disable-inspect";
import { useEffect } from "react";

export default function Home() {
  //   useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     disableInspect();
  //   }
  // }, []);
  return (
    <div className="mx-auto px-4">
      <Navbar />

      <main className="py-8">
        <h1 className="text-4xl font-bold mb-8">
          Welcome to {resumeData.personalInfo.short_name} Personal
          Website
        </h1>

        <TableOfContents />
        <AboutMe
          about={resumeData.about}
          personalInfo={resumeData.personalInfo}
        />
        <Education education={resumeData.education} />
        <Experience experience={resumeData.experience} />
        <Projects projects={resumeData.projects} />
        <TechnicalSkills skills={resumeData.technicalSkills} />
      </main>

      <Footer personalInfo={resumeData.personalInfo} />
    </div>
  );
}
