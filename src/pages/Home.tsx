import React from 'react';
import { ArrowRight, Brain, MessageSquare, Camera, Notebook, StickyNote } from 'lucide-react';
import { Link } from 'react-router-dom';

const technologies = [
  {
    name: 'React',
    icon: <div className="text-blue-400 text-4xl">⚛️</div>,
  },
  {
    name: 'TypeScript',
    icon: <div className="text-blue-400 text-4xl">TS</div>,
  },
  {
    name: 'OpenAI',
    icon: <div className="text-green-400 text-4xl">AI</div>,
  },
  {
    name: 'Supabase',
    icon: <div className="text-emerald-400 text-4xl">SB</div>,
  },
];

const featuredApps = [
  {
    id: 'aimilia',
    title: 'AImilia® Tutor AI',
    description: 'AI-powered virtual tutor specialized in Alzheimer\'s disease support and education.',
    image: '/images/aimilia.jpg',
    technologies: ['React', 'TypeScript', 'OpenAI', 'Web Speech API'],
    icon: <Brain className="w-6 h-6 text-purple-400" />,
  },
  {
    id: 'noa',
    title: 'NOA Creative Assistant AI',
    description: 'AI-powered virtual tutor specialized in Design, Video and Photography.',
    image: '/images/noa.jpg',
    technologies: ['React', 'TypeScript', 'OpenAI', 'Web Speech API'],
    icon: <MessageSquare className="w-6 h-6 text-blue-400" />,
  },
  {
    id: 'notify',
    title: 'Notify',
    description: 'Modern note-taking app with real-time sync and markdown support.',
    image: '/images/notify.jpg',
    technologies: ['React', 'TypeScript', 'Supabase', 'Markdown'],
    icon: <StickyNote className="w-6 h-6 text-yellow-400" />,
  },
  {
    id: 'expomatic',
    title: 'Expomatic',
    description: 'Interactive web app for learning photography exposure fundamentals.',
    image: '/images/expomatic.jpg',
    technologies: ['React', 'TypeScript', 'Three.js', 'WebGL'],
    icon: <Camera className="w-6 h-6 text-green-400" />,
  }
];

const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/hero.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/30 dark:bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-purple-600/10 dark:from-blue-600/20 dark:to-purple-600/20 mix-blend-multiply" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-600">
              Vide Coding Developer & UIX Designer
            </h1>
            <p className="text-xl sm:text-2xl text-white dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Crafting innovative solutions with modern technologies and AI integration
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              View Projects
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white dark:bg-black/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-600">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              As a passionate Vide Coding Full-stack Developer and UIX Designer, I specialize in creating innovative solutions that seamlessly integrate modern technologies with artificial intelligence. My expertise lies in developing applications that not only solve real-world problems but also provide exceptional user experiences. With a strong foundation in React, TypeScript, and AI technologies, I'm dedicated to pushing the boundaries of what's possible in web development.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Apps Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-black/90 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-600">
            Featured Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredApps.map((app) => (
              <Link
                key={app.id}
                to={`/project/${app.id}`}
                className="group bg-white/80 dark:bg-black/40 rounded-xl overflow-hidden hover:bg-gray-50 dark:hover:bg-black/60 transition-colors shadow-lg"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {app.icon}
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{app.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{app.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {app.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-white dark:bg-black/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-600">
            Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-900/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900/80 transition-colors shadow-md"
              >
                {tech.icon}
                <span className="mt-4 text-lg font-medium text-gray-900 dark:text-white">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-black/90 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p className="mb-2">Patrício Brito @ 2025. All Rights Reserved.</p>
            <p className="text-sm">I love make apps with AI.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
