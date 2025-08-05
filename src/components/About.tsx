import React from 'react';
import { Code, Database, Globe, Users, Brain, GitBranch } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full Stack Development",
      description: "Proficient in both frontend and backend technologies"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Management",
      description: "Strong foundation in SQL and MySQL database design"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Analytical mindset with focus on efficient solutions"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Excellent communication and teamwork skills"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Career Summary</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              I am an MCA student with a solid foundation in software development and database management, 
              gained through academic projects and coursework. I am seeking an entry-level IT position where 
              I can apply my technical skills, contribute to meaningful projects, and grow professionally.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              I am eager to learn and adapt to new challenges while making a positive impact in a dynamic 
              work environment. My passion for technology drives me to continuously expand my knowledge 
              and stay updated with the latest industry trends.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <div className="text-blue-600 mb-4">
                  {highlight.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 text-sm">
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