import React, { useState } from 'react';
import { 
  Users, 
  UserPlus, 
  Shield, 
  Settings, 
  Search, 
  MoreVertical,
  Edit,
  Trash2,
  Lock,
  Unlock,
  CheckCircle,
  XCircle,
  Clock
} from 'lucide-react';

const UserManagement = () => {
  const [selectedRole, setSelectedRole] = useState('all');
  
  const users = [
    {
      id: '1',
      name: 'Sarah Chen',
      email: 'sarah.chen@packintel.com',
      role: 'DevOps Engineer',
      status: 'active',
      lastLogin: '2 hours ago',
      permissions: ['deploy', 'manage_apps', 'view_analytics'],
      aiAssisted: true,
      packagesManaged: 47
    },
    {
      id: '2',
      name: 'Marcus Rodriguez',
      email: 'marcus.rodriguez@packintel.com',
      role: 'Senior Engineer',
      status: 'active',
      lastLogin: '15 minutes ago',
      permissions: ['deploy', 'manage_apps', 'view_analytics', 'admin'],
      aiAssisted: true,
      packagesManaged: 89
    },
    {
      id: '3',
      name: 'Emily Watson',
      email: 'emily.watson@packintel.com',
      role: 'Package Specialist',
      status: 'active',
      lastLogin: '1 day ago',
      permissions: ['view_apps', 'basic_deploy'],
      aiAssisted: false,
      packagesManaged: 23
    },
    {
      id: '4',
      name: 'David Kim',
      email: 'david.kim@packintel.com',
      role: 'Infrastructure Admin',
      status: 'inactive',
      lastLogin: '5 days ago',
      permissions: ['deploy', 'manage_infrastructure', 'view_analytics'],
      aiAssisted: true,
      packagesManaged: 156
    },
    {
      id: '5',
      name: 'Lisa Thompson',
      email: 'lisa.thompson@packintel.com',
      role: 'QA Engineer',
      status: 'pending',
      lastLogin: 'Never',
      permissions: ['view_apps', 'test_packages'],
      aiAssisted: false,
      packagesManaged: 0
    }
  ];

  const roles = [
    { name: 'DevOps Engineer', permissions: ['deploy', 'manage_apps', 'view_analytics'], users: 12 },
    { name: 'Senior Engineer', permissions: ['deploy', 'manage_apps', 'view_analytics', 'admin'], users: 3 },
    { name: 'Package Specialist', permissions: ['view_apps', 'basic_deploy'], users: 25 },
    { name: 'Infrastructure Admin', permissions: ['deploy', 'manage_infrastructure', 'view_analytics'], users: 5 },
    { name: 'QA Engineer', permissions: ['view_apps', 'test_packages'], users: 8 }
  ];

  const auditLogs = [
    {
      id: 1,
      user: 'Sarah Chen',
      action: 'Deployed package to production',
      target: 'Microsoft Office 365',
      timestamp: '2 hours ago',
      result: 'success'
    },
    {
      id: 2,
      user: 'Marcus Rodriguez',
      action: 'Created new user account',
      target: 'Lisa Thompson',
      timestamp: '4 hours ago',
      result: 'success'
    },
    {
      id: 3,
      user: 'Emily Watson',
      action: 'Modified package configuration',
      target: 'Adobe Acrobat Pro',
      timestamp: '1 day ago',
      result: 'success'
    },
    {
      id: 4,
      user: 'David Kim',
      action: 'Failed login attempt',
      target: 'Admin Panel',
      timestamp: '2 days ago',
      result: 'failed'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-900 text-green-400';
      case 'inactive': return 'bg-gray-700 text-gray-400';
      case 'pending': return 'bg-yellow-900 text-yellow-400';
      default: return 'bg-gray-700 text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <CheckCircle className="w-4 h-4" />;
      case 'inactive': return <XCircle className="w-4 h-4" />;
      case 'pending': return <Clock className="w-4 h-4" />;
      default: return <XCircle className="w-4 h-4" />;
    }
  };

  const filteredUsers = selectedRole === 'all' ? users : users.filter(user => user.role === selectedRole);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">User Management & Security</h1>
          <p className="text-gray-400 mt-1">Manage user access, roles, and security permissions</p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 px-4 py-2 rounded-lg font-medium transition-all flex items-center space-x-2">
            <UserPlus className="w-4 h-4" />
            <span>Add User</span>
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2">
            <Shield className="w-4 h-4" />
            <span>Security Settings</span>
          </button>
        </div>
      </div>

      {/* Team Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-white">53</p>
              <p className="text-gray-400 text-sm">Total Users</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-white">20</p>
              <p className="text-gray-400 text-sm">AI-Augmented</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-white">5</p>
              <p className="text-gray-400 text-sm">Admin Users</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-white">3</p>
              <p className="text-gray-400 text-sm">Pending</p>
            </div>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search users..."
                  className="bg-gray-700 text-white pl-10 pr-4 py-2 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none w-64"
                />
              </div>
              
              <select 
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
              >
                <option value="all">All Roles</option>
                {roles.map(role => (
                  <option key={role.name} value={role.name}>{role.name}</option>
                ))}
              </select>
            </div>

            <div className="text-sm text-gray-400">
              Showing {filteredUsers.length} of {users.length} users
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-700">
              <tr>
                <th className="text-left p-4 font-medium text-gray-300">User</th>
                <th className="text-left p-4 font-medium text-gray-300">Role</th>
                <th className="text-left p-4 font-medium text-gray-300">Status</th>
                <th className="text-left p-4 font-medium text-gray-300">AI Assisted</th>
                <th className="text-left p-4 font-medium text-gray-300">Packages</th>
                <th className="text-left p-4 font-medium text-gray-300">Last Login</th>
                <th className="text-left p-4 font-medium text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-t border-gray-700 hover:bg-gray-700/50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-medium text-sm">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-white">{user.name}</p>
                        <p className="text-sm text-gray-400">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-gray-300">{user.role}</td>
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getStatusColor(user.status)}`}>
                        {getStatusIcon(user.status)}
                        <span>{user.status}</span>
                      </span>
                    </div>
                  </td>
                  <td className="p-4">
                    {user.aiAssisted ? (
                      <span className="px-2 py-1 bg-purple-900 text-purple-400 rounded text-xs font-medium">
                        Enhanced
                      </span>
                    ) : (
                      <span className="px-2 py-1 bg-gray-700 text-gray-400 rounded text-xs font-medium">
                        Traditional
                      </span>
                    )}
                  </td>
                  <td className="p-4 text-gray-300">{user.packagesManaged}</td>
                  <td className="p-4 text-gray-300">{user.lastLogin}</td>
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-700 rounded">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-700 rounded">
                        {user.status === 'active' ? <Lock className="w-4 h-4" /> : <Unlock className="w-4 h-4" />}
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-red-400 hover:bg-red-900/20 rounded">
                        <Trash2 className="w-4 h-4" />
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Role Management */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-6">Role-Based Access Control</h3>
          <div className="space-y-4">
            {roles.map((role) => (
              <div key={role.name} className="border border-gray-600 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-white">{role.name}</h4>
                  <span className="bg-blue-900 text-blue-400 px-2 py-1 rounded text-xs font-medium">
                    {role.users} users
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {role.permissions.map((permission) => (
                    <span key={permission} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                      {permission.replace('_', ' ')}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Audit Trail */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-6">Audit Trail</h3>
          <div className="space-y-4">
            {auditLogs.map((log) => (
              <div key={log.id} className="border border-gray-600 rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-white text-sm">{log.action}</p>
                    <p className="text-gray-400 text-xs mt-1">
                      by <span className="font-medium">{log.user}</span> • {log.target}
                    </p>
                    <p className="text-gray-500 text-xs mt-1">{log.timestamp}</p>
                  </div>
                  <div className={`px-2 py-1 rounded text-xs font-medium ${
                    log.result === 'success' ? 'bg-green-900 text-green-400' : 'bg-red-900 text-red-400'
                  }`}>
                    {log.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Compliance Status */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-6">Compliance & Security Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-green-900/20 border border-green-900/50 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <div>
                <h4 className="font-medium text-green-400">SOC 2 Compliant</h4>
                <p className="text-gray-400 text-sm">Last audit: March 2024</p>
              </div>
            </div>
          </div>

          <div className="bg-green-900/20 border border-green-900/50 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <div>
                <h4 className="font-medium text-green-400">GDPR Compliant</h4>
                <p className="text-gray-400 text-sm">Privacy controls active</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-900/20 border border-blue-900/50 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <Shield className="w-6 h-6 text-blue-400" />
              <div>
                <h4 className="font-medium text-blue-400">Security Score</h4>
                <p className="text-gray-400 text-sm">98/100 - Excellent</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;