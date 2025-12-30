
import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';
import { geminiService } from '../services/geminiService';

interface ChatInterfaceProps {
  initialMessage?: string;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ initialMessage }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      text: 'Namaste! I am Saral Yojana. I can help you find government schemes and check your eligibility. You can ask me in English, Hindi, or Hinglish. \n\nनमस्ते! मैं सरल योजना हूँ। मैं आपको सरकारी योजनाओं को खोजने और आपकी पात्रता जांचने में मदद कर सकता हूँ। आप मुझसे अंग्रेजी, हिंदी या हिंग्लिश में पूछ सकते हैं।',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const initialMessageSentRef = useRef(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);
  
  const sendMessage = (messageText: string) => {
    if (!messageText.trim()) return;
    if (isLoading) return;

    const userMessage: Message = { role: 'user', text: messageText, timestamp: new Date() };
    
    setIsLoading(true);
    setMessages(prevMessages => {
      const historyForApi = prevMessages;
      const updatedHistoryForUi = [...prevMessages, userMessage];

      geminiService.sendMessage(historyForApi, messageText)
        .then(response => {
          const modelMessage: Message = {
            role: 'model',
            text: response.text,
            timestamp: new Date(),
            groundingMetadata: response.groundingMetadata,
          };
          setMessages(prev => [...prev, modelMessage]);
        })
        .catch(error => {
          console.error("Error sending message:", error);
          setMessages(prev => [...prev, {
            role: 'model',
            text: "I'm sorry, I'm having trouble connecting right now. Please try again later.",
            timestamp: new Date(),
          }]);
        })
        .finally(() => {
          setIsLoading(false);
        });
      
      return updatedHistoryForUi;
    });
  };

  useEffect(() => {
    if (initialMessage && !initialMessageSentRef.current) {
      initialMessageSentRef.current = true;
      sendMessage(initialMessage);
    }
  }, [initialMessage]);

  const handleSend = () => {
    sendMessage(input);
    setInput('');
  };

  return (
    <div className="flex flex-col h-full bg-slate-50">
      <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-sm ${
              msg.role === 'user' 
                ? 'bg-orange-600 text-white rounded-br-none' 
                : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none'
            }`}>
              <div className="whitespace-pre-wrap text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br />') }}>
              </div>
              {msg.groundingMetadata?.groundingChunks && (
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <p className="text-[10px] font-bold uppercase text-gray-400 mb-1">Sources</p>
                  <ul className="space-y-1">
                    {msg.groundingMetadata.groundingChunks.map((chunk: any, i: number) => (
                      chunk.web && (
                        <li key={i}>
                          <a 
                            href={chunk.web.uri} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-xs text-blue-500 hover:underline flex items-center gap-1"
                          >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            {chunk.web.title || "Official Portal"}
                          </a>
                        </li>
                      )
                    ))}
                  </ul>
                </div>
              )}
              <div className={`text-[10px] text-right mt-1 ${msg.role === 'user' ? 'text-orange-100' : 'text-gray-400'}`}>
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-75"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-150"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 bg-white border-t sticky bottom-0">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your question... (अपनी समस्या लिखें...)"
            className="flex-1 bg-gray-100 border-none rounded-full px-5 py-3 text-sm focus:ring-2 focus:ring-orange-500 outline-none transition-all"
          />
          <button
            onClick={handleSend}
            disabled={isLoading}
            className={`p-3 rounded-full transition-colors ${
              isLoading ? 'bg-gray-300 cursor-not-allowed' : 'bg-orange-600 hover:bg-orange-700'
            } text-white`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
