"use client";
import React, { useRef, useState } from "react";
import { PROJECTS_DATA } from "../data";
import Link from "next/link";
import { CodeBracketIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { useInView, motion } from "framer-motion";

const Project = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });

  const cardVarients = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const filteredProjects = PROJECTS_DATA.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects" className="w-full px-12 py-16 scroll-mt-20">
      <h2 className="text-center text-4xl font-bold text-gray-800 mt-6 mb-12">
        My Projects
      </h2>

      {/* Filter buttons */}
      <div className="flex flex-row justify-center items-center gap-4 py-6">
        {["All", "Web", "Mini"].map((tagName) => (
          <button
            key={tagName}
            className={`${
              tag === tagName
                ? "bg-[#00adb5] text-white"
                : "text-gray-600 border border-gray-300 hover:bg-gray-100"
            } rounded-full px-6 py-2 text-base font-medium transition`}
            onClick={() => setTag(tagName)}
          >
            {tagName}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 items-stretch">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVarients}
            initial="initial"
            animate={isInview ? "animate" : "initial"}
            transition={{ duration: 0.4, delay: index * 0.3 }}
            className="flex"
          >
            {/* Card */}
            <div className="flex flex-col bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden w-full h-[370px]">
              {/* Image + overlay */}
              <div className="relative group h-48">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-500">
                  <Link
                    href={project.gitUrl}
                    className="h-12 w-12 flex items-center justify-center rounded-full border-2 border-gray-200 bg-white hover:scale-110 transition"
                  >
                    <CodeBracketIcon className="h-6 w-6 text-black" />
                  </Link>
                  <Link
                    href={project.previewUrl}
                    className="h-12 w-12 flex items-center justify-center rounded-full border-2 border-gray-200 bg-white hover:scale-110 transition"
                  >
                    <GlobeAltIcon className="h-6 w-6 text-[#00adb5]" />
                  </Link>
                </div>
              </div>

              {/* Title + Description */}
              <div className="flex flex-col flex-grow p-5">
                <h5 className="text-lg font-semibold text-gray-800 mb-2">
                  {project.title}
                </h5>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {project.description}
                </p>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Project;
