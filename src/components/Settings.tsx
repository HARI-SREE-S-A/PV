import React, { useState } from 'react';
import { 
  Settings as SettingsIcon, 
  Key, 
  Bell, 
  Shield, 
  Database, 
  Cloud, 
  Github, 
  Save,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  Copy,
  Eye,
  EyeOff
} from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('integrations');
  const [showApiKeys, setShowApiKeys] = useState<{[key: string]: boolean}>({});

  const tabs = [
    { id: 'integrations', label: 'Integrations', icon: Cloud },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'backup', label: 'Backup & Recovery', icon: Database },
    { id: 'system', label: 'System Health', icon: SettingsIcon }
  ];

  const integrations = [
    {
      name: 'Azure OpenAI',
      description: 'Primary AI engine for intelligent packaging',
      status: 'connected',
      lastSync: '2 minutes ago',
      apiKey: 'sk-...4f9a',
      settings: ['Model: GPT-4', 'Max Tokens: 4096', 'Temperature: 0.3']
    },
    {
      name: 'GitHub Copilot',
      description: 'AI-powered code generation and assistance',
      status: 'connected',
      lastSync: '15 minutes ago',
      apiKey: 'ghp_...8x2k',
      settings: ['Auto-suggestions: Enabled', 'Language: PowerShell', 'Context: Enhanced']
    },
    {
      name: 'Microsoft Graph API',
      description: 'Integration with Microsoft 365 and Azure AD',
      status: 'connected',
      lastSync: '1 hour ago',
      apiKey: 'app_...m3n9',
      settings: ['Scope: Directory.Read', 'Auth: OAuth2', 'Tenant: packintel.onmicrosoft.com']
    },
    {
      name: 'SCCM Integration',
      description: 'System Center Configuration Manager connectivity',
      status: 'warning',
      lastSync: '3 hours ago',
      apiKey: 'sccm_...7k4p',
      settings: ['Server: sccm.packintel.local', 'Site Code: P01', 'SSL: Enabled']
    },
    {
      name: 'Intune API',
      description: 'Microsoft Intune cloud management',
      status: 'disconnected',
      lastSync: '2 days ago',
      apiKey: 'intune_...9d2f',
      settings: ['Tenant: Active', 'Policies: 47', 'Devices: 125,847']
    }
  ];

  const systemHealth = [
    { component: 'Database', status: 'healthy', uptime: '99.9%', lastCheck: '5 min ago' },
    { component: 'AI Processing Queue', status: 'healthy', uptime: '99.7%', lastCheck: '1 min ago' },
    { component: 'File Storage', status: 'healthy', uptime: '100%', lastCheck: '2 min ago' },
    { component: 'Authentication Service', status: 'warning', uptime: '98.5%', lastCheck: '10 min ago' },
    { component: 'Notification Service', status: 'healthy', uptime: '99.8%', lastCheck: '3 min ago' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'connected':
      case 'healthy': return 'text-green-400';
      case 'warning': return 'text-yellow-400';
      case 'disconnected':
      case 'error': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'connected':
      case 'healthy': return 'bg-green-900/20 border-green-900/50';
      case 'warning': return 'bg-yellow-900/20 border-yellow-900/50';
      case 'disconnected':
      case 'error': return 'bg-red-900/20 border-red-900/50';
      default: return 'bg-gray-900/20 border-gray-900/50';
    }
  };

  const toggleApiKeyVisibility = (integrationName: string) => {
    setShowApiKeys(prev => ({
      ...prev,
      [integrationName]: !prev[integrationName]
    }));
  };

  const renderIntegrations = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">Integration Configuration</h2>
          <p className="text-gray-400 mt-1">Manage API connections and external service integrations</p>
        </div>
        <button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 px-4 py-2 rounded-lg font-medium transition-all flex items-center space-x-2">
          <RefreshCw className="w-4 h-4" />
          <span>Test All Connections</span>
        </button>
      </div>

      <div className="grid gap-6">
        {integrations.map((integration) => (
          <div key={integration.name} className={`border rounded-lg p-6 ${getStatusBg(integration.status)}`}>
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center`}>
                  {integration.name.includes('Azure') && <Cloud className="w-6 h-6 text-white" />}
                  {integration.name.includes('GitHub') && <Github className="w-6 h-6 text-white" />}
                  {integration.name.includes('Graph') && <SettingsIcon className="w-6 h-6 text-white" />}
                  {integration.name.includes('SCCM') && <Database className="w-6 h-6 text-white" />}
                  {integration.name.includes('Intune') && <Shield className="w-6 h-6 text-white" />}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-lg font-semibold text-white">{integration.name}</h3>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      integration.status === 'connected' ? 'bg-green-900 text-green-400' :
                      integration.status === 'warning' ? 'bg-yellow-900 text-yellow-400' :
                      'bg-red-900 text-red-400'
                    }`}>
                      {integration.status}
                    </span>
                  </div>
                  <p className="text-gray-400 mt-1">{integration.description}</p>
                  <p className="text-gray-500 text-sm mt-2">Last sync: {integration.lastSync}</p>
                  
                  <div className="mt-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Key className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400 text-sm">API Key:</span>
                        <code className="bg-gray-700 px-2 py-1 rounded text-xs font-mono text-gray-300">
                          {showApiKeys[integration.name] ? integration.apiKey : '••••••••••••'}
                        </code>
                        <button 
                          onClick={() => toggleApiKeyVisibility(integration.name)}
                          className="text-gray-400 hover:text-white"
                        >
                          {showApiKeys[integration.name] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                        <button className="text-gray-400 hover:text-white">
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="mt-3">
                      <h4 className="text-sm font-medium text-gray-300 mb-2">Configuration:</h4>
                      <div className="flex flex-wrap gap-2">
                        {integration.settings.map((setting, index) => (
                          <span key={index} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                            {setting}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-white rounded text-sm transition-colors">
                  Configure
                </button>
                <button className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm transition-colors">
                  Test
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSystemHealth = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">System Health Monitoring</h2>
          <p className="text-gray-400 mt-1">Monitor system components and performance metrics</p>
        </div>
        <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 px-4 py-2 rounded-lg font-medium transition-all flex items-center space-x-2">
          <RefreshCw className="w-4 h-4" />
          <span>Refresh Status</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {systemHealth.map((component) => (
          <div key={component.component} className={`border rounded-lg p-6 ${getStatusBg(component.status)}`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-white">{component.component}</h3>
              <div className={`w-3 h-3 rounded-full ${
                component.status === 'healthy' ? 'bg-green-400' : 
                component.status === 'warning' ? 'bg-yellow-400' : 'bg-red-400'
              }`}></div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">Status:</span>
                <span className={`text-sm font-medium ${getStatusColor(component.status)}`}>
                  {component.status}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">Uptime:</span>
                <span className="text-white text-sm">{component.uptime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">Last Check:</span>
                <span className="text-gray-300 text-sm">{component.lastCheck}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-4">License Management</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="font-medium text-white mb-2">Azure OpenAI</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Used this month:</span>
                <span className="text-white">2.1M tokens</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Remaining:</span>
                <span className="text-green-400">7.9M tokens</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Cost:</span>
                <span className="text-white">$1,247</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="font-medium text-white mb-2">GitHub Copilot</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Active users:</span>
                <span className="text-white">20/25</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Monthly cost:</span>
                <span className="text-white">$500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Renewal:</span>
                <span className="text-green-400">45 days</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="font-medium text-white mb-2">PackIntel Enterprise</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">VM limit:</span>
                <span className="text-white">1M+ VMs</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Support:</span>
                <span className="text-green-400">24/7 Premium</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">License valid:</span>
                <span className="text-green-400">Until Dec 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Settings & Configuration</h1>
          <p className="text-gray-400 mt-1">Configure system settings, integrations, and security preferences</p>
        </div>
        <button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 px-4 py-2 rounded-lg font-medium transition-all flex items-center space-x-2">
          <Save className="w-4 h-4" />
          <span>Save All Changes</span>
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="border-b border-gray-700">
          <nav className="flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'text-blue-400 border-b-2 border-blue-400 bg-gray-700/50'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/30'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'integrations' && renderIntegrations()}
          {activeTab === 'system' && renderSystemHealth()}
          
          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-white">Notification Preferences</h2>
              <div className="space-y-4">
                <div className="bg-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-white mb-3">Email Notifications</h3>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" className="rounded bg-gray-600 border-gray-500 text-blue-600" defaultChecked />
                      <span className="text-gray-300">Deployment completions</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" className="rounded bg-gray-600 border-gray-500 text-blue-600" defaultChecked />
                      <span className="text-gray-300">System alerts and warnings</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" className="rounded bg-gray-600 border-gray-500 text-blue-600" />
                      <span className="text-gray-300">Weekly performance reports</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-white">Security Settings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-white mb-3">Authentication</h3>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" className="rounded bg-gray-600 border-gray-500 text-blue-600" defaultChecked />
                      <span className="text-gray-300">Multi-factor authentication required</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" className="rounded bg-gray-600 border-gray-500 text-blue-600" defaultChecked />
                      <span className="text-gray-300">Single sign-on (SSO) enabled</span>
                    </label>
                  </div>
                </div>
                <div className="bg-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-white mb-3">API Security</h3>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" className="rounded bg-gray-600 border-gray-500 text-blue-600" defaultChecked />
                      <span className="text-gray-300">API key rotation (monthly)</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" className="rounded bg-gray-600 border-gray-500 text-blue-600" defaultChecked />
                      <span className="text-gray-300">Rate limiting enabled</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'backup' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-white">Backup & Disaster Recovery</h2>
              <div className="space-y-4">
                <div className="bg-green-900/20 border border-green-900/50 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <div>
                      <h3 className="font-medium text-green-400">Automatic Backups Enabled</h3>
                      <p className="text-gray-400 text-sm">Daily backups at 2:00 AM UTC • Retention: 30 days</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-700 rounded-lg p-4">
                    <h4 className="font-medium text-white mb-2">Last Backup</h4>
                    <p className="text-gray-300">October 24, 2024 at 2:15 AM</p>
                    <p className="text-gray-400 text-sm">Size: 847 GB • Duration: 23 minutes</p>
                  </div>
                  <div className="bg-gray-700 rounded-lg p-4">
                    <h4 className="font-medium text-white mb-2">Recovery Time</h4>
                    <p className="text-gray-300">RTO: 4 hours • RPO: 24 hours</p>
                    <p className="text-gray-400 text-sm">Last tested: September 15, 2024</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;