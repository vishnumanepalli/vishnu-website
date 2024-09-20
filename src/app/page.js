// app/page.js
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TableOfContents from './components/TableOfContents';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Companies from './components/Companies';
import Experience from './components/Experience';

export default function Home() {
  return (
    <div className="mx-auto px-4">
      <Navbar />

      <main className="py-8">
        <h1 className="text-4xl font-bold mb-8">
          Welcome to My Personal Website
        </h1>

        <TableOfContents />
        <AboutMe />
        <Education />
        <Companies />
        <Experience />
      </main>

      <Footer />
    </div>
  );
}
