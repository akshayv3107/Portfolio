import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="text-white py-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-20 text-center">
        {/* Name */}
        <h2 className="text-xl font-semibold text-purple-500">Akshay Veerabhadraiah</h2>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
          ].map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Socials */}
        <div className="flex justify-center gap-6 mt-6">
          {[
            { icon: <FaFacebook />, link: "https://www.facebook.com/akshayappu.cr7" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/akshay-v-068786203/" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/v_akshay_7/" },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 mt-6">
          © {new Date().getFullYear()} Akshay Veerabhadraiah.
        </p>
      </div>
      
    </footer>
  );
};

export default Footer;
