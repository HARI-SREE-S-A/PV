import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  Bot, 
  Server, 
  BarChart3, 
  Users, 
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, onToggle }) => {
  const location = useLocation();

  const menuItems = [
    { path: '/', icon: LayoutDashboard, label: 'Overview', badge: null },
    { path: '/applications', icon: Package, label: 'Applications', badge: '127' },
    { path: '/ai-automation', icon: Bot, label: 'AI Automation', badge: null },
    { path: '/infrastructure', icon: Server, label: 'Infrastructure', badge: '1M' },
    { path: '/analytics', icon: BarChart3, label: 'Analytics', badge: null },
    { path: '/users', icon: Users, label: 'User Management', badge: null },
    { path: '/settings', icon: Settings, label: 'Settings', badge: null },
  ];

  return (
    <div className={`fixed left-0 top-0 h-full bg-gray-800 border-r border-gray-700 transition-all duration-300 z-50 ${collapsed ? 'w-16' : 'w-64'}`}>
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        {!collapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-teal-500 rounded"></div>
            <span className="font-semibold text-white">PackIntel</span>
          </div>
        )}
        <button
          onClick={onToggle}
          className="p-1 rounded hover:bg-gray-700 transition-colors"
        >
          {collapsed ? (
            <ChevronRight className="w-4 h-4 text-gray-400" />
          ) : (
            <ChevronLeft className="w-4 h-4 text-gray-400" />
          )}
        </button>
      </div>

      <nav className="mt-6">
        <ul className="space-y-2 px-3">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {!collapsed && (
                    <>
                      <span className="flex-1">{item.label}</span>
                      {item.badge && (
                        <span className="bg-blue-500 text-xs px-2 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {!collapsed && (
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg p-3">
            <h3 className="text-sm font-semibold text-white mb-1">AI Assistant</h3>
            <p className="text-xs text-blue-100 mb-2">Get help with packaging and deployments</p>
            <button className="w-full bg-white text-blue-600 text-xs font-medium py-1.5 rounded">
              Ask AI
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;