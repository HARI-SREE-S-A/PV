import React from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Target, 
  Download, 
  BarChart3,
  PieChart,
  LineChart,
  Calendar
} from 'lucide-react';

const Analytics = () => {
  const costComparison = {
    traditional: { value: 45.87, label: 'Manual' },
    aiDriven: { value: 19.15, label: 'AI' },
    savings: 58.2
  };

  const performanceMetrics = [
    {
      metric: 'Throughput',
      Manual: '5 apps/day',
      AI: '20 apps/day',
      improvement: '+200%',
      color: 'from-blue-500 to-blue-600'
    },
    {
      metric: 'Lead Time',
      Manual: '14 days',
      AI: '1 day',
      improvement: '-157%',
      color: 'from-green-500 to-green-600'
    },
    {
      metric: 'Cycle Time',
      Manual: '8 hours',
      AI '3.2 hours',
      improvement: '-60%',
      color: 'from-purple-500 to-purple-600'
    },
    {
      metric: 'Error Rate',
      Manual: '12%',
      AI: '3%',
      improvement: '-75%',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  const roiData = {
    investmentCost: 47000,
    monthlySavings: 27400,
    paybackMonths: 6.6,
    annualROI: 180.2
  };

  const deploymentTrends = [
    { month: 'Jan', successful: 245, failed: 28 },
    { month: 'Feb', successful: 289, failed: 22 },
    { month: 'Mar', successful: 324, failed: 19 },
    { month: 'Apr', successful: 378, failed: 15 },
    { month: 'May', successful: 412, failed: 12 },
    { month: 'Jun', successful: 445, failed: 8 }
  ];

  const topApplications = [
    { name: 'Microsoft Office 365', deployments: 1247, success: 98.5 },
    { name: 'Adobe Creative Suite', deployments: 892, success: 96.2 },
    { name: 'Google Chrome', deployments: 734, success: 99.1 },
    { name: 'Slack Desktop', deployments: 623, success: 97.8 },
    { name: 'Visual Studio Code', deployments: 589, success: 98.9 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Analytics & Reporting</h1>
          <p className="text-gray-400 mt-1">Comprehensive insights into AI-driven packaging performance and ROI</p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 px-4 py-2 rounded-lg font-medium transition-all flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export Report</span>
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>Custom Period</span>
          </button>
        </div>
      </div>

      {/* Cost Savings Dashboard */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-6">Cost Savings Analysis</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-gray-700 rounded-lg p-6">
              <h4 className="font-medium text-white mb-4">Cost Per VM Comparison</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">{costComparison.traditional.label}</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-32 bg-gray-600 rounded-full h-3">
                      <div className="bg-red-500 h-3 rounded-full w-full"></div>
                    </div>
                    <span className="text-white font-bold">£{costComparison.traditional.value}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">{costComparison.aiDriven.label}</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-32 bg-gray-600 rounded-full h-3">
                      <div 
                        className="bg-green-500 h-3 rounded-full" 
                        style={{ width: `${(costComparison.aiDriven.value / costComparison.traditional.value) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-white font-bold">£{costComparison.aiDriven.value}</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-green-900/20 border border-green-900/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                  <div>
                    <p className="text-green-400 font-semibold">
                      {costComparison.savings}% Cost Reduction
                    </p>
                    <p className="text-gray-400 text-sm">
                      Saving £{(costComparison.traditional.value - costComparison.aiDriven.value).toFixed(2)} per VM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-medium text-white mb-2">Monthly Savings</h4>
              <p className="text-2xl font-bold text-green-400">£{roiData.monthlySavings.toLocaleString()}</p>
              <p className="text-gray-400 text-sm">vs traditional method</p>
            </div>
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-medium text-white mb-2">Payback Period</h4>
              <p className="text-2xl font-bold text-blue-400">{roiData.paybackMonths} months</p>
              <p className="text-gray-400 text-sm">Investment recovery time</p>
            </div>
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-medium text-white mb-2">Annual ROI</h4>
              <p className="text-2xl font-bold text-purple-400">{roiData.annualROI}%</p>
              <p className="text-gray-400 text-sm">Return on investment</p>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Improvement Metrics */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-6">Performance Improvements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {performanceMetrics.map((metric) => (
            <div key={metric.metric} className="bg-gray-700 rounded-lg p-6">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${metric.color} flex items-center justify-center mb-4`}>
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-3">{metric.metric}</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">Before:</span>
                  <span className="text-gray-300">{metric.before}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">After:</span>
                  <span className="text-white font-medium">{metric.after}</span>
                </div>
                <div className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                  metric.improvement.startsWith('+') ? 'bg-green-900 text-green-400' : 'bg-blue-900 text-blue-400'
                }`}>
                  {metric.improvement}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Deployment Success Trends */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">Deployment Trends</h3>
            <LineChart className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {deploymentTrends.map((data) => (
              <div key={data.month} className="flex items-center space-x-4">
                <div className="w-12 text-gray-400 text-sm font-medium">{data.month}</div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="flex-1 bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full" 
                        style={{ width: `${(data.successful / (data.successful + data.failed)) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-400 w-12">
                      {((data.successful / (data.successful + data.failed)) * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Success: {data.successful}</span>
                    <span>Failed: {data.failed}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Applications */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">Top Applications</h3>
            <PieChart className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {topApplications.map((app, index) => (
              <div key={app.name} className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-white font-medium">{app.name}</h4>
                    <span className="text-green-400 text-sm font-medium">{app.success}%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-gray-700 rounded-full h-1.5">
                      <div 
                        className="bg-green-500 h-1.5 rounded-full" 
                        style={{ width: `${app.success}%` }}
                      ></div>
                    </div>
                    <span className="text-gray-400 text-xs">{app.deployments} deployments</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ROI Tracking */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-6">ROI Tracking & Investment Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">Total Investment</p>
                <p className="text-2xl font-bold">£{roiData.investmentCost.toLocaleString()}</p>
              </div>
              <DollarSign className="w-8 h-8 text-blue-100" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Monthly Savings</p>
                <p className="text-2xl font-bold">£{roiData.monthlySavings.toLocaleString()}</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-100" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Payback Period</p>
                <p className="text-2xl font-bold">{roiData.paybackMonths}m</p>
              </div>
              <Clock className="w-8 h-8 text-purple-100" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-lg p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-100 text-sm">Annual ROI</p>
                <p className="text-2xl font-bold">{roiData.annualROI}%</p>
              </div>
              <Target className="w-8 h-8 text-yellow-100" />
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-700 rounded-lg">
          <h4 className="text-white font-medium mb-2">Key Insights</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="text-gray-300">
              • AI automation has reduced packaging time by 60% on average
            </div>
            <div className="text-gray-300">
              • Error rates decreased by 75% with intelligent preprocessing
            </div>
            <div className="text-gray-300">
              • Engineer productivity increased by 15% with AI assistance
            </div>
            <div className="text-gray-300">
              • Cost per VM reduced from £45.87 to £19.15 (58% savings)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
