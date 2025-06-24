
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
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            A showcase of my work in AI development, API design, and full-stack applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-cyan-500/20 backdrop-blur-sm overflow-hidden hover:border-cyan-400/40 transition-all duration-300 transform hover:scale-105 ${
                project.featured ? 'lg:col-span-1' : ''
              }`}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-medium rounded-full">
                  Featured
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-lg text-sm border border-gray-600/50 hover:border-cyan-500/50 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 text-gray-300 rounded-lg hover:bg-gray-600/50 hover:text-white transition-all duration-300 border border-gray-600/50 hover:border-gray-500"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <ArrowUp size={16} className="rotate-45" />
                    Demo
                  </a>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com"
            className="inline-flex items-center gap-2 px-6 py-3 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-black transition-all duration-300 transform hover:scale-105"
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
