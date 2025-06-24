
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl border border-cyan-500/20 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Python & GenAI Developer</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                With 5 months of internship experience and over 1 year of full-time development, 
                I specialize in building intelligent applications using Python and cutting-edge 
                Generative AI technologies.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                My passion lies in creating innovative solutions that bridge the gap between 
                traditional software development and artificial intelligence, helping businesses 
                leverage the power of AI to solve complex problems.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I'm constantly exploring new technologies and methodologies in the AI space, 
                from LangChain and Hugging Face to custom model implementations and API integrations.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-cyan-500/20 backdrop-blur-sm">
              <h4 className="text-xl font-semibold text-cyan-400 mb-4">Tech Stack</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h5 className="text-white font-medium mb-2">Languages</h5>
                  <ul className="text-gray-300 space-y-1">
                    <li>Python</li>
                    <li>SQL</li>
                    <li>JavaScript</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-white font-medium mb-2">Frameworks</h5>
                  <ul className="text-gray-300 space-y-1">
                    <li>FastAPI</li>
                    <li>LangChain</li>
                    <li>Hugging Face</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-white font-medium mb-2">Databases</h5>
                  <ul className="text-gray-300 space-y-1">
                    <li>MySQL</li>
                    <li>PostgreSQL</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-white font-medium mb-2">Tools</h5>
                  <ul className="text-gray-300 space-y-1">
                    <li>Docker</li>
                    <li>Git</li>
                    <li>AWS</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-cyan-500/20 backdrop-blur-sm">
              <h4 className="text-xl font-semibold text-cyan-400 mb-4">What I Do</h4>
              <ul className="text-gray-300 space-y-2">
                <li>• AI-powered application development</li>
                <li>• API design and implementation</li>
                <li>• Machine Learning model integration</li>
                <li>• Database optimization and management</li>
                <li>• Cloud deployment and DevOps</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
