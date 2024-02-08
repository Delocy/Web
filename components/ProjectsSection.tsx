import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "StudyPals",
    subtitle: "React Native, Firebase, JavaScript, Expo",
    description:
      "StudyPals is an all-in-one productivity and mental wellness app that maximizes productivity and supports one's mental health.",
    image: "/StudyPals1.png",
    github: "https://github.com/Delocy/StudyPals",
    link: "https://drive.google.com/file/d/1nQBcyQO4m-uJkFFlBk09RQxKXVklxAKM/view?usp=drive_link",
  },
  {
    name: "FlightReservationSystem",
    subtitle: "Java, Jakarta EE, NetBeans",
    description:
      "FlightReservationSystem is an innovative back-end solution designed to streamline the online booking process for the aviation industry. Developed using Jakarta EE and NetBeans, this system is engineered to provide a robust and secure environment for managing flight reservations. It caters to multiple user roles, each with tailored access rights, enabling efficient management and an enhanced customer experience.",
    image: "/flightBooking.png",
    github: "https://github.com/Delocy/FlightReservationSystem",
    link: "https://github.com/Delocy/FlightReservationSystem",
  },
  {
    name: "CarHub",
    subtitle: "React, Next.js 13, TypeScript, Tailwind CSS",
    description:
      "In this project, through a comprehensive tutorial, I've learned how to use Tailwind CSS and incorporate APIs to style and deploy a modern and responsive landing page.",
    image: "/CarShowcase.png",
    github: "https://github.com/Delocy/car_showcase",
    link: "https://car-showcase-theta-rouge.vercel.app/",
  },
  {
    name: "Modern Next.js 13 Website with Framer Motion and Tailwind CSS",
    subtitle: " Next.js 13, Framer Motion, and Tailwind CSS",
    description: `
    In this project, through a comprehensive tutorial.
    I've learned how to bring seamless animations and stunning gradients to life through Framer Motion.
    The tutorial also guided me in harnessing the flexibility of flex properties and essential CSS concepts alongside the integration of flawlessly executed media queries for responsiveness.
    `,
    image: "/Metaverse.png",
    github: "https://github.com/Delocy/metaverse",
    link: "https://metaverse-lilac.vercel.app/",
  },
  {
    name: "Climavisions",
    subtitle: "Next.js 13, Framer Motion, and Tailwind CSS",
    description: `
    With reference to the previous two tutorial.
    I've learned how to apply framer motion and Tailwind CSS in creating a weather tracker website that uses the OpenWeather API and is also responsive.
    `,
    image: "/weatherApp.png",
    github: "https://github.com/Delocy/weather",
    link: "https://weather-three-mu.vercel.app/",
  },
  // Add more projects here
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        My Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-green-600 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="md:w-1/2">
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      <div className=" bg-white rounded-xl shadow-xl hover:opacity-70">
                        
                        <Image
                          src={project.image}
                          alt=""
                          width={1000}
                          height={1000}
                          className="rounded-xl shadow-xl hover:opacity-70"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-1">{project.name}</h1>
                    <p className="text-lg font-semi text-green-600 mb-4">{project.subtitle}</p>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;