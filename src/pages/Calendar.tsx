import React from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

export default function Calendar() {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  const currentYear = currentDate.getFullYear();

  const events = [
    { id: 1, title: 'Team Meeting', time: '10:00 AM', type: 'meeting' },
    { id: 2, title: 'Project Review', time: '2:00 PM', type: 'review' },
    { id: 3, title: 'Client Call', time: '4:00 PM', type: 'call' },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Calendar</h1>
          <p className="text-gray-500">{currentMonth} {currentYear}</p>
        </div>
        <div className="flex space-x-4">
          <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
            <Plus className="h-5 w-5 mr-2" />
            Add Event
          </button>
          <div className="flex space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded-md">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-md">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="grid grid-cols-7 gap-px border-b">
          {days.map((day) => (
            <div key={day} className="py-2 text-center text-sm font-semibold text-gray-900">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-px">
          {[...Array(35)].map((_, i) => (
            <div
              key={i}
              className={`min-h-32 p-2 ${
                i === 15 ? 'bg-indigo-50' : 'bg-white'
              }`}
            >
              <span className={`text-sm ${
                i === 15 ? 'font-semibold text-indigo-600' : 'text-gray-900'
              }`}>
                {((i - 2 + 31) % 31) + 1}
              </span>
              {i === 15 && (
                <div className="mt-2 space-y-1">
                  {events.map((event) => (
                    <div
                      key={event.id}
                      className={`
                        px-2 py-1 text-xs rounded
                        ${event.type === 'meeting' ? 'bg-blue-100 text-blue-800' : ''}
                        ${event.type === 'review' ? 'bg-purple-100 text-purple-800' : ''}
                        ${event.type === 'call' ? 'bg-green-100 text-green-800' : ''}
                      `}
                    >
                      <div className="font-medium">{event.title}</div>
                      <div>{event.time}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Events</h2>
        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium text-gray-900">{event.title}</h3>
                  <p className="text-sm text-gray-500">{event.time}</p>
                </div>
                <span className={`
                  px-2 py-1 text-xs rounded
                  ${event.type === 'meeting' ? 'bg-blue-100 text-blue-800' : ''}
                  ${event.type === 'review' ? 'bg-purple-100 text-purple-800' : ''}
                  ${event.type === 'call' ? 'bg-green-100 text-green-800' : ''}
                `}>
                  {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}