
import React from 'react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Python & GenAI Developer",
      company: "Full-time Role",
      duration: "1+ Year",
      description: "Developing intelligent applications using Python and generative AI technologies. Working with FastAPI, LangChain, and Hugging Face to build scalable AI solutions.",
      technologies: ["Python", "FastAPI", "GenAI", "LangChain", "Hugging Face", "Docker"],
      type: "full-time"
    },
    {
      title: "Software Development Intern",
      company: "Internship Experience",
      duration: "5 Months",
      description: "Gained hands-on experience in Python development, database management, and API integration. Contributed to various projects involving data processing and web application development.",
      technologies: ["Python", "MySQL", "SQL", "API Development", "Git"],
      type: "internship"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-cyan-400 to-blue-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-black z-10"></div>

                {/* Content */}
                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        exp.type === 'full-time' 
                          ? 'bg-cyan-500/20 text-cyan-400' 
                          : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {exp.type === 'full-time' ? 'Full-time' : 'Internship'}
                      </span>
                      <span className="text-gray-400 text-sm">{exp.duration}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
                    <h4 className="text-cyan-400 font-medium mb-4">{exp.company}</h4>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-lg text-sm border border-gray-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
