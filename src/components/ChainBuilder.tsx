import React, { useState } from 'react';
import { Settings, Zap, Shield, Link as LinkIcon } from 'lucide-react';
import type { ChainConfig } from '../types/chain';

export function ChainBuilder() {
  const [config, setConfig] = useState<ChainConfig>({
    name: '',
    executionLayer: 'ZK',
    baseChain: 'Ethereum',
    tps: 50000,
    privacyEnabled: false,
    interopEnabled: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would trigger the deployment
    console.log('Deploying chain with config:', config);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center gap-2 mb-6">
            <Settings className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Chain Configuration</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Chain Name
              </label>
              <input
                type="text"
                value={config.name}
                onChange={(e) => setConfig({ ...config, name: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="MyAwesomeL2"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Execution Layer
                </label>
                <select
                  value={config.executionLayer}
                  onChange={(e) => setConfig({ ...config, executionLayer: e.target.value as 'ZK' | 'Optimistic' })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="ZK">ZK Rollup</option>
                  <option value="Optimistic">Optimistic Rollup</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Base Chain
                </label>
                <select
                  value={config.baseChain}
                  onChange={(e) => setConfig({ ...config, baseChain: e.target.value as 'Ethereum' | 'Solana' | 'Binance' })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="Ethereum">Ethereum</option>
                  <option value="Solana">Solana</option>
                  <option value="Binance">Binance</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-medium">Privacy Layer</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={config.privacyEnabled}
                    onChange={(e) => setConfig({ ...config, privacyEnabled: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <LinkIcon className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium">Cross-chain Interoperability</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={config.interopEnabled}
                    onChange={(e) => setConfig({ ...config, interopEnabled: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Zap className="w-4 h-4 mr-2" />
            Deploy Chain
          </button>
        </div>
      </form>
    </div>
  );
}