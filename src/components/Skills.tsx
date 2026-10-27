import React from 'react';
import {
  Code,
  Database,
  Globe,
  GitBranch,
  Users,
  Brain,
  Lightbulb,
  Target,
  Briefcase,
  Calendar,
} from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      skills: ['C', 'C#', 'Python', 'JavaScript', 'TypeScript'],
      color: 'bg-blue-100 text-blue-600',
    },
    {
      title: 'Frontend Technologies',
      icon: <Globe className="w-6 h-6" />,
      skills: ['HTML', 'CSS', 'React.js', 'Tailwind CSS'],
      color: 'bg-green-100 text-green-600',
    },
    {
      title: 'Backend Technologies',
      icon: <Code className="w-6 h-6" />,
      skills: ['.NET', 'ASP.NET Core', 'Web API', 'Entity Framework Core'],
      color: 'bg-indigo-100 text-indigo-600',
    },
    {
      title: 'Database',
      icon: <Database className="w-6 h-6" />,
      skills: ['SQL Server', 'MySQL', 'SQL'],
      color: 'bg-purple-100 text-purple-600',
    },
    {
      title: 'Version Control',
      icon: <GitBranch className="w-6 h-6" />,
      skills: ['Git', 'GitHub'],
      color: 'bg-orange-100 text-orange-600',
    },
  ];

  const softSkills = [
    {
      title: 'Self-Learning',
      icon: <Brain className="w-5 h-5" />,
      description:
        'Continuously learning new technologies and improving technical skills.',
    },
    {
      title: 'Adaptability',
      icon: <Lightbulb className="w-5 h-5" />,
      description:
        'Adapting to new technologies, project requirements, and development environments.',
    },
    {
      title: 'Team Collaboration',
      icon: <Users className="w-5 h-5" />,
      description:
        'Collaborating with team members to develop and maintain applications.',
    },
    {
      title: 'Problem Solving',
      icon: <Target className="w-5 h-5" />,
      description:
        'Analyzing technical issues and implementing practical solutions.',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto" />
        </div>

        {/* Work Experience */}
        <div id="experience" className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Work Experience
          </h3>

          <div className="max-w-3xl mx-auto bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-xl w-fit">
                <Briefcase className="w-7 h-7" />
              </div>

              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-900">
                  Full Stack Developer
                </h4>

                <p className="text-blue-600 font-semibold mt-1">
                  Neminath Technologies
                </p>

                <div className="flex items-center gap-2 text-sm text-gray-500 mt-3">
                  <Calendar className="w-4 h-4" />
                  <span>December 2025 – Present</span>
                </div>

                <p className="text-gray-600 mt-4 leading-relaxed">
                  Working on full-stack application development, building
                  responsive user interfaces, developing backend APIs, and
                  managing relational databases.
                </p>

                <h5 className="font-semibold text-gray-900 mt-5 mb-3">
                  Key Technologies
                </h5>

                <div className="flex flex-wrap gap-2">
                  {[
                    'React.js',
                    'C#',
                    '.NET',
                    'ASP.NET Core Web API',
                    'Entity Framework Core',
                    'SQL Server',
                    'Git',
                  ].map((technology) => (
                    <span
                      key={technology}
                      className="bg-white border border-gray-200 px-3 py-1.5 rounded-full text-sm text-gray-700"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <h5 className="font-semibold text-gray-900 mt-5 mb-3">
                  Responsibilities
                </h5>

                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>
                    Develop and maintain frontend interfaces using React.js.
                  </li>
                  <li>
                    Build backend services and RESTful APIs using .NET and
                    ASP.NET Core.
                  </li>
                  <li>
                    Design database queries and manage application data using
                    Microsoft SQL Server.
                  </li>
                  <li>
                    Integrate frontend components with backend APIs and
                    troubleshoot application issues.
                  </li>
                  <li>
                    Use Git and GitHub for source control and collaborative
                    development.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Technical Skills
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div
                  className={`inline-flex p-3 rounded-lg mb-4 ${category.color}`}
                >
                  {category.icon}
                </div>

                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  {category.title}
                </h4>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block bg-white px-3 py-1 rounded-full text-sm text-gray-700 shadow-sm"
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
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Soft Skills
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {softSkills.map((skill) => (
              <div
                key={skill.title}
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
                    <p className="text-gray-600">{skill.description}</p>
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
