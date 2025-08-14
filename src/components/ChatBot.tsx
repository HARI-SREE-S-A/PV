import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare, 
  Send, 
  X, 
  Bot, 
  User, 
  Minimize2,
  Maximize2,
  BarChart3,
  Package,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  actions?: Array<{ label: string; action: string; }>;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: 'Hello! I\'m your PackIntel AI Assistant. I can help you with:\n\n• Package deployment status\n• Cost analysis and savings\n• Performance metrics\n• Troubleshooting issues\n• Predictive insights\n\nWhat would you like to know?',
      timestamp: new Date(),
      actions: [
        { label: 'Show deployment status', action: 'deployments' },
        { label: 'Cost savings report', action: 'costs' },
        { label: 'Recent alerts', action: 'alerts' }
      ]
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateTyping = (response: string, actions?: Array<{ label: string; action: string; }>) => {
    setIsTyping(true);
    setTimeout(() => {
      const newMessage: Message = {
        id: Date.now().toString(),
        type: 'bot',
        content: response,
        timestamp: new Date(),
        actions
      };
      setMessages(prev => [...prev, newMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    
    // Simulate AI response based on message content
    const lowerMessage = inputMessage.toLowerCase();
    let response = '';
    let actions: Array<{ label: string; action: string; }> | undefined;

    if (lowerMessage.includes('status') || lowerMessage.includes('deployment')) {
      response = '📊 **Current Deployment Status:**\n\n• Microsoft Office 365: 85% complete (ETA: 2h 15m)\n• Adobe Acrobat Pro: ✅ Completed\n• Slack Desktop: 45% complete (ETA: 4h 30m)\n• Visual Studio Code: Queued\n\nOverall success rate today: **98.7%**\n\nWould you like details on any specific deployment?';
      actions = [
        { label: 'Office 365 details', action: 'office_details' },
        { label: 'View all deployments', action: 'all_deployments' }
      ];
    } else if (lowerMessage.includes('cost') || lowerMessage.includes('saving')) {
      response = '💰 **Cost Analysis Summary:**\n\n• **Traditional Method:** £45.87 per VM\n• **AI-Driven Method:** £19.15 per VM\n• **Savings:** 58.2% reduction\n\n**This Month:**\n• Total saved: £127,400\n• ROI: 180.2%\n• Payback period: 6.6 months\n\nYour AI automation is saving significant costs!';
      actions = [
        { label: 'Detailed cost breakdown', action: 'cost_details' },
        { label: 'ROI projections', action: 'roi_projection' }
      ];
    } else if (lowerMessage.includes('error') || lowerMessage.includes('fail') || lowerMessage.includes('problem')) {
      response = '⚠️ **Recent Issues Detected:**\n\n• **Teams Desktop deployment failed** (2 hours ago)\n  - Cause: Dependency conflict\n  - Resolution: Auto-retry with updated dependencies\n  - Status: ✅ Resolved\n\n• **High CPU in UK South region** (15 min ago)\n  - Affected: 2,847 VMs\n  - Mitigation: Load balancing activated\n\nAI confidence in resolutions: **94%**';
      actions = [
        { label: 'View all alerts', action: 'all_alerts' },
        { label: 'Troubleshooting guide', action: 'troubleshoot' }
      ];
    } else if (lowerMessage.includes('performance') || lowerMessage.includes('metric')) {
      response = '📈 **Performance Metrics:**\n\n**Throughput:** 15 → 20 apps/day (+33%)\n**Lead Time:** 14 → 6 days (-57%)\n**Error Rate:** 12% → 3% (-75%)\n**Success Rate:** 98.7%\n\n**AI Impact:**\n• Packaging time reduced by 60%\n• Engineer productivity up 15%\n• Automated decisions: 1,247 today';
      actions = [
        { label: 'Detailed analytics', action: 'analytics' },
        { label: 'Historical trends', action: 'trends' }
      ];
    } else {
      response = 'I can help you with various aspects of PackIntel:\n\n• **Package Management:** Status, deployments, configurations\n• **Cost Analysis:** Savings, ROI, budget optimization\n• **Performance:** Metrics, trends, improvements\n• **Troubleshooting:** Error resolution, system health\n• **AI Insights:** Predictions, recommendations, automation\n\nWhat specific information are you looking for?';
      actions = [
        { label: 'Show package status', action: 'package_status' },
        { label: 'Cost savings report', action: 'cost_report' },
        { label: 'Performance dashboard', action: 'performance' }
      ];
    }

    simulateTyping(response, actions);
    setInputMessage('');
  };

  const handleActionClick = (action: string) => {
    const actionMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: `[Action: ${action}]`,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, actionMessage]);
    
    // Simulate action-specific responses
    let response = 'Processing your request...';
    if (action === 'deployments') response = 'Fetching current deployment status...';
    else if (action === 'costs') response = 'Generating cost savings report...';
    else if (action === 'alerts') response = 'Retrieving recent system alerts...';
    
    simulateTyping(response);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatMessageContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('• ')) {
        return (
          <div key={index} className="flex items-start space-x-2 ml-4">
            <span className="text-blue-400 mt-1">•</span>
            <span>{line.substring(2)}</span>
          </div>
        );
      } else if (line.startsWith('**') && line.endsWith('**')) {
        return (
          <div key={index} className="font-semibold text-blue-400">
            {line.replace(/\*\*/g, '')}
          </div>
        );
      }
      return <div key={index}>{line}</div>;
    });
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-50 group"
      >
        <MessageSquare className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
      </button>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 bg-gray-800 rounded-lg shadow-2xl border border-gray-700 z-50 transition-all duration-300 ${
      isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'
    }`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-t-lg p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <Bot className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="text-white font-medium">AI Assistant</h3>
            <p className="text-blue-100 text-xs">PackIntel MCP Integration</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-white/70 hover:text-white p-1 hover:bg-white/10 rounded transition-colors"
          >
            {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white/70 hover:text-white p-1 hover:bg-white/10 rounded transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="h-[450px] overflow-y-auto p-4 space-y-4 bg-gray-900">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-lg p-3 ${
                  message.type === 'user' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-700 text-gray-100 border border-gray-600'
                }`}>
                  <div className="flex items-start space-x-2">
                    {message.type === 'bot' && (
                      <Bot className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    )}
                    {message.type === 'user' && (
                      <User className="w-4 h-4 text-blue-100 mt-0.5 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <div className="text-sm space-y-1">
                        {formatMessageContent(message.content)}
                      </div>
                      
                      {message.actions && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {message.actions.map((action, index) => (
                            <button
                              key={index}
                              onClick={() => handleActionClick(action.action)}
                              className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded-full transition-colors"
                            >
                              {action.label}
                            </button>
                          ))}
                        </div>
                      )}
                      
                      <div className="text-xs text-gray-400 mt-2">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-700 text-gray-100 border border-gray-600 rounded-lg p-3 max-w-[80%]">
                  <div className="flex items-center space-x-2">
                    <Bot className="w-4 h-4 text-blue-400" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex items-center space-x-3">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about deployments, costs, or performance..."
                className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none text-sm"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white p-2 rounded-lg transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex items-center justify-between mt-2">
              <div className="text-xs text-gray-400">
                Powered by Azure OpenAI & MCP
              </div>
              <div className="flex items-center space-x-1 text-xs text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Online</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatBot;