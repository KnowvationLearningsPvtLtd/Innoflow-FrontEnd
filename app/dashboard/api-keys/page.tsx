import React from "react";

export default function APIKeysPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold mb-6">API Keys</h1>
      <p className="text-white/70 mb-8 text-center max-w-lg">
        Generate, view, and manage your API keys for accessing the platform programmatically.
      </p>
      <div className="w-full max-w-4xl space-y-6">
        {/* API Key Management */}
        <div className="bg-white/10 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Your API Keys</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-white/70">Key 1: sk-1234abcd5678efgh</span>
              <button className="text-sm text-primary hover:underline">Revoke</button>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/70">Key 2: sk-9876wxyz4321lmno</span>
              <button className="text-sm text-primary hover:underline">Revoke</button>
            </div>
          </div>
          <button className="mt-4 w-full bg-primary text-white py-2 rounded hover:bg-primary/90">
            Generate New API Key
          </button>
        </div>

        {/* API Key Usage */}
        <div className="bg-white/10 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">API Key Usage</h2>
          <p className="text-white/70 mb-4">
            Monitor your API key usage to ensure you stay within your plan limits.
          </p>
          <div className="bg-white/20 p-4 rounded-lg">
            <div className="flex justify-between text-white/70">
              <span>Requests Used:</span>
              <span className="text-white">12,345</span>
            </div>
            <div className="flex justify-between text-white/70 mt-2">
              <span>Requests Remaining:</span>
              <span className="text-white">87,655</span>
            </div>
            <div className="mt-4">
              <div className="h-2 w-full bg-white/20 rounded">
                <div className="h-full bg-primary rounded" style={{ width: "15%" }}></div>
              </div>
              <p className="text-right text-white/70 text-sm mt-1">15% used</p>
            </div>
          </div>
        </div>

        {/* API Documentation */}
        <div className="bg-white/10 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">API Documentation</h2>
          <p className="text-white/70">
            Learn how to use your API keys effectively by visiting our
            <a href="/docs/api-reference" className="text-primary hover:underline ml-1">API Reference</a>.
          </p>
        </div>
      </div>
    </div>
  );
}