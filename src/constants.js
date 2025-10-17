// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";

import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";

import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";

import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";

import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";

// Experience Section Logo's
import webverseLogo from "./assets/company_logo/Innovkraft.png";
import agcLogo from "./assets/company_logo/logo-societe-generale.png";


// Education Section Logo's
import glaLogo from "./assets/education_logo/gla_logo.png";
import bsaLogo from "./assets/education_logo/bsa_logo.png";
import vpsLogo from "./assets/education_logo/vps_logo.png";

// Project Section Logo's

import csprepLogo from "./assets/work1.mp4";

import taskremLogo from "./assets/work.mp4";
import npmLogo from "./assets/work2.mp4";
import npmLogo1 from "./assets/work-pixel.png";
import npmlogo2 from "./assets/work-fit.png";
import npmlogo3 from "./assets/work-ai.png";


export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Angular", logo: angularLogo },
      // { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Sass", logo: sassLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
      // { name: "Figma", logo: figmaLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Spring", logo: springbootLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Java", logo: javaLogo },
      { name: "C++", logo: cppLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "Python", logo: pythonLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      // { name: "Compass", logo: mcLogo },
      // { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: agcLogo,
    role: "Fullstack Developer",
    company: "Societe Generale",
    date: "August 2022 - May 2024",
    desc: "I am a Full Stack Developer with 2+ years of experience building scalable applications using Java, Spring Boot, React, Angular, and SQL. At Société Générale, I worked on modernizing enterprise platforms by developing secure REST APIs, optimizing database queries with JDBC, and collaborating in Agile teams to deliver reliable financial software. Skilled in cloud platforms (AWS, Azure, GCP) and DevOps practices, I focus on creating efficient, user-friendly, and maintainable systems.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "Spring",
      "Redux",
      "Angular Js",
      "Github",
      "Jenkins",
      "Kubernetes"
    ],
  },
  {
    id: 1,
    img: webverseLogo,
    role: "Web Developer Intern",
    company: "Innovkraft",
    date: "August 2023 - October 2023",
    desc: "Wroked as a Designer and Developer Intern at Innovkraft, where I gained hands-on experience designing web and mobile applications on figma and reproducing them by developing in wordpress and php.Also worked on flutter development for mobile applications.",
    skills: [
      "Figma",
      "Wordpress",
      "Flutter",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
  },

];

export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "GLA University, Mathura",
    date: "Sept 2022 - July 2024",
    grade: "7.81 CGPA",
    desc: "I have completed my Master's degree (MCA) in Computer Applications from GLA University, Mathura. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Master of Computer Applications - MCA",
  },
  {
    id: 1,
    img: bsaLogo,
    school: "BSA College, Mathura",
    date: "Sept 2018 - Aug 2021",
    grade: "73.2%",
    desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from BSA College, Mathura. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Science - BSC (Computer Science)",
  },
  {
    id: 2,
    img: vpsLogo,
    school: "Vatsalya Public School Govardhan, Mathura",
    date: "Apr 2017 - March 2018",
    grade: "78%",
    desc: "I completed my class 12 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "CBSE(XII) - PCM with Computer Science",
  },
  {
    id: 3,
    img: vpsLogo,
    school: "Vatsalya Public School Govardhan, Mathura",
    date: "Apr 2015 - March 2016",
    grade: "87.5%",
    desc: "I completed my class 10 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Science with Computer.",
    degree: "CBSE(X), Science with Computer Application",
  },
];

export const projects = [

  {
    id: 1,
    title: "AI-Power-Frontend-Project",
    description:
      "Engineered a mobile first SPA with parallax animations, bento grid layouts and gradient styling, applying a component driven architecture and responsive design principles. The site uses parallax animations triggered by mouse movement and scrolling to create engaging visual depth. It also employs complex UI geometry achieved through Tailwind’s utility classes",
    image: csprepLogo,
    imagee:npmLogo1,
    tags: [
      "React JS",
      "parallax animation",
      "Vite",
      "Tailwind",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/akshayv3107/AIPower",
    
  },
 
  {
    id: 3,
    title: "Fitness-Tutor-Application",
    description:
      "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
    image: npmLogo,
    imagee:npmlogo2,
    tags: ["React JS", "Node.js", "NPM", "API", "MongoDb"],
    github: "https://github.com/akshayv3107/Fitness-Application---Frontend-Project",
    
  },
  {
    id: 4,
    title: "Pixel-Pulse-Frontend-Project",
    description:" Developed a responsive single page agency site featuring a sticky navigation bar and persistent dark/light theme toggle. Implemented animated sections (hero with gradient headline, services with interactive gradient cards, portfolio grid, team showcase) and a serverless contact form using Web3Forms.Insights: Gained experience structuring component driven UIs, persisting user preferences (dark mode), designing            mobile first layouts, and integrating serverless APIs for form handling",
    image: taskremLogo,
    imagee:npmlogo3,
    tags: ["JavaScript", "React", "HTML", "CSS", "Tailwind","Vite","API"],
    github: "https://github.com/akshayv3107/Pixel-Pulse",
   
  },
  
];
