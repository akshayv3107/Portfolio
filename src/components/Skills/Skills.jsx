import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
     className="scroll-mt-28 py-20 font-sans bg-skills-gradient clip-path-custom"
  >
     <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-20">
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-20">
    {/* Title */}
    <div className="text-center mb-12 max-w-2xl mx-auto">
      <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-[clamp(1rem,1.2vw,1.125rem)] font-medium">
        A collection of my technical skills and expertise honed through projects and experiences
      </p>
    </div>

    {/* Skills Grid */}
    <div className="flex flex-wrap gap-6 justify-center">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-900/90 backdrop-blur-md px-6 py-8 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_rgba(130,69,236,0.3)]"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-4 text-center">
            {category.title}
          </h3>
          <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} perspective={1000} scale={1.05} transitionSpeed={1000}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center bg-transparent border-2 border-gray-700 rounded-xl py-4 px-4 text-center"
                >
                  <img src={skill.logo} alt={`${skill.name} logo`} className="w-8 h-8 mb-2" />
                  <span className="text-sm text-gray-300 font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
    </div>
    </div>
  </section>
);

export default Skills;
