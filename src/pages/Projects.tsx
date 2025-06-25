import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 'aimilia',
    title: 'AImilia® Tutor AI',
    description: 'AI-powered virtual tutor specialized in Alzheimer\'s disease support and education.',
    image: '/images/aimilia.jpg',
    technologies: ['React', 'TypeScript', 'OpenAI', 'Web Speech API'],
    liveUrl: 'https://aimilia.netlify.app/',
  },
  {
    id: 'noa',
    title: 'NOA Creative Assistant AI',
    description: 'AI-powered virtual tutor specialized in Design, Video and Photography.',
    image: '/images/noa.jpg',
    technologies: ['React', 'TypeScript', 'OpenAI', 'Web Speech API'],
    liveUrl: 'https://noa-criativa.netlify.app/',
  },
  {
    id: 'notify',
    title: 'Notify',
    description: 'Modern note-taking app with real-time sync and markdown support.',
    image: '/images/notify.jpg',
    technologies: ['React', 'TypeScript', 'Supabase', 'Markdown'],
    liveUrl: 'https://notify-keep.netlify.app/',
  },
  {
    id: 'expomatic',
    title: 'Expomatic',
    description: 'Interactive web app for learning photography exposure fundamentals through visual simulation.',
    image: '/images/expomatic.jpg',
    technologies: ['React', 'TypeScript', 'Three.js', 'WebGL'],
    liveUrl: 'https://expomatic.netlify.app/',
  },
  {
    id: 'autimus',
    title: 'Autismus',
    description: 'A communication support app for autism using visual cards and a customizable image system.',
    image: '/images/autismus.jpg',
    technologies: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    liveUrl: 'https://autismus.site/',
  },
  {
    id: 'clinVoice-ai',
    title: 'ClinVoice AI',
    description: 'An AI-powered app that records, transcribes, and summarizes medical consultations in real time.Project management tool with drag-and-drop interface and team collaboration features.',
    image: '/images/clinvoice.jpg',
    technologies: ['React', 'TypeScript', 'Node.js', 'Supabase'],
    liveUrl: 'https://clinvoice.netlify.app/',
  },
  {
    id: 'medicalreminder',
    title: 'Medical Reminder',
    description: 'A simple and intuitive app to schedule and track medication routines with timely alerts.',
    image: '/images/medicalreminder.jpg',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    liveUrl: 'https://medic-reminder.netlify.app/',
  },
  {
    id: 'pulso',
    title: 'Pulso',
    description: 'An emotional journal app that tracks mood patterns and generates personal mental health reports.',
    image: '/images/pulso.jpg',
    technologies: ['React', 'TypeScript', 'Supabase', 'Stripe'],
    liveUrl: 'https://pulsoplus.netlify.app/',
  },
  {
    id: 'speakuest',
    title: 'Speakuest',
    description: 'A gamified language-learning app for tourists to practice English through real-life scenarios.',
    image: '/images/speakuest.jpg',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Stripe'],
    liveUrl: 'https://speakuest.netlify.app/',
  },
  {
    id: 'NormaDeck',
    title: 'NormaDeck',
    description: 'A digital library to organize, preview, and share official brand guidelines in PDF format.Real-time cryptocurrency price tracker with portfolio management.',
    image: '/images/normadeck.jpg',
    technologies: ['React', 'TypeScript', 'CoinGecko API', ],
    liveUrl: 'https://normadeck.netlify.app/',
  },
  {
    id: 'nutriflow-ai',
    title: 'NutriFlow AI',
    description: 'A nutrition tracking app with meal planning, dietary tips, and progress visualizations.',
    image: '/images/nutriflow.jpg',
    technologies: ['React', 'TypeScript', 'TMDB API', 'Supabase'],
    liveUrl: 'https://nutriflow-ai.netlify.app/',
  },
  {
    id: 'memoriativa',
    title: 'Memória Ativa',
    description: 'A therapeutic memory game app with customizable image cards and offline support for caregivers.',
    image: '/images/memoriativa.jpg',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    liveUrl: 'https://memoriativa.netlify.app/',
  }
];

const Projects = () => {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Featured Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white dark:bg-gray-900/50 rounded-xl overflow-hidden hover:bg-gray-50 dark:hover:bg-gray-900/80 transition-colors border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl dark:shadow-none"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
              </div>
              <div className="relative z-10 p-6">
                <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link
                    to={`/project/${project.id}`}
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                  >
                    Learn More
                  </Link>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-blue-200 dark:border-gray-600 text-sm font-medium rounded-md text-blue-600 dark:text-white bg-white dark:bg-transparent hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    Live Demo
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;