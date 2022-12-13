import React from "react";
import github from "../assets/github.png";
import javascript from "../assets/javascript.png";
import html from "../assets/html.png";
import react from "../assets/react.png";
import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
      link: 'https://en.wikipedia.org/wiki/HTML'
    },
    {
      id: 2,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
      link: 'https://en.wikipedia.org/wiki/JavaScript'
    },
    {
      id: 3,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
      link: 'https://en.wikipedia.org/wiki/CSS'
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-600",
      link: 'https://en.wikipedia.org/wiki/React_(JavaScript_library)'
    },
    {
      id: 5,
      src: github,
      title: "GitHub",
      style: "shadow-gray-500",
      link: 'https://en.wikipedia.org/wiki/GitHub'
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
      link: 'https://en.wikipedia.org/wiki/Tailwind_CSS'
    }
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">
            These are the technologies that I have the most experience with
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {experiences.map(({ id, src, title, style, link }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <a href={link}>
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
