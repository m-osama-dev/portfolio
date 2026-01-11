"use client";
import React from "react";
import { SERVICES_DATA } from "../data";
import { motion } from "framer-motion";

const ICON_STYLES = [
  { bg: "bg-pink-100", text: "text-pink-500" },
  { bg: "bg-blue-100", text: "text-blue-500" },
  { bg: "bg-green-100", text: "text-green-500" },
  { bg: "bg-yellow-100", text: "text-yellow-500" },
  { bg: "bg-purple-100", text: "text-purple-500" },
  { bg: "bg-red-100", text: "text-red-500" },
];

const Services = () => {
  return (
    <section id="services" className="w-full px-12 py-16 scroll-mt-20">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-gray-800">My Services</h2>
        <p className="max-w-2xl mx-auto mt-5 text-gray-600">
          I provide high-quality development and design solutions, ensuring
          seamless experiences across web platforms.
        </p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8">
        {SERVICES_DATA.map(({ id, title, description, Icon }, index) => {
          const style = ICON_STYLES[index % ICON_STYLES.length];
          return (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: id * 0.2 }}
              key={id}
              className="border border-gray-200 rounded-2xl p-8 bg-white shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className={`${style.bg} ${style.text} rounded-lg w-14 h-14 flex items-center justify-center`}>
                <Icon className="h-8 w-8" />
              </div>

              <h3 className="text-xl mt-6 mb-3 text-gray-800 font-semibold">{title}</h3>
              <p className="text-sm text-gray-600 leading-6">{description}</p>

              <a href="#" className="flex items-center gap-2 text-sm mt-5 text-[#00adb5] hover:underline">
                Read More
              </a>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
