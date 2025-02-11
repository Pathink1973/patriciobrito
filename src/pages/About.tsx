import React from 'react';

const About = () => {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          About Me
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <img
              src="/images/workspace.jpg"
              alt="Workspace"
              className="rounded-xl w-full"
            />
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-300">
              As a Full-stack Developer and UIX Designer, I specialize in creating innovative solutions
              that combine modern technologies with AI integration. My passion lies in developing
              applications that make a real difference in people's lives.
            </p>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-medium mb-2 text-blue-400">Frontend</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>React & React Native</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>Next.js</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-blue-400">Backend</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>Node.js</li>
                    <li>Supabase</li>
                    <li>PostgreSQL</li>
                    <li>RESTful APIs</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">AI Integration</h2>
              <p className="text-gray-300">
                I specialize in integrating AI technologies like OpenAI's GPT models into applications,
                creating intelligent and responsive user experiences that enhance functionality and user
                engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;