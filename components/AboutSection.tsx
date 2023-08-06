import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Jupyter Notebooks" },
]

const languages = [
  {
    name: "HTML",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png",
  },
  {
    name: "CSS",
    imgSrc: "https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png",
  },
  {
    name: "JavaScript",
    imgSrc: "https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png",
  },
  {
    name: "React",
    imgSrc: "https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png",
  },
  {
    name: "Firebase",
    imgSrc: "/firebase.png",
  },
  {
    name: "Java",
    imgSrc: "/java.png",
  },
  {
    name: "Python",
    imgSrc: "/python.png",
  },
  {
    name: "MySQL",
    imgSrc: "/mysql.png",
  },
  // Add more languages here
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          My Tech Stack
          <hr className="w-6 h-1 mx-auto my-4 bg-green-600 border-0 rounded"></hr>
        </h1>

        <div className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-center max-w-screen-md mx-auto">
            {languages.map((language, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-lg shadow-md transform transition hover:scale-105"
              >
                <div className="group relative">
                  <figure >
                    <img
                      src={language.imgSrc}
                      alt={`${language.name} Logo`}
                      className="cursor-pointer inline-block w-24 h-24 md:w-32 md:h-32"
                    />
                  </figure>
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-green-700 text-white py-1 px-2 rounded">
                    {language.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection