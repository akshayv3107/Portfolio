import React, { useEffect, useState, useCallback } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = useCallback(() => setSelectedProject(null), []);

  // Close on ESC
  useEffect(() => {
    if (!selectedProject) return;
    const onKey = (e) => e.key === "Escape" && closeModal();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedProject, closeModal]);

  return (
    <section id="work" className="scroll-mt-28 py-20 font-sans relative">
       <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-20">
      {/* Section Title */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-[clamp(1rem,1.2vw,1.125rem)] font-medium">
          A showcase of some of the best projects I’ve worked on.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => openModal(project)}
            className="border border-white bg-gray-900/80 backdrop-blur rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform"
          >
            <img
              src={project.imagee}
              alt={project.title}
              className="w-full aspect-video object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-2 sm:p-4"
          onClick={closeModal} // click backdrop to close
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative bg-gray-900 rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking content
          >
            {/* Sticky header with close button always visible */}
            <div className="sticky top-0 z-20 flex justify-end bg-gray-900/95 backdrop-blur p-2 sm:p-3">
              <button
                onClick={closeModal}
                aria-label="Close"
                className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full
                           bg-gray-800/90 hover:bg-purple-700 text-white text-2xl font-bold
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
              >
                ×
              </button>
            </div>

            {/* Scrollable content area */}
            <div className="overflow-auto">
              {/* Media */}
              <div className="w-full flex justify-center px-3 sm:px-4 pb-3">
                <video
                  autoPlay
                  muted
                  playsInline
                  controls
                  src={selectedProject.image}
                  className="w-full h-auto max-h-[50vh] sm:max-h-[60vh] object-contain rounded-lg"
                />
              </div>

              {/* Body */}
              <div className="px-4 sm:px-6 pb-6">
                <h3 className="text-[clamp(1.25rem,2vw,1.75rem)] font-bold text-white mb-3">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mb-5 text-[clamp(0.95rem,1.05vw,1rem)] leading-relaxed">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gray-800 hover:bg-purple-700 text-gray-300 hover:text-white py-2 rounded-xl text-center font-semibold transition-colors"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </section>
  );
};

export default Work;
