import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: "Master of Computer Application (MCA)",
      institution: "L.J University",
      location: "Ahmedabad, Gujarat",
      period: "2023 - Present",
      status: "In Progress"
    },
    {
      degree: "Bachelor in Computer Application (BCA)",
      institution: "Shri Chimanbhai Patel Institute of Computer Application",
      location: "Ahmedabad, Gujarat",
      period: "2020 - 2023",
      status: "Completed"
    },
    {
      degree: "12th HSC",
      institution: "Shree Muktjivan School",
      location: "Ahmedabad, Gujarat",
      period: "2019 - 2020",
      status: "Completed"
    },
    {
      degree: "10th SSC",
      institution: "Shree Muktjivan School",
      location: "Ahmedabad, Gujarat",
      period: "2017 - 2018",
      status: "Completed"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-gray-700 mb-2">
                        {edu.institution}
                      </p>
                      <div className="flex flex-wrap gap-4 text-gray-600">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    edu.status === 'In Progress' 
                      ? 'bg-yellow-100 text-yellow-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {edu.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;