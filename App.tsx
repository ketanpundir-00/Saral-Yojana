
import React, { useState } from 'react';
import Layout from './components/Layout';
import ChatInterface from './components/ChatInterface';
import SchemeExplorer from './components/SchemeExplorer';
import SchemeDetails from './components/SchemeDetails';
import { Scheme } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<'explorer' | 'details' | 'chat'>('explorer');
  const [selectedScheme, setSelectedScheme] = useState<Scheme | null>(null);
  const [initialChatPrompt, setInitialChatPrompt] = useState<string>('');

  const handleSchemeSelect = (scheme: Scheme) => {
    setSelectedScheme(scheme);
    setView('details');
  };

  const handleStartChat = (prompt: string) => {
    setInitialChatPrompt(prompt);
    setView('chat');
  }

  const handleBackToExplorer = () => {
    setSelectedScheme(null);
    setView('explorer');
  }

  const renderView = () => {
    switch (view) {
      case 'explorer':
        return <SchemeExplorer onSchemeSelect={handleSchemeSelect} />;
      case 'details':
        return selectedScheme && <SchemeDetails scheme={selectedScheme} onBack={handleBackToExplorer} onCheckEligibility={handleStartChat} />;
      case 'chat':
        return (
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="px-4 py-2 border-b bg-white flex items-center justify-between sticky top-0 z-20">
              <button 
                onClick={selectedScheme ? () => setView('details') : handleBackToExplorer}
                className="text-gray-500 hover:text-gray-800 flex items-center gap-1 text-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {selectedScheme ? 'Back to Details' : 'Back to Schemes'}
              </button>
              <div className="text-center">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Active Chat</span>
              </div>
               <div className="w-28"></div> {/* Spacer */}
            </div>
            <ChatInterface initialMessage={initialChatPrompt} />
          </div>
        );
      default:
        return <SchemeExplorer onSchemeSelect={handleSchemeSelect} />;
    }
  }

  return (
    <Layout>
      {renderView()}
    </Layout>
  );
};

export default App;
