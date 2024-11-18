import React from 'react';
import { Plus, MoreVertical } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: 'Website Redesign',
      description: 'Redesigning the company website with modern UI/UX',
      progress: 75,
      members: 5,
      status: 'In Progress',
    },
    {
      id: 2,
      name: 'Mobile App Development',
      description: 'Building a new mobile app for iOS and Android',
      progress: 30,
      members: 8,
      status: 'Planning',
    },
    {
      id: 3,
      name: 'Marketing Campaign',
      description: 'Q4 marketing campaign planning and execution',
      progress: 90,
      members: 4,
      status: 'Review',
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
        <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
          <Plus className="h-5 w-5 mr-2" />
          New Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreVertical className="h-5 w-5" />
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-600">{project.description}</p>
              
              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-indigo-600 rounded-full h-2"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <div className="flex -space-x-2">
                  {[...Array(project.members)].map((_, i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium"
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <span className={`
                  px-2 py-1 text-xs rounded-full
                  ${project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : ''}
                  ${project.status === 'Planning' ? 'bg-yellow-100 text-yellow-800' : ''}
                  ${project.status === 'Review' ? 'bg-green-100 text-green-800' : ''}
                `}>
                  {project.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}