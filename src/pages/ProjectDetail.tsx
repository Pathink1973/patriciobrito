import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const projects = {
  'abc-autismo': {
    title: 'Autism.us',
    subtitle: 'Facilitating Communication Through Images',
    description: `Autism.us is an innovative application designed to help children on the autism spectrum communicate effectively and functionally. Through an intuitive image-based system, caregivers, therapists, or parents can create an environment adapted to each child's specific needs.`,
    features: [
      'Image Selection and Organization',
      'Phrase Creation',
      'Audio Feedback',
      'Complete Customization',
      'PECs Compatibility',
    ],
    image: '/images/autism-us.jpg',
    technologies: ['React', 'TypeScript', 'Supabase', 'Web Speech API'],
    liveUrl: 'https://abc-autismo.netlify.app/',
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
    liveUrl: 'https://notify-keep.netlify.app/',
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
    technologies: ['React', 'TypeScript', 'Canvas API', 'Web Workers'],
    liveUrl: 'https://expomatic.netlify.app/',
  },
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
    liveUrl: 'https://aimilia.netlify.app/',
  },
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