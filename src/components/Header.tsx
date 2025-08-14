import React from 'react';
import { Search, Bell, User, Settings } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">PI</span>
            </div>
            <h1 className="text-xl font-semibold text-white">PackIntel</h1>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search applications, VMs, or deployments..."
              className="bg-gray-700 text-white pl-10 pr-4 py-2 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none w-80"
            />
          </div>

          <div className="flex items-center space-x-3">
            <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
            </button>

            <div className="flex items-center space-x-3">
              <div className="text-right">
                <p className="text-sm font-medium text-white">Sarah Chen</p>
                <p className="text-xs text-gray-400">DevOps Engineer</p>
              </div>
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
            </div>

            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;