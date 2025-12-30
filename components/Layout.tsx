
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col max-w-4xl mx-auto bg-white shadow-xl">
      <header className="bg-gradient-to-r from-orange-500 via-white to-green-600 p-1">
        <div className="bg-white px-4 py-4 flex items-center justify-between border-b">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-xl">
              SY
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800 leading-tight">Saral Yojana</h1>
              <p className="text-xs text-gray-500 font-medium">Sarkari Yojana, Ab Saral!</p>
            </div>
          </div>
          <div className="text-right hidden sm:block">
            <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Government Assistant</span>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-hidden flex flex-col">
        {children}
      </main>

      <footer className="p-4 border-t bg-gray-50 text-center text-xs text-gray-500">
        <p>© 2024 Saral Yojana AI Assistant. Not an official government platform.</p>
        <p className="mt-1">Verify details at <a href="https://myscheme.gov.in" target="_blank" className="text-blue-600 underline">myscheme.gov.in</a></p>
      </footer>
    </div>
  );
};

export default Layout;
