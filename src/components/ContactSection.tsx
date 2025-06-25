
import React, { useState } from 'react';
import { Github, Linkedin } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-20 w-40 h-40 border border-cyan-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-32 h-32 border border-blue-400/20 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6 animate-[scale-x_1s_ease-out]"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto opacity-0 animate-[fade-in_0.8s_ease-out_0.3s_forwards]">
            Interested in collaborating or have a project in mind? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-[slide-in-left_0.8s_ease-out]">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-6 transform hover:translate-x-2 transition-transform duration-300">Get In Touch</h3>
              <p className="text-gray-300 mb-6 leading-relaxed hover:text-gray-200 transition-colors duration-300">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a conversation about AI and technology. Feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold">AP</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-300">Abhinav Parmar</h4>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Python & GenAI Developer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4 transform hover:translate-x-2 transition-transform duration-300">Connect With Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-blue-600/20 text-blue-400 rounded-lg hover:bg-blue-600/30 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 border border-blue-500/30 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-gray-600/20 text-gray-400 rounded-lg hover:bg-gray-600/30 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 border border-gray-500/30 hover:border-gray-400/50 hover:shadow-lg hover:shadow-gray-500/25"
                >
                  <Github size={20} />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-500 animate-[slide-in-right_0.8s_ease-out]">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-6 transform hover:translate-x-2 transition-transform duration-300">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="opacity-0 animate-[fade-in_0.6s_ease-out_0.2s_forwards]">
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 text-white rounded-lg border border-gray-600/50 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 outline-none hover:border-gray-500/70 transform focus:scale-105"
                  placeholder="Your name"
                />
              </div>
              
              <div className="opacity-0 animate-[fade-in_0.6s_ease-out_0.4s_forwards]">
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 text-white rounded-lg border border-gray-600/50 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 outline-none hover:border-gray-500/70 transform focus:scale-105"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="opacity-0 animate-[fade-in_0.6s_ease-out_0.6s_forwards]">
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700/50 text-white rounded-lg border border-gray-600/50 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 outline-none resize-none hover:border-gray-500/70 transform focus:scale-105"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/25 font-medium opacity-0 animate-[fade-in_0.6s_ease-out_0.8s_forwards]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
