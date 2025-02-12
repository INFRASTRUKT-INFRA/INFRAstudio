import React from 'react';
import { ChainBuilder } from './components/ChainBuilder';
import { Layers } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Layers className="h-8 w-8 text-blue-600" />
            <div className="ml-3">
              <h1 className="text-2xl font-bold text-gray-900">INFRASTRUKT Studio</h1>
              <p className="text-sm text-gray-500">Build, Test, and Deploy Modular L2s</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <ChainBuilder />
        </div>
      </main>
    </div>
  );
}

export default App;