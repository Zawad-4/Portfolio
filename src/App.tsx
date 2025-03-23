import React, { useState, useEffect } from 'react';
import { Github, Instagram, Mail, ExternalLink, Code, Terminal, Briefcase, User, ChevronDown } from 'lucide-react';
import { handleScroll } from './utils/scroll';
import { handleSubmit } from './utils/form';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolling, setIsScrolling] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const scrollHandler = () => handleScroll(setActiveSection, setIsScrolling);
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const projects = [
    {
      title: "Student Management System",
      description: "A CRUD application to manage student records, courses, and grades using React and localStorage",
      tech: ["React", "TypeScript", "LocalStorage"],
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Calculator",
      description: "A modern calculator app with scientific functions and theme customization",
      tech: ["JavaScript", "CSS Grid", "DOM Manipulation"],
      image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Todo List App",
      description: "Feature-rich task management app with categories, priorities, and due dates",
      tech: ["React", "LocalStorage", "TailwindCSS"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolling ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Terminal className="w-8 h-8 text-emerald-400" />
            <div className="flex space-x-8">
              {['About', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`hover:text-emerald-400 transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-emerald-400' : ''
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-500 text-transparent bg-clip-text">
              WELCOME TO MY PORTFOLIO!
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              HI! I'm Mohammed Zawad Adnan a computer science enthusiast who enjoys exploring web development, databases, and AI. I love learning new things and building projects that help me improve my skills.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#contact" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full transition-colors">
                Get in touch
              </a>
              <a href="#projects" className="border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white px-8 py-3 rounded-full transition-all">
                View work
              </a>
            </div>
          </div>
        </div>
        <ChevronDown className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce w-8 h-8 text-emerald-400" />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                Hello! I'm Mohammed Zawad Adnan, a computer science enthusiast with a keen interest in web development, databases, and Artificial Intelligence. I am passionate about exploring emerging technologies and continuously enhancing my skills by working on diverse projects.
              </p>
              <p className="text-lg text-gray-300">
                My portfolio showcases a range of projects that reflect my dedication to learning and problem-solving. I am always eager to expand my knowledge and take on new challenges in the ever-evolving tech landscape.
              </p>
              <div className="flex space-x-4">
                <Code className="w-12 h-12 text-emerald-400" />
                <Terminal className="w-12 h-12 text-emerald-400" />
                <Briefcase className="w-12 h-12 text-emerald-400" />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80"
                alt="Workspace"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-gray-700 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-center space-x-8 mb-12">
              <a href="https://github.com/Zawad-4
" className="hover:text-emerald-400 transition-colors">
                <Github className="w-8 h-8" />
              </a>
              <a href="https://www.instagram.com/zawad_.4/" className="hover:text-emerald-400 transition-colors">
                <Instagram className="w-8 h-8" />
              </a>
              <a href="mdzawadadeen44@gmail.com" className="hover:text-emerald-400 transition-colors">
                <Mail className="w-8 h-8" />
              </a>
            </div>
            <form className="space-y-6" onSubmit={(e) => handleSubmit(e, formData)}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;