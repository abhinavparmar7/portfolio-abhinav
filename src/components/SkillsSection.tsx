
import React from 'react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 85 },
        { name: "JavaScript", level: 75 },
      ]
    },
    {
      title: "AI/ML Frameworks",
      skills: [
        { name: "LangChain", level: 85 },
        { name: "Hugging Face", level: 80 },
        { name: "OpenAI API", level: 90 },
      ]
    },
    {
      title: "Backend Frameworks",
      skills: [
        { name: "FastAPI", level: 90 },
        { name: "Flask", level: 80 },
        { name: "Django", level: 70 },
      ]
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Docker", level: 75 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-cyan-400/20 rounded-full animate-spin"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-blue-400/20 rounded-full animate-spin animate-reverse"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-cyan-300/20 rounded-full animate-ping"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6 animate-[scale-x_1s_ease-out]"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto opacity-0 animate-[fade-in_0.8s_ease-out_0.3s_forwards]">
            My expertise spans across various technologies in AI development, backend engineering, and data management
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 opacity-0 animate-[fade-in_0.8s_ease-out_${categoryIndex * 0.2}s_forwards]`}
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-6 transform hover:translate-x-2 transition-transform duration-300">{category.title}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-300">{skill.name}</span>
                      <span className="text-gray-400 text-sm group-hover:text-cyan-300 transition-colors duration-300">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000 ease-out transform origin-left group-hover:scale-x-105 animate-[scale-x_1.5s_ease-out_${categoryIndex * 0.2 + skillIndex * 0.1}s_forwards]"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Additional Skills */}
        <div className="mt-12 text-center opacity-0 animate-[fade-in_0.8s_ease-out_1s_forwards]">
          <h3 className="text-2xl font-semibold text-white mb-6 transform hover:scale-105 transition-transform duration-300">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Git & GitHub', 'AWS', 'REST APIs', 'Microservices', 'Agile/Scrum', 'CI/CD', 'Redis', 'MongoDB', 'Pandas', 'NumPy'].map((tech, index) => (
              <span
                key={index}
                className={`px-4 py-2 bg-gradient-to-r from-gray-700/50 to-gray-800/50 text-gray-300 rounded-lg border border-gray-600/50 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 opacity-0 animate-[fade-in_0.6s_ease-out_${1.2 + index * 0.1}s_forwards]`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
