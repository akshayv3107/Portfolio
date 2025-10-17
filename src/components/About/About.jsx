import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile1.png";

const About = () => {
  const prefersReducedMotion = typeof window !== "undefined" &&
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <section id="about" className="py-10 sm:py-14 lg:py-20 font-sans">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-20">
        <div className="grid items-center gap-10 lg:gap-16 md:grid-cols-2">
          {/* Left: Copy */}
          <div className="order-2 md:order-1 text-center md:text-left">
            {/* Greeting */}
            <h1 className="text-white font-bold leading-tight text-[clamp(1.75rem,3.5vw,2.5rem)]">
              Hi, I am
            </h1>
            {/* Name */}
            <h2 className="text-white font-extrabold leading-tight mt-1 text-[clamp(2.25rem,5vw,3.75rem)]">
              Akshay Veerabhadraiah
            </h2>

            {/* Typing headline */}
            <h3 className="font-semibold mt-3 text-[clamp(1.1rem,2.2vw,1.6rem)] text-[#8245ec]">
              <span className="text-white">I am a </span>
              <ReactTypingEffect
                text={["Frontend Engineer", "Fullstack Developer", "Software Engineer"]}
                speed={100}
                eraseSpeed={45}
                typingDelay={400}
                eraseDelay={1700}
                cursorRenderer={(cursor) => (
                  <span className="text-[#8245ec]">{cursor}</span>
                )}
                
                displayTextRenderer={(text) =>
                   <span className="text-[#8245ec]">{text}</span>
                }
              />
            </h3>

            {/* About paragraph */}
            <p className="text-gray-300/90 mt-6 md:mt-8 leading-relaxed max-w-prose mx-auto md:mx-0 text-[clamp(0.95rem,1.3vw,1.125rem)]">
              I’m a full‑stack developer who builds scalable, reliable web apps. I work across the
              stack with Java, Python, C++, React, Next.js, Angular, and Spring Boot. I’m also
              comfortable with SQL/NoSQL, cloud (AWS, Azure, GCP), and DevOps tooling for
              end‑to‑end delivery.
            </p>

            {/* Resume Button */}
            <div className="mt-8">
              <a
                href="https://docs.google.com/document/d/186ykbVM2miMttof4IJB-Q50OOVRai_-t/edit?usp=drive_link&ouid=116517186654556151588&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View my resume (opens in a new tab)"
                className="inline-flex w-full sm:w-auto items-center justify-center text-white py-3 px-6 rounded-full text-[clamp(1rem,1.2vw,1.125rem)] font-bold transition-transform duration-200 hover:scale-[1.03] focus:scale-[1.03] outline-none focus-visible:ring-2 focus-visible:ring-[#a855f7]/60"
                style={{
                  background: "linear-gradient(90deg, #8245ec, #a855f7)",
                  boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
                }}
              >
                View my resume
              </a>
            </div>
          </div>

          {/* Right: Portrait */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <Tilt
              className="relative aspect-square w-40 sm:w-56 md:w-80 lg:w-[28rem] xl:w-[32rem] rounded-full"
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={900}
              scale={1.03}
              transitionSpeed={900}
              gyroscope={true}
              glareEnable={false}
              tiltReverse={false}
              disabled={prefersReducedMotion}
            >
              <div className="absolute inset-0 rounded-full border-2 sm:border-4 border-purple-700/80" />
              <img
                src={profileImage}
                alt="Portrait of Akshay"
                className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_22px_rgba(130,69,236,0.55)]"
                loading="eager"
                decoding="async"
              />
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
