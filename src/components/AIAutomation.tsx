import React, { useState } from 'react';
import { 
  Bot, 
  Brain, 
  Zap, 
  Settings, 
  TrendingUp, 
  Clock, 
  DollarSign,
  CheckCircle,
  Github,
  Cloud,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react';

const AIAutomation = () => {
  const [aiFeatures, setAIFeatures] = useState({
    autoPackaging: true,
    smartTesting: true,
    predictiveScheduling: false,
    autoOptimization: true,
    intelligentRetry: true
  });

  const toggleFeature = (feature: string) => {
    setAIFeatures(prev => ({
      ...prev,
      [feature]: !prev[feature as keyof typeof prev]
    }));
  };

  const aiModels = [
    {
      name: 'Azure OpenAI GPT-4',
      status: 'active',
      accuracy: 94.2,
      avgProcessingTime: '2.3s',
      costPerOperation: '$0.045',
      requests: 12847,
      uptime: '99.9%'
    },
    {
      name: 'GitHub Copilot',
      status: 'active',
      accuracy: 91.8,
      avgProcessingTime: '1.8s',
      costPerOperation: '$0.032',
      requests: 8932,
      uptime: '99.7%'
    },
    {
      name: 'Custom Package Analyzer',
      status: 'training',
      accuracy: 87.3,
      avgProcessingTime: '3.1s',
      costPerOperation: '$0.021',
      requests: 5624,
      uptime: '98.5%'
    }
  ];

  const workflows = [
    {
      id: 1,
      name: 'Smart Package Detection',
      description: 'Automatically detects and categorizes new applications',
      status: 'active',
      triggers: 245,
      success: 98.2
    },
    {
      id: 2,
      name: 'Intelligent Dependency Resolution',
      description: 'Resolves package dependencies using AI analysis',
      status: 'active',
      triggers: 178,
      success: 95.7
    },
    {
      id: 3,
      name: 'Predictive Failure Prevention',
      description: 'Predicts and prevents deployment failures',
      status: 'paused',
      triggers: 134,
      success: 89.4
    }
  ];

  const decisionLogs = [
    {
      timestamp: '2 minutes ago',
      decision: 'Recommended incremental deployment for Office 365 update',
      confidence: 94,
      outcome: 'accepted',
      reasoning: 'High confidence based on historical patterns and current system load'
    },
    {
      timestamp: '15 minutes ago',
      decision: 'Suggested alternative packaging method for Adobe Creative Suite',
      confidence: 87,
      outcome: 'accepted',
      reasoning: 'Previous method showed 23% higher failure rate'
    },
    {
      timestamp: '32 minutes ago',
      decision: 'Flagged potential compatibility issue with Chrome update',
      confidence: 91,
      outcome: 'investigating',
      reasoning: 'Detected similar issues in 15% of similar environments'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">AI Automation Control Center</h1>
          <p className="text-gray-400 mt-1">Configure and monitor AI-driven automation features</p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-4 py-2 rounded-lg font-medium transition-all flex items-center space-x-2">
            <Bot className="w-4 h-4" />
            <span>Train New Model</span>
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2">
            <Settings className="w-4 h-4" />
            <span>Configure AI</span>
          </button>
        </div>
      </div>

      {/* AI Service Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
                <Cloud className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Azure OpenAI</h3>
                <p className="text-sm text-gray-400">Primary AI Engine</p>
              </div>
            </div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">Usage this month:</span>
              <span className="text-white font-medium">2.1M tokens</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Cost:</span>
              <span className="text-white font-medium">$1,247</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Uptime:</span>
              <span className="text-green-400 font-medium">99.9%</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg flex items-center justify-center">
                <Github className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">GitHub Copilot</h3>
                <p className="text-sm text-gray-400">Code Generation</p>
              </div>
            </div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">Scripts generated:</span>
              <span className="text-white font-medium">1,847</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Success rate:</span>
              <span className="text-white font-medium">94.2%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Uptime:</span>
              <span className="text-green-400 font-medium">99.7%</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Custom Models</h3>
                <p className="text-sm text-gray-400">Specialized Analysis</p>
              </div>
            </div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">Active models:</span>
              <span className="text-white font-medium">3</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Training status:</span>
              <span className="text-yellow-400 font-medium">In Progress</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Accuracy:</span>
              <span className="text-white font-medium">91.8%</span>
            </div>
          </div>
        </div>
      </div>

      {/* AI Feature Toggles */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-6">AI Feature Controls</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(aiFeatures).map(([key, enabled]) => {
            const featureNames: Record<string, string> = {
              autoPackaging: 'Auto-packaging',
              smartTesting: 'Smart Testing',
              predictiveScheduling: 'Predictive Scheduling',
              autoOptimization: 'Auto-optimization',
              intelligentRetry: 'Intelligent Retry'
            };
            
            return (
              <div key={key} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Zap className={`w-5 h-5 ${enabled ? 'text-green-400' : 'text-gray-400'}`} />
                  <div>
                    <h4 className="font-medium text-white">{featureNames[key]}</h4>
                    <p className="text-sm text-gray-400">
                      {enabled ? 'Active' : 'Disabled'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => toggleFeature(key)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    enabled ? 'bg-blue-600' : 'bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      enabled ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* AI Model Performance */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-6">AI Model Performance</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 text-gray-400 font-medium">Model</th>
                <th className="text-left py-3 text-gray-400 font-medium">Status</th>
                <th className="text-left py-3 text-gray-400 font-medium">Accuracy</th>
                <th className="text-left py-3 text-gray-400 font-medium">Avg Time</th>
                <th className="text-left py-3 text-gray-400 font-medium">Cost/Op</th>
                <th className="text-left py-3 text-gray-400 font-medium">Requests</th>
                <th className="text-left py-3 text-gray-400 font-medium">Uptime</th>
                <th className="text-left py-3 text-gray-400 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {aiModels.map((model, index) => (
                <tr key={index} className="border-b border-gray-700/50">
                  <td className="py-4">
                    <div className="font-medium text-white">{model.name}</div>
                  </td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      model.status === 'active' ? 'bg-green-900 text-green-400' :
                      model.status === 'training' ? 'bg-yellow-900 text-yellow-400' :
                      'bg-red-900 text-red-400'
                    }`}>
                      {model.status}
                    </span>
                  </td>
                  <td className="py-4 text-white">{model.accuracy}%</td>
                  <td className="py-4 text-white">{model.avgProcessingTime}</td>
                  <td className="py-4 text-white">{model.costPerOperation}</td>
                  <td className="py-4 text-white">{model.requests.toLocaleString()}</td>
                  <td className="py-4">
                    <span className={`font-medium ${
                      parseFloat(model.uptime) > 99 ? 'text-green-400' : 'text-yellow-400'
                    }`}>
                      {model.uptime}
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-1 text-gray-400 hover:text-white hover:bg-gray-700 rounded">
                        <RotateCcw className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-white hover:bg-gray-700 rounded">
                        <Settings className="w-4 h-4" />
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
        {/* Automated Workflows */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">Automated Workflows</h3>
          <div className="space-y-4">
            {workflows.map((workflow) => (
              <div key={workflow.id} className="border border-gray-600 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-white">{workflow.name}</h4>
                  <button className={`p-1 rounded ${
                    workflow.status === 'active' ? 'text-green-400 hover:bg-green-400/10' : 'text-gray-400 hover:bg-gray-400/10'
                  }`}>
                    {workflow.status === 'active' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                </div>
                <p className="text-sm text-gray-400 mb-3">{workflow.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Triggers: {workflow.triggers}</span>
                  <span className="text-green-400">Success: {workflow.success}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Decision Logs */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">AI Decision Logs</h3>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {decisionLogs.map((log, index) => (
              <div key={index} className="border border-gray-600 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <p className="text-white text-sm">{log.decision}</p>
                  <div className="flex items-center space-x-2">
                    <div className={`px-2 py-1 rounded text-xs ${
                      log.confidence > 90 ? 'bg-green-900 text-green-400' :
                      log.confidence > 80 ? 'bg-yellow-900 text-yellow-400' :
                      'bg-red-900 text-red-400'
                    }`}>
                      {log.confidence}%
                    </div>
                    <div className={`px-2 py-1 rounded text-xs ${
                      log.outcome === 'accepted' ? 'bg-blue-900 text-blue-400' :
                      log.outcome === 'investigating' ? 'bg-yellow-900 text-yellow-400' :
                      'bg-gray-900 text-gray-400'
                    }`}>
                      {log.outcome}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mb-2">{log.reasoning}</p>
                <p className="text-xs text-gray-500">{log.timestamp}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAutomation;