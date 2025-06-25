import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const projects = {
  'aimilia': {
    title: 'AImilia® Tutor AI',
    subtitle: 'The Virtual Tutor in the Fight Against Alzheimer\'s',
    description: `AImilia® is a virtual tutor specialized in Alzheimer's, developed to provide accurate information, comprehensive support, and interactive resources about the disease. Using advanced AI technology powered by OpenAI's GPT-4.`,
    features: [
      'Voice Interface with Visual Feedback',
      'Advanced AI Responses',
      'Intelligent Context Management',
      'Comprehensive Alzheimer\'s Knowledge',
      'Responsive Design',
    ],
    image: '/images/aimilia.jpg',
    technologies: ['React', 'TypeScript', 'OpenAI', 'Web Speech API'],
    liveUrl: 'https://aimilia.netlify.app/'
  },
  'noa': {
    title: 'NOA Creative Assistant AI',
    subtitle: 'The Virtual Tutor for Creatives',
    description: `Noa is more than a name – it is an invitation to innovation. Inspired by the concept of fluidity and imagination, Noa was created to be your creative partner, helping you transform inspirations into reality.`,
    features: [
      'Voice Interface with Visual Feedback',
      'Advanced AI Responses',
      'Intelligent Context Management',
      'Comprehensive Creativity Knowledge',
      'Responsive Design',
    ],
    image: '/images/noa.jpg',
    technologies: ['React', 'TypeScript', 'OpenAI', 'Web Speech API'],
    liveUrl: 'https://noa-criativa.netlify.app/'
  },
  'notify': {
    title: 'Notify',
    subtitle: 'Your Modern Digital Post-It',
    description: `Notify is more than just a note-taking app — it's your essential tool for capturing ideas, creating reminders, and organizing your daily life. With an intuitive design and powerful features, Notify offers everything you need to maintain an organized and productive workflow.`,
    features: [
      'Simple and Efficient Markdown',
      'Real-time Sync with Supabase',
      'Clean and Minimalist Interface',
      'Reminders and Notifications',
      'Quick Search and Filters',
    ],
    image: '/images/notify.jpg',
    technologies: ['React', 'TypeScript', 'Supabase', 'Markdown'],
    liveUrl: 'https://notify-keep.netlify.app/'
  },
  'expomatic': {
    title: 'Expomatic',
    subtitle: 'Master the Three Pillars of Exposure',
    description: `Expomatic is an interactive webapp created specifically to help photography beginners understand and balance the three fundamental pillars of exposure: ISO, Shutter Speed, and Aperture (f/stop).`,
    features: [
      'Interactive Adjustment Interface',
      'Dynamic Visual Simulation',
      'Educational Explanations',
      'Mobile Device Support',
      'Real-time Visual Feedback',
    ],
    image: '/images/expomatic.jpg',
    technologies: ['React', 'TypeScript', 'Three.js', 'WebGL'],
    liveUrl: 'https://expomatic.netlify.app/'
  },
  'designo': {
    title: 'Designo',
    subtitle: 'Modern Design Agency',
    description: `Designo is a sleek and modern design agency website that showcases creative work with smooth animations and interactive elements. Built with performance and user experience in mind.`,
    features: [
      'Responsive Design',
      'Smooth Animations',
      'Project Showcase',
      'Contact Form',
      'SEO Optimized',
    ],
    image: '/images/designo.jpg',
    technologies: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    liveUrl: 'https://designo-agency-demo.netlify.app/'
  },
  'taskflow': {
    title: 'TaskFlow',
    subtitle: 'Project Management Made Simple',
    description: `TaskFlow is a powerful project management tool that helps teams organize their work with an intuitive drag-and-drop interface, task assignments, and real-time collaboration features.`,
    features: [
      'Drag-and-Drop Interface',
      'Team Collaboration',
      'Task Assignment',
      'Progress Tracking',
      'Real-time Updates',
    ],
    image: '/images/taskflow.jpg',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    liveUrl: 'https://taskflow-app-demo.netlify.app/'
  },
  'foodieland': {
    title: 'FoodieLand',
    subtitle: 'Discover Amazing Recipes',
    description: `FoodieLand is a comprehensive recipe discovery platform that helps users find, save, and share delicious recipes from around the world with advanced search and filtering capabilities.`,
    features: [
      'Advanced Search',
      'Recipe Filtering',
      'User Accounts',
      'Save Favorites',
      'Nutritional Information',
    ],
    image: '/images/foodieland.jpg',
    technologies: ['Next.js', 'TypeScript', 'Spoonacular API', 'Tailwind CSS'],
    liveUrl: 'https://foodieland-recipes.netlify.app/'
  },
  'soundwave': {
    title: 'SoundWave',
    subtitle: 'Music for Everyone',
    description: `SoundWave is a music streaming application that offers personalized playlists, recommendations, and a vast library of songs across all genres, all with a beautiful and intuitive interface.`,
    features: [
      'Personalized Playlists',
      'Music Recommendations',
      'Offline Listening',
      'Cross-Device Sync',
      'High-Quality Audio',
    ],
    image: '/images/soundwave.jpg',
    technologies: ['React', 'TypeScript', 'Spotify API', 'Redux'],
    liveUrl: 'https://soundwave-music-demo.netlify.app/'
  },
  'furniro': {
    title: 'Furniro',
    subtitle: 'Modern Furniture for Modern Living',
    description: `Furniro is an e-commerce platform specializing in modern furniture, featuring 3D product previews, augmented reality room visualization, and a seamless shopping experience.`,
    features: [
      '3D Product Previews',
      'AR Room Visualization',
      'Secure Checkout',
      'Product Customization',
      'Customer Reviews',
    ],
    image: '/images/furniro.jpg',
    technologies: ['Next.js', 'TypeScript', 'Three.js', 'Stripe'],
    liveUrl: 'https://furniro-furniture.netlify.app/'
  },
  'cryptotracker': {
    title: 'CryptoTracker',
    subtitle: 'Track Your Crypto Portfolio',
    description: `CryptoTracker provides real-time cryptocurrency price tracking, portfolio management, and market analysis tools to help users make informed investment decisions.`,
    features: [
      'Real-time Price Updates',
      'Portfolio Tracking',
      'Price Alerts',
      'Market Analysis',
      'Historical Data',
    ],
    image: '/images/cryptotracker.jpg',
    technologies: ['React', 'TypeScript', 'CoinGecko API', 'Chart.js'],
    liveUrl: 'https://cryptotracker-demo.netlify.app/'
  },
  'cinemate': {
    title: 'Cinemate',
    subtitle: 'Your Movie Companion',
    description: `Cinemate is a comprehensive movie database that provides showtimes, ratings, reviews, and personalized recommendations based on your viewing history and preferences.`,
    features: [
      'Movie Showtimes',
      'User Reviews',
      'Personalized Recommendations',
      'Watchlist',
      'Trailers & Clips',
    ],
    image: '/images/cinemate.jpg',
    technologies: ['React', 'TypeScript', 'TMDB API', 'Firebase'],
    liveUrl: 'https://cinemate-movies.netlify.app/'
  },
  'jobify': {
    title: 'Jobify',
    subtitle: 'Find Your Dream Job',
    description: `Jobify is a modern job board platform that connects job seekers with employers, featuring advanced search, application tracking, and personalized job recommendations.`,
    features: [
      'Advanced Job Search',
      'Application Tracking',
      'Resume Builder',
      'Company Profiles',
      'Job Alerts',
    ],
    image: '/images/jobify.jpg',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    liveUrl: 'https://jobify-careers.netlify.app/'
  },
  'autimus': {
    title: 'Autismus',
    subtitle: 'Communication Support for Autism',
    description: `A communication support app designed specifically for individuals with autism, featuring visual cards and a customizable image system to aid in communication and daily routines.`,
    features: [
      'Visual Card System',
      'Customizable Image Library',
      'Voice Output',
      'Daily Routine Support',
      'Caregiver Controls'
    ],
    image: '/images/autismus.jpg',
    technologies: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    liveUrl: 'https://autismus.site/'
  },
  'clinVoice-ai': {
    title: 'ClinVoice AI',
    subtitle: 'AI-Powered Medical Documentation',
    description: `An AI-powered application that records, transcribes, and summarizes medical consultations in real-time, helping healthcare providers maintain accurate and detailed patient records.`,
    features: [
      'Real-time Transcription',
      'AI-Powered Summarization',
      'Secure Patient Records',
      'Customizable Templates',
      'Cross-Platform Access'
    ],
    image: '/images/clinvoice.jpg',
    technologies: ['React', 'TypeScript', 'Node.js', 'Supabase'],
    liveUrl: 'https://clinvoice.netlify.app/'
  },
  'medicalreminder': {
    title: 'Medical Reminder',
    subtitle: 'Never Miss a Dose Again',
    description: `A simple and intuitive application designed to help users track their medication schedules with timely alerts and dosage information.`,
    features: [
      'Medication Scheduling',
      'Customizable Reminders',
      'Dosage Tracking',
      'Medication History',
      'Multi-Device Sync'
    ],
    image: '/images/medicalreminder.jpg',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    liveUrl: 'https://medic-reminder.netlify.app/'
  },
  'pulso': {
    title: 'Pulso',
    subtitle: 'Your Emotional Well-being Companion',
    description: `An emotional journal app that helps users track their mood patterns, journal their thoughts, and gain insights into their mental health over time.`,
    features: [
      'Mood Tracking',
      'Journal Entries',
      'Emotional Insights',
      'Secure Cloud Sync',
      'Customizable Reminders'
    ],
    image: '/images/pulso.jpg',
    technologies: ['React', 'TypeScript', 'Supabase', 'Stripe'],
    liveUrl: 'https://pulsoplus.netlify.app/'
  },
  'speakuest': {
    title: 'Speakuest',
    subtitle: 'Learn English Through Real-Life Scenarios',
    description: `A gamified language-learning platform that helps tourists and travelers practice English through interactive, real-life scenarios and conversations.`,
    features: [
      'Interactive Scenarios',
      'Speech Recognition',
      'Progress Tracking',
      'Cultural Tips',
      'Offline Mode'
    ],
    image: '/images/speakuest.jpg',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Stripe'],
    liveUrl: 'https://speakuest.netlify.app/'
  },
  'NormaDeck': {
    title: 'NormaDeck',
    subtitle: 'Brand Guidelines Management',
    description: `A digital library solution for organizing, previewing, and sharing official brand guidelines and design assets in PDF format.`,
    features: [
      'PDF Preview',
      'Version Control',
      'Team Collaboration',
      'Asset Management',
      'Access Control'
    ],
    image: '/images/normadeck.jpg',
    technologies: ['React', 'TypeScript', 'CoinGecko API'],
    liveUrl: 'https://normadeck.netlify.app/'
  },
  'nutriflow-ai': {
    title: 'NutriFlow AI',
    subtitle: 'Smart Nutrition Tracking',
    description: `A comprehensive nutrition tracking application that helps users plan meals, track macros, and achieve their dietary goals with AI-powered recommendations.`,
    features: [
      'Meal Planning',
      'Macro Tracking',
      'AI Recommendations',
      'Recipe Database',
      'Progress Analytics'
    ],
    image: '/images/nutriflow.jpg',
    technologies: ['React', 'TypeScript', 'TMDB API', 'Supabase'],
    liveUrl: 'https://nutriflow-ai.netlify.app/'
  },
  'memoriativa': {
    title: 'Memória Ativa',
    subtitle: 'Therapeutic Memory Game',
    description: `A therapeutic memory game designed to provide cognitive stimulation and entertainment, featuring customizable image cards and offline support for caregivers.`,
    features: [
      'Customizable Cards',
      'Multiple Difficulty Levels',
      'Progress Tracking',
      'Therapeutic Exercises',
      'Caregiver Dashboard'
    ],
    image: '/images/memoriativa.jpg',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    liveUrl: 'https://memoriativa.netlify.app/'
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-blue-400 hover:text-blue-300">
            Return to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Link
          to="/projects"
          className="inline-flex items-center text-gray-400 hover:text-white mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Projects
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            {project.title}
          </h1>
          <p className="text-xl text-gray-300">{project.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="aspect-video rounded-xl overflow-hidden mb-8">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              View Live Demo
              <ExternalLink size={20} className="ml-2" />
            </a>
          </div>

          <div>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 mb-8">{project.description}</p>
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="space-y-4">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;