import React, { useState } from 'react';
import { 
  Package, 
  Search, 
  Filter, 
  Download, 
  Play, 
  Pause, 
  MoreVertical,
  CheckSquare,
  Square,
  Wand2,
  Upload
} from 'lucide-react';

const ApplicationManagement = () => {
  const [selectedApps, setSelectedApps] = useState<string[]>([]);
  const [filterStatus, setFilterStatus] = useState('all');
  
  const applications = [
    {
      id: '1',
      name: 'Microsoft Office 365',
      version: '16.0.14326.20404',
      status: 'In Progress',
      progress: 75,
      aiConfidence: 94,
      vmCount: 125000,
      integration: 'SCCM',
      lastUpdate: '2 hours ago'
    },
    {
      id: '2',
      name: 'Adobe Acrobat Pro DC',
      version: '2023.003.20244',
      status: 'Completed',
      progress: 100,
      aiConfidence: 98,
      vmCount: 89000,
      integration: 'Intune',
      lastUpdate: '1 day ago'
    },
    {
      id: '3',
      name: 'Google Chrome Enterprise',
      version: '118.0.5993.89',
      status: 'Pending',
      progress: 0,
      aiConfidence: 89,
      vmCount: 67000,
      integration: 'SCCM',
      lastUpdate: '3 hours ago'
    },
    {
      id: '4',
      name: 'Microsoft Teams',
      version: '1.6.00.4472',
      status: 'Failed',
      progress: 45,
      aiConfidence: 67,
      vmCount: 92000,
      integration: 'Intune',
      lastUpdate: '5 hours ago'
    },
    {
      id: '5',
      name: 'Slack Desktop',
      version: '4.34.119',
      status: 'In Progress',
      progress: 30,
      aiConfidence: 91,
      vmCount: 23000,
      integration: 'SCCM',
      lastUpdate: '30 minutes ago'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-900 text-green-400';
      case 'In Progress': return 'bg-blue-900 text-blue-400';
      case 'Pending': return 'bg-yellow-900 text-yellow-400';
      case 'Failed': return 'bg-red-900 text-red-400';
      default: return 'bg-gray-900 text-gray-400';
    }
  };

  const toggleSelectApp = (appId: string) => {
    setSelectedApps(prev => 
      prev.includes(appId) 
        ? prev.filter(id => id !== appId)
        : [...prev, appId]
    );
  };

  const toggleSelectAll = () => {
    setSelectedApps(prev => 
      prev.length === applications.length ? [] : applications.map(app => app.id)
    );
  };

  const filteredApplications = applications.filter(app => {
    if (filterStatus === 'all') return true;
    return app.status.toLowerCase() === filterStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Application Management</h1>
          <p className="text-gray-400 mt-1">Manage and monitor application packaging and deployments</p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-4 py-2 rounded-lg font-medium transition-all flex items-center space-x-2">
            <Wand2 className="w-4 h-4" />
            <span>Smart Package</span>
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2">
            <Upload className="w-4 h-4" />
            <span>Upload Package</span>
          </button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search applications..."
                className="bg-gray-700 text-white pl-10 pr-4 py-2 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none w-64"
              />
            </div>
            
            <select 
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="in progress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="failed">Failed</option>
            </select>

            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
              <Filter className="w-4 h-4" />
              <span>More Filters</span>
            </button>
          </div>

          {selectedApps.length > 0 && (
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-400">{selectedApps.length} selected</span>
              <button className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 rounded text-sm font-medium transition-colors">
                Bulk Deploy
              </button>
              <button className="px-3 py-1.5 bg-red-600 hover:bg-red-700 rounded text-sm font-medium transition-colors">
                Bulk Delete
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Applications Table */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-700">
              <tr>
                <th className="text-left p-4 font-medium text-gray-300">
                  <button onClick={toggleSelectAll} className="text-gray-400 hover:text-white">
                    {selectedApps.length === applications.length ? 
                      <CheckSquare className="w-4 h-4" /> : 
                      <Square className="w-4 h-4" />
                    }
                  </button>
                </th>
                <th className="text-left p-4 font-medium text-gray-300">Application</th>
                <th className="text-left p-4 font-medium text-gray-300">Version</th>
                <th className="text-left p-4 font-medium text-gray-300">Status</th>
                <th className="text-left p-4 font-medium text-gray-300">Progress</th>
                <th className="text-left p-4 font-medium text-gray-300">AI Score</th>
                <th className="text-left p-4 font-medium text-gray-300">VM Count</th>
                <th className="text-left p-4 font-medium text-gray-300">Integration</th>
                <th className="text-left p-4 font-medium text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredApplications.map((app) => (
                <tr key={app.id} className="border-t border-gray-700 hover:bg-gray-700/50 transition-colors">
                  <td className="p-4">
                    <button onClick={() => toggleSelectApp(app.id)} className="text-gray-400 hover:text-white">
                      {selectedApps.includes(app.id) ? 
                        <CheckSquare className="w-4 h-4 text-blue-400" /> : 
                        <Square className="w-4 h-4" />
                      }
                    </button>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded flex items-center justify-center">
                        <Package className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-white">{app.name}</p>
                        <p className="text-sm text-gray-400">{app.lastUpdate}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-gray-300">{app.version}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(app.status)}`}>
                      {app.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex-1 bg-gray-700 rounded-full h-2 max-w-20">
                        <div 
                          className={`h-2 rounded-full ${
                            app.status === 'Completed' ? 'bg-green-500' : 
                            app.status === 'In Progress' ? 'bg-blue-500' : 
                            app.status === 'Failed' ? 'bg-red-500' : 'bg-gray-500'
                          }`}
                          style={{ width: `${app.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-300">{app.progress}%</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-12 h-12 relative">
                        <svg className="w-12 h-12 transform -rotate-90">
                          <circle
                            cx="24"
                            cy="24"
                            r="20"
                            fill="transparent"
                            stroke="currentColor"
                            strokeWidth="3"
                            className="text-gray-700"
                          />
                          <circle
                            cx="24"
                            cy="24"
                            r="20"
                            fill="transparent"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeDasharray={`${app.aiConfidence * 1.25} 125`}
                            className="text-green-400"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-xs font-medium text-white">{app.aiConfidence}%</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-gray-300">{app.vmCount.toLocaleString()}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      app.integration === 'SCCM' ? 'bg-blue-900 text-blue-400' : 'bg-purple-900 text-purple-400'
                    }`}>
                      {app.integration}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      {app.status === 'In Progress' ? (
                        <button className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-700 rounded">
                          <Pause className="w-4 h-4" />
                        </button>
                      ) : (
                        <button className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-700 rounded">
                          <Play className="w-4 h-4" />
                        </button>
                      )}
                      <button className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-700 rounded">
                        <Download className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-700 rounded">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <p className="text-gray-400 text-sm">Total Applications</p>
          <p className="text-2xl font-bold text-white">{applications.length}</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <p className="text-gray-400 text-sm">In Progress</p>
          <p className="text-2xl font-bold text-blue-400">
            {applications.filter(app => app.status === 'In Progress').length}
          </p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <p className="text-gray-400 text-sm">Completed</p>
          <p className="text-2xl font-bold text-green-400">
            {applications.filter(app => app.status === 'Completed').length}
          </p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <p className="text-gray-400 text-sm">Failed</p>
          <p className="text-2xl font-bold text-red-400">
            {applications.filter(app => app.status === 'Failed').length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApplicationManagement;