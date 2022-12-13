import React from "react";
import chatApp from "../assets/portfolio/chatApp.png";
import kdCalc from "../assets/portfolio/kdCalc.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: chatApp,
      href: 'https://www.youtube.com/watch?v=GT4q86n899A',
      link: 'https://github.com/s-bolitho/chatroom-app',
      video: 'https://www.youtube.com/watch?v=GT4q86n899A'
    },
    {
      id: 2,
      src: kdCalc,
      href: 'https://www.youtube.com/watch?v=gZVjnWeTSsM',
      link: 'https://github.com/s-bolitho/f27-capstone-better',
      video: 'https://www.youtube.com/watch?v=gZVjnWeTSsM'
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href, link, video }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <a href={video}>
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              </a>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={href}>
                  Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={link}>
                  Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;