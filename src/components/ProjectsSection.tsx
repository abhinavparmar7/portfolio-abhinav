
import React from 'react';
import { Github, ArrowUp } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI-Powered Chat Application",
      description: "A sophisticated chatbot using LangChain and Hugging Face models for natural language processing and intelligent conversation flow.",
      technologies: ["Python", "LangChain", "Hugging Face", "FastAPI", "React"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "GenAI Content Generator", 
      description: "Automated content generation platform leveraging multiple AI models to create diverse content types with custom templates and prompts.",
      technologies: ["Python", "OpenAI API", "FastAPI", "Docker", "MySQL"],
      github: "#",
      demo: "#", 
      featured: true
    },
    {
      title: "Smart Data Analytics Dashboard",
      description: "Interactive dashboard for data visualization and analysis with AI-driven insights and automated reporting capabilities.",
      technologies: ["Python", "FastAPI", "React", "SQL", "Chart.js"],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "API Integration Platform",
      description: "Scalable platform for managing multiple API integrations with monitoring, rate limiting, and automated testing features.",
      technologies: ["Python", "FastAPI", "PostgreSQL", "Docker", "Redis"],
      github: "#",
      demo: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-20 w-40 h-40 animate-electromagnetic"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 animate-morph-shape"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 neon-border animate-cube-3d"></div>
      </div>

      {/* Matrix Background */}
      <div className="absolute inset-0 matrix-bg opacity-5"></div>

      {/* Quantum Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-quantum-particles"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 perspective-container">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 holographic-text animate-holo-text cyberpunk-glow transform hover:scale-105 transition-transform duration-500">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6 animate-data-stream cyberpunk-glow"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto opacity-0 animate-[holo-text_1s_ease-out_0.3s_forwards] cyberpunk-glow">
            A showcase of my work in AI development, API design, and full-stack applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl neon-border backdrop-blur-sm overflow-hidden hover:border-cyan-400/60 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30 opacity-0 animate-[holo-text_1s_ease-out_${index * 0.2}s_forwards] perspective-container rotate-3d ${
                project.featured ? 'lg:col-span-1' : ''
              }`}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-medium rounded-full animate-neural-pulse cyberpunk-glow">
                  Featured
                </div>
              )}

              {/* Holographic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-hologram-glitch"></div>
              
              {/* Particle Effect on Hover */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-quantum-particles"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                    }}
                  />
                ))}
              </div>

              <div className="p-6 relative z-10">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-all duration-300 transform group-hover:translate-x-2 holographic-text">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-lg text-sm neon-border hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-110 hover:bg-cyan-500/10 hover:text-cyan-400 cyberpunk-glow animate-neural-pulse"
                      style={{animationDelay: `${techIndex * 0.2}s`}}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 text-gray-300 rounded-lg hover:bg-gray-600/50 hover:text-white transition-all duration-300 neon-border hover:border-gray-500 transform hover:scale-110 hover:-translate-y-1 cyberpunk-glow"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/50 cyberpunk-glow animate-neural-pulse"
                  >
                    <ArrowUp size={16} className="rotate-45" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 opacity-0 animate-[holo-text_1s_ease-out_1s_forwards] perspective-container">
          <a
            href="https://github.com"
            className="inline-flex items-center gap-2 px-6 py-3 neon-border text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-black transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/50 cyberpunk-glow animate-hologram-glitch"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
