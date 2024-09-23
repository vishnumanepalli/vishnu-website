// app/page.js
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TableOfContents from "./components/TableOfContents";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import TechnicalSkills from "./components/TechnicalSkills";
import resumeData from "./config/resumeData.json";

export default function Home() {
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
