import React from 'react';
import { 
  TrendingUp, 
  Package, 
  CheckCircle, 
  DollarSign, 
  Activity, 
  Zap, 
  Github, 
  Cloud,
  Plus,
  BarChart3,
  MessageSquare
} from 'lucide-react';

const Overview = () => {
  const metrics = [
    {
      title: 'Active VMs',
      value: '5000',
      change: '+2.3%',
      trend: 'up',
      icon: Activity,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Apps Packaged Today',
      value: '23',
      change: '+15%',
      trend: 'up',
      icon: Package,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Success Rate',
      value: '98.7%',
      change: '+1.2%',
      trend: 'up',
      icon: CheckCircle,
      color: 'from-teal-500 to-teal-600'
    },
    {
      title: 'Cost Savings',
      value: '£127.4K',
      change: '+18.9%',
      trend: 'up',
      icon: DollarSign,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const deployments = [
    { name: 'Microsoft Office 365', progress: 85, eta: '2h 15m', status: 'deploying' },
    { name: 'Adobe Acrobat Pro', progress: 100, eta: 'Complete', status: 'completed' },
    { name: 'Slack Desktop', progress: 45, eta: '4h 30m', status: 'deploying' },
    { name: 'Visual Studio Code', progress: 25, eta: '6h 45m', status: 'queued' }
  ];

  const aiServices = [
    { name: 'Azure OpenAI', status: 'healthy', uptime: '99.9%', icon: Cloud, color: 'text-green-400' },
    { name: 'GitHub Copilot', status: 'healthy', uptime: '99.7%', icon: Github, color: 'text-green-400' },
    { name: 'Intune Integration', status: 'warning', uptime: '98.2%', icon: Zap, color: 'text-yellow-400' }
  ];

  const activities = [
    { time: '2 minutes ago', action: 'Package deployment completed', item: 'Adobe Reader DC', type: 'success' },
    { time: '15 minutes ago', action: 'AI packaging started', item: 'Chrome Enterprise', type: 'info' },
    { time: '32 minutes ago', action: 'Deployment failed', item: 'Teams Desktop', type: 'error' },
    { time: '1 hour ago', action: 'New package request', item: 'Figma Desktop', type: 'info' },
    { time: '2 hours ago', action: 'Infrastructure scaled', item: 'UK South Region', type: 'success' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Dashboard Overview</h1>
          <p className="text-gray-400 mt-1">Monitor your AI-driven application packaging and deployment</p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 px-4 py-2 rounded-lg font-medium transition-all flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>New Package</span>
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2">
            <BarChart3 className="w-4 h-4" />
            <span>View Analytics</span>
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2">
            <MessageSquare className="w-4 h-4" />
            <span>AI Assistant</span>
          </button>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <div key={metric.title} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${metric.color} flex items-center justify-center`}>
                <metric.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center space-x-1 text-green-400">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium">{metric.change}</span>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold text-white">{metric.value}</h3>
              <p className="text-gray-400 text-sm">{metric.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Live Deployments */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">Live Deployment Status</h3>
          <div className="space-y-4">
            {deployments.map((deployment) => (
              <div key={deployment.name} className="border border-gray-600 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-white">{deployment.name}</h4>
                  <span className="text-sm text-gray-400">{deployment.eta}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-1 bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        deployment.status === 'completed' ? 'bg-green-500' : 
                        deployment.status === 'deploying' ? 'bg-blue-500' : 'bg-gray-500'
                      }`}
                      style={{ width: `${deployment.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-white">{deployment.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Services Health */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">AI Automation Health</h3>
          <div className="space-y-4">
            {aiServices.map((service) => (
              <div key={service.name} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <service.icon className={`w-5 h-5 ${service.color}`} />
                  <div>
                    <h4 className="font-medium text-white">{service.name}</h4>
                    <p className="text-sm text-gray-400">Uptime: {service.uptime}</p>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  service.status === 'healthy' ? 'bg-green-900 text-green-400' : 
                  service.status === 'warning' ? 'bg-yellow-900 text-yellow-400' : 'bg-red-900 text-red-400'
                }`}>
                  {service.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-4">Recent Activities</h3>
        <div className="space-y-3">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-center space-x-4 p-3 hover:bg-gray-700 rounded-lg transition-colors">
              <div className={`w-2 h-2 rounded-full ${
                activity.type === 'success' ? 'bg-green-400' : 
                activity.type === 'error' ? 'bg-red-400' : 'bg-blue-400'
              }`}></div>
              <div className="flex-1">
                <p className="text-white">{activity.action} <span className="font-medium">{activity.item}</span></p>
                <p className="text-gray-400 text-sm">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
