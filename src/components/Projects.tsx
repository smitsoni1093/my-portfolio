import React from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'CRM System',
      description:
        'A full-stack Customer Relationship Management system for managing leads, sales pipelines, opportunities, contacts, companies, and business workflows. Developed using React, .NET, and SQL Server with a modular backend architecture.',
      technologies: [
        'React',
        'TypeScript',
        'C#',
        '.NET',
        'ASP.NET Core Web API',
        'Entity Framework Core',
        'SQL Server',
        'Microservices Architecture',
      ],
      status: 'Professional Project',
      type: 'Enterprise Application',
      features: [
        'Lead management and sales pipeline tracking',
        'Opportunity and sales stage management',
        'Contact and company management',
        'Lead sources, statuses, and configurable lookups',
        'Number series and business workflow management',
        'RESTful API integration and database operations',
        'Modular backend design for maintainability and scalability',
      ],
    },
    {
      title: 'Donation Management System',
      description:
        'A full-stack donation management platform connecting donors, families in need, field agents, and administrators. Supports donation workflows, donor management, verification, and payment-related operations using React and .NET.',
      technologies: [
        'React',
        'TypeScript',
        'C#',
        '.NET',
        'ASP.NET Core Web API',
        'Entity Framework Core',
        'SQL Server',
        'Razorpay',
        'Microservices Architecture',
      ],
      status: 'Professional Project',
      type: 'Full Stack Application',
      features: [
        'Donor registration, profiles, and dashboard',
        'Donation management for money, items, and services',
        'Family needs and donation request management',
        'Field agent verification workflows',
        'Payment integration and donation receipt generation',
        'Donation tracking and verification status management',
        'Role-based modules for donors, families, agents, and administrators',
        'Backend API development and relational database management',
      ],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Professional Project':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Projects
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Full-stack development projects involving React, .NET,
            SQL Server, RESTful APIs, and backend architecture.
          </p>

          <div className="w-20 h-1 bg-blue-600 mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl
                         transition-shadow overflow-hidden flex flex-col"
            >
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 bg-blue-100 rounded-lg shrink-0">
                      <Code className="w-5 h-5 text-blue-600" />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {project.type}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium
                                whitespace-nowrap ${getStatusColor(
                                  project.status
                                )}`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="text-gray-600 mb-5 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-5">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">
                    Key Features
                  </h4>

                  <ul className="text-sm text-gray-600 space-y-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-600
                                         rounded-full mt-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 mt-auto">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">
                    Technologies
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700
                                   rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-4
                                border-t border-gray-100 text-gray-500">
                  <Code className="w-4 h-4" />
                  <span className="text-sm">Project Overview</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Want to explore more of my work?
          </p>

          <a
            href="https://github.com/smitsoni1093"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3
                       bg-gray-900 text-white rounded-lg
                       hover:bg-gray-800 transition-colors"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
