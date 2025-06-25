
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-32 h-32 neon-border animate-cube-3d"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 animate-morph-shape"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 animate-electromagnetic"></div>
      </div>

      {/* Matrix Grid Background */}
      <div className="absolute inset-0 matrix-bg opacity-5"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in perspective-container">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 holographic-text animate-holo-text cyberpunk-glow transform hover:scale-105 transition-transform duration-500">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto animate-data-stream cyberpunk-glow"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-[slide-in-left_0.8s_ease-out] perspective-container">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl neon-border backdrop-blur-sm hover:border-cyan-400/60 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 cyberpunk-glow rotate-3d animate-hologram-glitch">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4 transform hover:translate-x-2 transition-transform duration-300 holographic-text">Python & GenAI Developer</h3>
              <p className="text-gray-300 leading-relaxed mb-4 opacity-0 animate-[holo-text_1s_ease-out_0.2s_forwards]">
                With 5 months of internship experience and over 1 year of full-time development, 
                I specialize in building intelligent applications using Python and cutting-edge 
                Generative AI technologies.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4 opacity-0 animate-[holo-text_1s_ease-out_0.4s_forwards]">
                My passion lies in creating innovative solutions that bridge the gap between 
                traditional software development and artificial intelligence, helping businesses 
                leverage the power of AI to solve complex problems.
              </p>
              <p className="text-gray-300 leading-relaxed opacity-0 animate-[holo-text_1s_ease-out_0.6s_forwards]">
                I'm constantly exploring new technologies and methodologies in the AI space, 
                from LangChain and Hugging Face to custom model implementations and API integrations.
              </p>
            </div>
          </div>

          <div className="space-y-6 animate-[slide-in-right_0.8s_ease-out] perspective-container">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl neon-border backdrop-blur-sm hover:border-cyan-400/60 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 cyberpunk-glow rotate-3d">
              <h4 className="text-xl font-semibold text-cyan-400 mb-4 transform hover:translate-x-2 transition-transform duration-300 holographic-text">Tech Stack</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Languages", items: ["Python", "SQL", "JavaScript"] },
                  { title: "Frameworks", items: ["FastAPI", "LangChain", "Hugging Face"] },
                  { title: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB"] },
                  { title: "Tools", items: ["Docker", "Git", "AWS"] }
                ].map((category, index) => (
                  <div key={category.title} className={`opacity-0 animate-[holo-text_0.8s_ease-out_${0.2 + index * 0.2}s_forwards]`}>
                    <h5 className="text-white font-medium mb-2 cyberpunk-glow">{category.title}</h5>
                    <ul className="text-gray-300 space-y-1">
                      {category.items.map((item, itemIndex) => (
                        <li key={item} className="hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform cyberpunk-glow animate-neural-pulse" style={{animationDelay: `${itemIndex * 0.5}s`}}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl neon-border backdrop-blur-sm hover:border-cyan-400/60 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 cyberpunk-glow rotate-3d opacity-0 animate-[holo-text_1s_ease-out_0.5s_forwards]">
              <h4 className="text-xl font-semibold text-cyan-400 mb-4 transform hover:translate-x-2 transition-transform duration-300 holographic-text">What I Do</h4>
              <ul className="text-gray-300 space-y-2">
                {[
                  "AI-powered application development",
                  "API design and implementation", 
                  "Machine Learning model integration",
                  "Database optimization and management",
                  "Cloud deployment and DevOps"
                ].map((item, index) => (
                  <li key={index} className="hover:text-cyan-400 transition-colors duration-300 hover:translate-x-2 transform cyberpunk-glow animate-quantum-particles" style={{animationDelay: `${index * 0.3}s`}}>
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
