import React, { useState } from 'react';
import { 
  Server, 
  MapPin, 
  Activity, 
  HardDrive, 
  Cpu, 
  Zap,
  AlertTriangle,
  CheckCircle,
  Clock,
  TrendingUp,
  Globe
} from 'lucide-react';

const Infrastructure = () => {
  const [selectedRegion, setSelectedRegion] = useState('all');

  const regions = [
    {
      name: 'UK South',
      location: 'London',
      vms: 2000,
      status: 'healthy',
      utilization: 68,
      cost: '£28,450',
      alerts: 2
    },
    {
      name: 'UK West',
      location: 'Cardiff',
      vms: 1000,
      status: 'healthy',
      utilization: 72,
      cost: '£19,200',
      alerts: 0
    }
  ];

  const deploymentPipeline = [
    { stage: 'Package Validation', status: 'completed', duration: '2m 15s', vms: 50 },
    { stage: 'Security Scan', status: 'completed', duration: '5m 30s', vms: 50 },
    { stage: 'Test Deployment', status: 'in-progress', duration: '12m 45s', vms: 500 },
    { stage: 'Production Rollout', status: 'pending', duration: 'Est. 2h 30m', vms: 125000 },
    { stage: 'Health Verification', status: 'pending', duration: 'Est. 15m', vms: 125000 }
  ];

  const alerts = [
    {
      id: 1,
      severity: 'warning',
      message: 'High CPU utilization detected in UK South region',
      timestamp: '15 minutes ago',
      affected: '847 VMs'
    },
    {
      id: 2,
      severity: 'info',
      message: 'Scheduled maintenance window starting in 2 hours',
      timestamp: '1 hour ago',
      affected: 'UK West region'
    },
    {
      id: 3,
      severity: 'critical',
      message: 'Package deployment failed for Adobe Creative Suite',
      timestamp: '2 hours ago',
      affected: '100 VMs'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'text-green-400';
      case 'warning': return 'text-yellow-400';
      case 'critical': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStageStatus = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-900 text-green-400';
      case 'in-progress': return 'bg-blue-900 text-blue-400';
      case 'pending': return 'bg-gray-700 text-gray-400';
      case 'failed': return 'bg-red-900 text-red-400';
      default: return 'bg-gray-700 text-gray-400';
    }
  };

  const totalVMs = regions.reduce((sum, region) => sum + region.vms, 0);
  const totalCost = regions.reduce((sum, region) => sum + parseFloat(region.cost.replace('£', '').replace(',', '')), 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Infrastructure Monitor</h1>
          <p className="text-gray-400 mt-1">Monitor VM infrastructure and deployment pipelines across UK regions</p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 px-4 py-2 rounded-lg font-medium transition-all flex items-center space-x-2">
            <Activity className="w-4 h-4" />
            <span>Live Monitoring</span>
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2">
            <Globe className="w-4 h-4" />
            <span>Regional View</span>
          </button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
              <Server className="w-6 h-6 text-white" />
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-white">{totalVMs.toLocaleString()}</p>
              <p className="text-gray-400 text-sm">Total VMs</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-white">98.7%</p>
              <p className="text-gray-400 text-sm">Uptime</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
              <HardDrive className="w-6 h-6 text-white" />
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-white">£{totalCost.toLocaleString()}</p>
              <p className="text-gray-400 text-sm">Monthly Cost</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-600 flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-white">{alerts.filter(a => a.severity !== 'info').length}</p>
              <p className="text-gray-400 text-sm">Active Alerts</p>
            </div>
          </div>
        </div>
      </div>

      {/* Regional Infrastructure */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-6">Regional Infrastructure</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {regions.map((region) => (
            <div key={region.name} className="bg-gray-700 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{region.name}</h4>
                    <p className="text-sm text-gray-400">{region.location}</p>
                  </div>
                </div>
                <div className={`flex items-center space-x-2 ${getStatusColor(region.status)}`}>
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">{region.status}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 rounded p-3">
                  <p className="text-gray-400 text-sm">Virtual Machines</p>
                  <p className="text-xl font-bold text-white">{region.vms.toLocaleString()}</p>
                </div>
                <div className="bg-gray-800 rounded p-3">
                  <p className="text-gray-400 text-sm">Monthly Cost</p>
                  <p className="text-xl font-bold text-white">{region.cost}</p>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400 text-sm">Resource Utilization</span>
                  <span className="text-white text-sm font-medium">{region.utilization}%</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      region.utilization > 80 ? 'bg-red-500' : 
                      region.utilization > 60 ? 'bg-yellow-500' : 'bg-green-500'
                    }`}
                    style={{ width: `${region.utilization}%` }}
                  ></div>
                </div>
              </div>

              {region.alerts > 0 && (
                <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-900/50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-400" />
                    <span className="text-yellow-400 text-sm">{region.alerts} active alert(s)</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Deployment Pipeline */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-6">Deployment Pipeline</h3>
          <div className="space-y-4">
            {deploymentPipeline.map((stage, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="relative">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    stage.status === 'completed' ? 'bg-green-600' :
                    stage.status === 'in-progress' ? 'bg-blue-600' :
                    stage.status === 'failed' ? 'bg-red-600' : 'bg-gray-600'
                  }`}>
                    {stage.status === 'completed' ? (
                      <CheckCircle className="w-4 h-4 text-white" />
                    ) : stage.status === 'in-progress' ? (
                      <Activity className="w-4 h-4 text-white animate-pulse" />
                    ) : (
                      <Clock className="w-4 h-4 text-white" />
                    )}
                  </div>
                  {index < deploymentPipeline.length - 1 && (
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-gray-600"></div>
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-white">{stage.stage}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getStageStatus(stage.status)}`}>
                      {stage.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-sm text-gray-400">{stage.vms.toLocaleString()} VMs</p>
                    <p className="text-sm text-gray-400">{stage.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alert Management */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-6">Alert Management</h3>
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div key={alert.id} className={`border rounded-lg p-4 ${
                alert.severity === 'critical' ? 'border-red-600 bg-red-900/20' :
                alert.severity === 'warning' ? 'border-yellow-600 bg-yellow-900/20' :
                'border-blue-600 bg-blue-900/20'
              }`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      alert.severity === 'critical' ? 'bg-red-600' :
                      alert.severity === 'warning' ? 'bg-yellow-600' :
                      'bg-blue-600'
                    }`}>
                      {alert.severity === 'critical' || alert.severity === 'warning' ? (
                        <AlertTriangle className="w-3 h-3 text-white" />
                      ) : (
                        <Activity className="w-3 h-3 text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-sm font-medium">{alert.message}</p>
                      <div className="flex items-center space-x-4 mt-1">
                        <p className="text-gray-400 text-xs">{alert.timestamp}</p>
                        <p className="text-gray-400 text-xs">Affected: {alert.affected}</p>
                      </div>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-white">
                    <span className="sr-only">Dismiss</span>
                    ×
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-6">Performance Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mb-3">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-white">99.2%</h4>
            <p className="text-gray-400">Deployment Success Rate</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-3">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-white">4.2m</h4>
            <p className="text-gray-400">Avg Deploy Time</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-3">
              <Cpu className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-white">68%</h4>
            <p className="text-gray-400">Avg CPU Utilization</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;
