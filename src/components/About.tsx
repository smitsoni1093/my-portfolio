import React from 'react';
import {
  Code,
  Database,
  Users,
  Brain,
  Layers,
} from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Full Stack Development',
      description:
        'Building responsive and user-friendly web applications using React and TypeScript.',
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Backend & Database',
      description:
        'Developing RESTful APIs using .NET and ASP.NET Core, with SQL Server for data management.',
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: 'Microservices Architecture',
      description:
        'Working with backend architecture and service-based application development.',
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Problem Solving',
      description:
        'Analyzing technical challenges and implementing maintainable software solutions.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Career Summary */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Career Summary
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              I am a Full Stack Developer at Neminath Technologies,
              working since December 2025. I specialize in building
              full-stack web applications using React, TypeScript,
              C#, .NET, ASP.NET Core Web API, and Microsoft SQL Server.
              I have hands-on experience developing frontend interfaces,
              backend APIs, database operations, and business application
              features.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              My project experience includes CRM and Donation Management
              systems, involving business workflows, data management,
              API integration, and role-based functionality. I am also
              gaining experience with microservices architecture and
              scalable backend development. I am passionate about writing
              clean, maintainable code, solving technical problems, and
              continuously improving my software development skills.
            </p>
          </div>

          {/* Professional Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="p-6 bg-gray-50 rounded-xl
                           hover:bg-gray-100 transition-colors"
              >
                <div className="text-blue-600 mb-4">
                  {highlight.icon}
                </div>

                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h4>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
