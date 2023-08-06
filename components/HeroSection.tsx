"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32  ">
        <div >
          <Image
            src="/profile.png"
            alt="profile"
            width={325}
            height={325}
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
        <h1 className="font-sans text-3xl md:text-2xl"> Hello, I'm</h1>
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Zares Tng</h1>
          <p className="font-sans text-3xl mt-5 mb-8 md:text-2xl">
            I&#39;m an{" "}
            <span className="font-semibold text-green-700">
              anspiring Software Engineer{" "}
            </span>
            with a keen interest in{" "}
            <span className="font-semibold text-green-700">
              frontend development
            </span>
            . My passion lies in crafting responsive and performant web applications that deliver exceptional user experiences.
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-green-700 rounded shadow hover:bg-green-800"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection