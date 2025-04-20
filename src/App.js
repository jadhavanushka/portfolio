import React, { useState, useEffect, useRef } from 'react';
import { BiLogoGithub, BiGlobe, BiLogoLinkedinSquare, BiSolidEnvelope } from 'react-icons/bi';
import { GoArrowUpRight } from 'react-icons/go'
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200">
      <div className="max-w-4xl mx-auto pt-16 md:pt-24 px-6">
        <h1 className="text-4xl md:text-6xl font-semibold mb-2 tracking-tight hover:text-teal-400">
          <a href="https://anushkajadhav.vercel.app/">Anushka Jadhav</a>
        </h1>
        <p className="text-base md:text-xl text-slate-300 mb-4">Software Developer</p>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold border-b pb-2 border-slate-700">About me</h2>
          <p className="text-slate-400 mt-2 text-pretty">
            I'm a software developer who builds web applications, mainly focusing on the frontend.
            I like creating interfaces that are both easy to use and easy to maintain, with a balance between
            good design and solid code.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold border-b pb-2 border-slate-700">Projects</h2>
          <div className="mt-4 gap-4 grid grid-cols-1 md:grid-cols-2">
            {projects.map((project, index) => (
              <a href={project.live} target="_blank" rel="noopener noreferrer" >
                <div key={index} className="flex flex-col justify-between bg-[#112134cc] hover:bg-slate-800 p-4 rounded-lg shadow-lg h-full project">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-1 project-title">
                      {project.name} <GoArrowUpRight className='icon' />
                    </h3>
                    <p className="text-slate-400 text-sm">{project.description}</p>
                  </div>
                  <div className="mt-4 flex">
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                      className="text-slate-500 hover:text-teal-400 mr-2 text-2xl">
                      <BiGlobe />
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="text-slate-500  hover:text-teal-400 mr-2 text-2xl">
                      <BiLogoGithub />
                    </a>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold border-b pb-2 border-slate-700">Skills</h2>
          <ul className="text-slate-300 mt-2 flex flex-wrap gap-2 text-sm">
            {skills.map((skill, index) => (
              <li key={index} className="bg-[#112134cc] shadow px-3 py-1 rounded-full w-fit h-fit">{skill}</li>
            ))}
          </ul>
        </section>

        <section className="my-16 text-center">
          <h2 className="text-2xl font-semibold mb-2">Let's Connect!</h2>
          <p className="text-slate-400 mb-4">
            I'm always open to discussing new opportunities and collaborations. <br className='hidden md:block' />
            Feel free to reach out via email or check out my work on GitHub and LinkedIn!
          </p>
          <div className="flex justify-center text-slate-500 text-2xl gap-4">
            <a href="mailto:anushkajadhav2882@gmail.com" target="_blank"
              rel="noopener noreferrer" className='hover:text-teal-400'>
              <BiSolidEnvelope />
            </a>
            <a href="https://github.com/jadhavanushka" target="_blank"
              rel="noopener noreferrer" className='hover:text-teal-400'>
              <BiLogoGithub />
            </a>
            <a href="https://linkedin.com/in/jadhav-anushka/" target="_blank"
              rel="noopener noreferrer" className='hover:text-teal-400'>
              <BiLogoLinkedinSquare />
            </a>
          </div>
        </section>
      </div>

      <footer className="flex flex-col md:flex-row justify-between text-center text-xs text-slate-500 py-3 px-6 bg-slate-800">
        <span>
          © 2025 Anushka Jadhav. Built with React & Tailwind CSS.
        </span>
        <span>
          Design inspired by <a href="https://brittanychiang.com" target="_blank" rel="noopener noreferrer"
            className="hover:underline hover:text-slate-400">Brittany Chiang</a>.
        </span>
      </footer>

      <GlowCursor />

    </div>
  );
};

const projects = [
  {
    name: "FilmFind",
    description: "A movie search web app using React, Tailwind CSS, and OMDB API.",
    live: "https://film-find.vercel.app",
    github: "https://github.com/jadhavanushka/FilmFind",
  },
  {
    name: "Algorithm Visualizer",
    description: "An interactive tool for visualizing data structures and algorithms.",
    live: "https://algorithm-visualizer-tau-one.vercel.app/",
    github: "https://github.com/jadhavanushka/Algorithm-Visualizer",
  },
  {
    name: "Book Haven",
    description: "A full-stack e-commerce platform for an online bookstore with Flask & MySQL.",
    live: "https://bookhaven.alwaysdata.net",
    github: "https://github.com/jadhavanushka/Bookstore-website",
  },
  {
    name: "Definity",
    description: "A dictionary app using Django and Merriam-Webster API.",
    live: "https://definity-8.vercel.app/",
    github: "https://github.com/jadhavanushka/Definity",
  },
  {
    name: "ColorCraftr",
    description: "Generates color palettes from images and features a hex color guessing game.",
    live: "https://colorcraftr.alwaysdata.net/",
    github: "https://github.com/jadhavanushka/ColorCraftr",
  },
  {
    name: "Cakelicious",
    description: "Basic e-commerce website for a cake shop built with HTML, CSS and JavaScript",
    live: "https://cakelicious.vercel.app/",
    github: "https://github.com/jadhavanushka/cake-shop-website",
  },
];

const skills = [
  "ReactJS", "TypeScript", "HTML", "CSS", "JavaScript", "Tailwind CSS", "Bootstrap",
  "Python", "Flask", "Django", "MySQL", "SQLite", "C", "C++", "Java", "Git/GitHub",
  "UI/UX Design", "Figma", "Wireframing", "Prototyping", "Vercel", "Google Cloud Storage", "Google App Engine"
];

const GlowCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{ left: position.x, top: position.y }}
      className="glow-cursor"
    />
  );
};

export default App;
