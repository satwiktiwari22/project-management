import React, { useState } from 'react';
import { Plus, Calendar, Clock, CheckCircle2 } from 'lucide-react';

export default function Tasks() {
  const [filter, setFilter] = useState('all');

  const tasks = [
    {
      id: 1,
      title: 'Design System Updates',
      description: 'Update color palette and typography',
      dueDate: '2024-03-20',
      priority: 'high',
      status: 'in-progress',
    },
    {
      id: 2,
      title: 'User Research',
      description: 'Conduct user interviews',
      dueDate: '2024-03-25',
      priority: 'medium',
      status: 'todo',
    },
    {
      id: 3,
      title: 'API Documentation',
      description: 'Write documentation for new endpoints',
      dueDate: '2024-03-18',
      priority: 'low',
      status: 'completed',
    },
  ];

  const filterTabs = [
    { id: 'all', label: 'All Tasks' },
    { id: 'todo', label: 'To Do' },
    { id: 'in-progress', label: 'In Progress' },
    { id: 'completed', label: 'Completed' },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Tasks</h1>
        <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
          <Plus className="h-5 w-5 mr-2" />
          Add Task
        </button>
      </div>

      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`
                  py-4 px-1 border-b-2 font-medium text-sm
                  ${filter === tab.id
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="space-y-4">
        {tasks
          .filter((task) => filter === 'all' || task.status === filter)
          .map((task) => (
            <div key={task.id} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center">
                    <CheckCircle2 
                      className={`h-5 w-5 mr-3 ${
                        task.status === 'completed' 
                          ? 'text-green-500' 
                          : 'text-gray-400'
                      }`}
                    />
                    <h3 className="text-lg font-semibold text-gray-900">{task.title}</h3>
                  </div>
                  <p className="mt-1 text-sm text-gray-600">{task.description}</p>
                </div>
                <span className={`
                  px-2 py-1 text-xs rounded-full
                  ${task.priority === 'high' ? 'bg-red-100 text-red-800' : ''}
                  ${task.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' : ''}
                  ${task.priority === 'low' ? 'bg-green-100 text-green-800' : ''}
                `}>
                  {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                </span>
              </div>

              <div className="mt-4 flex items-center text-sm text-gray-500">
                <div className="flex items-center mr-6">
                  <Calendar className="h-4 w-4 mr-1" />
                  {task.dueDate}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  2 days left
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}