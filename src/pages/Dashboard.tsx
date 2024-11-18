import React from 'react';
import { Activity, Users, FolderKanban, MessageSquare } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { label: 'Active Projects', value: '12', icon: FolderKanban, color: 'text-blue-600' },
    { label: 'Team Members', value: '24', icon: Users, color: 'text-green-600' },
    { label: 'Tasks Completed', value: '156', icon: Activity, color: 'text-purple-600' },
    { label: 'Messages', value: '892', icon: MessageSquare, color: 'text-yellow-600' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <stat.icon className={`h-8 w-8 ${stat.color}`} />
              <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
            </div>
            <h3 className="text-sm font-medium text-gray-500">{stat.label}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center space-x-4">
                <div className="h-2 w-2 rounded-full bg-indigo-600"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">New task added to Project Alpha</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Deadlines</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center space-x-4">
                <div className="h-2 w-2 rounded-full bg-red-600"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">Website Redesign Due</p>
                  <p className="text-xs text-gray-500">in 3 days</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}