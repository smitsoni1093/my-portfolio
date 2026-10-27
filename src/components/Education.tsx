import React from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'L.J. University',
      location: 'Ahmedabad, Gujarat',
      period: '2023 - 2026',
      status: 'Completed',
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Shri Chimanbhai Patel Institute of Computer Application',
      location: 'Ahmedabad, Gujarat',
      period: '2020 - 2023',
      status: 'Completed',
    },
    {
      degree: '12th - Higher Secondary Certificate (HSC)',
      institution: 'Shree Muktjivan School',
      location: 'Ahmedabad, Gujarat',
      period: '2019 - 2020',
      status: 'Completed',
    },
    {
      degree: '10th - Secondary School Certificate (SSC)',
      institution: 'Shree Muktjivan School',
      location: 'Ahmedabad, Gujarat',
      period: '2017 - 2018',
      status: 'Completed',
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Education
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            My academic background in computer applications and
            software development.
          </p>

          <div className="w-20 h-1 bg-blue-600 mx-auto" />
        </div>

        {/* Education Cards */}
        <div className="space-y-6">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="bg-white rounded-xl border border-gray-100
                         shadow-md p-6 md:p-8
                         hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row
                              md:items-center md:justify-between gap-5">
                <div className="flex items-start gap-4 flex-1">
                  <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                    <GraduationCap className="w-7 h-7" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {edu.degree}
                    </h3>

                    <p className="text-lg text-gray-700 mb-3">
                      {edu.institution}
                    </p>

                    <div className="flex flex-col sm:flex-row
                                    sm:flex-wrap gap-3 sm:gap-5
                                    text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>{edu.location}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:ml-4">
                  <span className="inline-flex items-center gap-2
                                   px-3 py-2 rounded-full text-sm
                                   font-medium bg-green-100 text-green-800">
                    <CheckCircle2 className="w-4 h-4" />
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