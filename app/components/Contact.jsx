import Image from "next/image";
import Link from "next/link";
import React from "react";
import Linkedin from "../../public/linkedinIcon.png";
import Github from "../../public/githubIcon.png";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full px-12 py-20 scroll-mt-20"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Let’s Connect
          </h2>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            I’m always excited to connect, share ideas, and collaborate on
            projects. Let’s work together to build something impactful and
            inspiring.
          </p>

          <div className="flex gap-4">
            <Link
              href="https://github.com/m-osama-dev"
              target="_blank"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-black shadow-md
                         transition-transform duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <Image
                src={Github}
                alt="GitHub"
                width={24}
                height={24}
                className="object-contain"
              />
            </Link>

            <Link
              href="https://www.linkedin.com/in/m-osama-dev"
              target="_blank"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0077b5] shadow-md
                         transition-transform duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <Image
                src={Linkedin}
                alt="LinkedIn"
                width={24}
                height={24}
                className="object-contain"
              />
            </Link>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
          <form className="flex flex-col space-y-6">
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="YourEmail@Email.com"
                required
                autoComplete="off"
                className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-400 
                           focus:ring-2 focus:ring-[#00adb5] focus:outline-none transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                required
                placeholder="Subject"
                autoComplete="off"
                className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-400 
                           focus:ring-2 focus:ring-[#00adb5] focus:outline-none transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                placeholder="Let’s talk about ..."
                className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 h-32 resize-none text-gray-800 
                           placeholder-gray-400 focus:ring-2 focus:ring-[#00adb5] focus:outline-none transition-all duration-300"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#00adb5] hover:bg-[#008188] cursor-pointer text-white font-medium py-3 rounded-lg 
                         transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
