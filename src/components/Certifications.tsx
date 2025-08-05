import React from 'react';
import { Award, ExternalLink, Calendar, Building } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "Software Engineering Certification",
      issuer: "IBM",
      description: "Comprehensive certification covering software development lifecycle, methodologies, and best practices in software engineering.",
      skills: ["Software Development Lifecycle", "Agile Methodologies", "Software Testing", "Project Management"],
      icon: "🏆",
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      issuer: "Google",
      description: "In-depth certification covering computer networking fundamentals, protocols, and network infrastructure.",
      skills: ["Network Protocols", "TCP/IP", "Network Security", "Network Troubleshooting"],
      icon: "🌐",
      color: "bg-green-100 text-green-600"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Achievements</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-3 rounded-lg ${cert.color}`}>
                  <Award className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <Building className="w-4 h-4" />
                    <span className="font-medium">{cert.issuer}</span>
                  </div>
                </div>
                <div className="text-2xl">
                  {cert.icon}
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {cert.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Skills Covered:</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors">
                <ExternalLink className="w-4 h-4" />
                View Certificate
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 p-8 bg-gray-50 rounded-xl">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Continuous Learning Journey
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I believe in continuous learning and staying updated with the latest technologies. 
            These certifications represent my commitment to professional development and 
            expanding my technical expertise in the ever-evolving field of technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;