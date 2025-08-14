import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Overview from './components/Overview';
import ApplicationManagement from './components/ApplicationManagement';
import AIAutomation from './components/AIAutomation';
import Infrastructure from './components/Infrastructure';
import Analytics from './components/Analytics';
import UserManagement from './components/UserManagement';
import Settings from './components/Settings';
import ChatBot from './components/ChatBot';

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <Router>
      <div className="flex h-screen bg-gray-900 text-white">
        <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
        
        <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
          <Header />
          
          <main className="flex-1 overflow-auto p-6">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/applications" element={<ApplicationManagement />} />
              <Route path="/ai-automation" element={<AIAutomation />} />
              <Route path="/infrastructure" element={<Infrastructure />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/users" element={<UserManagement />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
        
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;