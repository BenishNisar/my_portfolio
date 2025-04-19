import React from 'react';
import developerImg from '/assets/images/benish.jpg';

const Home = () => {
  return (
    <section className="h-[100vh] flex items-center bg-gradient-to-r from-black via-cyan-900 to-black text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE TEXT */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              Hi, I'm <br />
              <span className="shine text-yellow-300">Full Stack Developer</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6">
              I craft modern web experiences with React, TailwindCSS, Node.js, and beyond.
            </p>
            <div className="flex justify-center md:justify-start gap-4 flex-wrap">
              <a
                href="#"
                className="px-6 py-3 font-semibold text-black bg-yellow-400 rounded-full shadow-lg hover:bg-yellow-300 transition"
              >
                📄 Download CV
              </a>
              <a
                href="#contact"
                className="px-6 py-3 font-semibold border border-white rounded-full hover:bg-white hover:text-black transition"
              >
                💬 Contact Me
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: IMAGE WITH SHINE BORDER */}
          <div className="flex justify-center md:justify-end relative">
            <div className="relative w-full max-w-sm md:max-w-md rounded-xl p-[3px] bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-600 animate-border-shine">
              <div className="rounded-xl overflow-hidden">
                <img
                  src={developerImg}
                  alt="Developer"
                  className="w-full rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;
