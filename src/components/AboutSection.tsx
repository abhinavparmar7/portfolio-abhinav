
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto animate-[scale-x_1s_ease-out]"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-[slide-in-left_0.8s_ease-out]">
            <div className="bg-gradient-to-br from-card/50 to-muted/30 p-8 rounded-xl border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4 transform hover:translate-x-2 transition-transform duration-300">Python & GenAI Developer</h3>
              <p className="text-foreground/80 leading-relaxed mb-4 opacity-0 animate-[fade-in_0.8s_ease-out_0.2s_forwards]">
                With 5 months of internship experience and over 1 year of full-time development, 
                I specialize in building intelligent applications using Python and cutting-edge 
                Generative AI technologies.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4 opacity-0 animate-[fade-in_0.8s_ease-out_0.4s_forwards]">
                My passion lies in creating innovative solutions that bridge the gap between 
                traditional software development and artificial intelligence, helping businesses 
                leverage the power of AI to solve complex problems.
              </p>
              <p className="text-foreground/80 leading-relaxed opacity-0 animate-[fade-in_0.8s_ease-out_0.6s_forwards]">
                I'm constantly exploring new technologies and methodologies in the AI space, 
                from LangChain and Hugging Face to custom model implementations and API integrations.
              </p>
            </div>
          </div>

          <div className="space-y-6 animate-[slide-in-right_0.8s_ease-out]">
            <div className="bg-gradient-to-br from-card/50 to-muted/30 p-6 rounded-xl border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10">
              <h4 className="text-xl font-semibold text-cyan-400 mb-4 transform hover:translate-x-2 transition-transform duration-300">Tech Stack</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="opacity-0 animate-[fade-in_0.6s_ease-out_0.2s_forwards]">
                  <h5 className="text-foreground font-medium mb-2">Languages</h5>
                  <ul className="text-foreground/70 space-y-1">
                    <li className="hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform">Python</li>
                    <li className="hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform">SQL</li>
                    <li className="hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform">JavaScript</li>
                  </ul>
                </div>
                <div className="opacity-0 animate-[fade-in_0.6s_ease-out_0.4s_forwards]">
                  <h5 className="text-foreground font-medium mb-2">Frameworks</h5>
                  <ul className="text-foreground/70 space-y-1">
                    <li className="hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform">FastAPI</li>
                    <li className="hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform">LangChain</li>
                    <li className="hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform">Hugging Face</li>
                  </ul>
                </div>
                <div className="opacity-0 animate-[fade-in_0.6s_ease-out_0.6s_forwards]">
                  <h5 className="text-foreground font-medium mb-2">Databases</h5>
                  <ul className="text-foreground/70 space-y-1">
                    <li className="hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform">MySQL</li>
                    <li className="hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform">PostgreSQL</li>
                    <li className="hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform">MongoDB</li>
                  </ul>
                </div>
                <div className="opacity-0 animate-[fade-in_0.6s_ease-out_0.8s_forwards]">
                  <h5 className="text-foreground font-medium mb-2">Tools</h5>
                  <ul className="text-foreground/70 space-y-1">
                    <li className="hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform">Docker</li>
                    <li className="hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform">Git</li>
                    <li className="hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform">AWS</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-card/50 to-muted/30 p-6 rounded-xl border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10 opacity-0 animate-[fade-in_0.8s_ease-out_0.5s_forwards]">
              <h4 className="text-xl font-semibold text-cyan-400 mb-4 transform hover:translate-x-2 transition-transform duration-300">What I Do</h4>
              <ul className="text-foreground/70 space-y-2">
                <li className="hover:text-cyan-400 transition-colors duration-300 hover:translate-x-2 transform">• AI-powered application development</li>
                <li className="hover:text-cyan-400 transition-colors duration-300 hover:translate-x-2 transform">• API design and implementation</li>
                <li className="hover:text-cyan-400 transition-colors duration-300 hover:translate-x-2 transform">• Machine Learning model integration</li>
                <li className="hover:text-cyan-400 transition-colors duration-300 hover:translate-x-2 transform">• Database optimization and management</li>
                <li className="hover:text-cyan-400 transition-colors duration-300 hover:translate-x-2 transform">• Cloud deployment and DevOps</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
