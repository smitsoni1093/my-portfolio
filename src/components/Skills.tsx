import React from 'react';
import { Code, Database, Globe, GitBranch, Users, Brain, Lightbulb, Target } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["C", "Python"],
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-6 h-6" />,
      skills: ["HTML", "CSS", "JavaScript", "PHP", "ReactJS"],
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6" />,
      skills: ["MySQL", "SQL"],
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Version Control",
      icon: <GitBranch className="w-6 h-6" />,
      skills: ["Git", "GitHub"],
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const softSkills = [
    {
      title: "Self-Learning",
      icon: <Brain className="w-5 h-5" />,
      description: "Continuously learning new technologies and adapting to industry changes"
    },
    {
      title: "Adaptability",
      icon: <Lightbulb className="w-5 h-5" />,
      description: "Quick to adapt to new environments and technologies"
    },
    {
      title: "Team Collaboration",
      icon: <Users className="w-5 h-5" />,
      description: "Excellent communication and teamwork abilities"
    },
    {
      title: "Problem Solving",
      icon: <Target className="w-5 h-5" />,
      description: "Analytical approach to identifying and solving complex problems"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className={`inline-flex p-3 rounded-lg mb-4 ${category.color}`}>
                  {category.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  {category.title}
                </h4>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="inline-block bg-white px-3 py-1 rounded-full text-sm text-gray-700 mr-2 mb-2 shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Soft Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {softSkills.map((skill, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {skill.title}
                    </h4>
                    <p className="text-gray-600">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;