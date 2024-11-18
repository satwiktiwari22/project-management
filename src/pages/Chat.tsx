import React, { useState } from 'react';
import { Send, Search } from 'lucide-react';

export default function Chat() {
  const [message, setMessage] = useState('');

  const conversations = [
    { id: 1, name: 'Team Alpha', lastMessage: 'Great work everyone!', time: '2m ago', unread: 2 },
    { id: 2, name: 'Marketing', lastMessage: 'Meeting at 3 PM', time: '1h ago', unread: 0 },
    { id: 3, name: 'Development', lastMessage: 'PR is ready for review', time: '3h ago', unread: 1 },
  ];

  const messages = [
    { id: 1, sender: 'Alice', content: `Hey team, how's the progress?`, time: '10:00 AM', isMine: false },
    { id: 2, sender: 'Bob', content: 'Working on the new features', time: '10:05 AM', isMine: false },
    { id: 3, sender: 'You', content: 'Great! Let me know if you need any help', time: '10:10 AM', isMine: true },
  ];

  return (
    <div className="flex h-full">
      <div className="w-80 border-r border-gray-200 bg-white">
        <div className="p-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="overflow-y-auto">
          {conversations.map((conv) => (
            <div
              key={conv.id}
              className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center justify-between"
            >
              <div className="flex-1 min-w-0">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900">{conv.name}</span>
                  <span className="text-xs text-gray-500">{conv.time}</span>
                </div>
                <p className="text-sm text-gray-500 truncate">{conv.lastMessage}</p>
              </div>
              {conv.unread > 0 && (
                <span className="ml-2 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {conv.unread}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b border-gray-200 bg-white">
          <h2 className="text-lg font-semibold">Team Alpha</h2>
          <p className="text-sm text-gray-500">3 members</p>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.isMine ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${
                  msg.isMine
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                {!msg.isMine && (
                  <span className="text-xs font-medium block mb-1">{msg.sender}</span>
                )}
                <p className="text-sm">{msg.content}</p>
                <span className="text-xs block mt-1 opacity-75">{msg.time}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-gray-200 bg-white">
          <div className="flex space-x-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}