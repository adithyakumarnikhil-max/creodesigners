'use client';

import { useState, useEffect } from 'react';

export default function DeploymentStatus() {
  const [status, setStatus] = useState('checking');
  const [deploymentInfo, setDeploymentInfo] = useState(null);

  useEffect(() => {
    // Simulate checking deployment status
    const checkStatus = async () => {
      try {
        // In a real implementation, this would check the actual Vercel deployment status
        // For now, we'll just simulate the check
        setTimeout(() => {
          setStatus('success');
          setDeploymentInfo({
            url: 'https://creodesigners.vercel.app',
            status: 'Deployed',
            lastUpdate: new Date().toLocaleString()
          });
        }, 2000);
      } catch (error) {
        setStatus('error');
      }
    };

    checkStatus();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">Deployment Status</h1>
        
        {status === 'checking' && (
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p>Checking deployment status...</p>
          </div>
        )}
        
        {status === 'success' && deploymentInfo && (
          <div className="text-center">
            <div className="text-green-500 text-5xl mb-4">✓</div>
            <h2 className="text-xl font-semibold mb-2">Deployment Successful!</h2>
            <p className="mb-4">Your website is now live at:</p>
            <a 
              href={deploymentInfo.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline break-all"
            >
              {deploymentInfo.url}
            </a>
            <div className="mt-6 p-4 bg-gray-50 rounded">
              <p className="text-sm text-gray-600">
                <strong>Status:</strong> {deploymentInfo.status}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Last Update:</strong> {deploymentInfo.lastUpdate}
              </p>
            </div>
          </div>
        )}
        
        {status === 'error' && (
          <div className="text-center">
            <div className="text-red-500 text-5xl mb-4">✗</div>
            <h2 className="text-xl font-semibold mb-2">Deployment Issue</h2>
            <p className="mb-4">There was an issue with the deployment.</p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Retry Check
            </button>
          </div>
        )}
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="font-semibold mb-2">Troubleshooting Steps:</h3>
          <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
            <li>Check your Vercel dashboard for build logs</li>
            <li>Ensure all dependencies are correctly installed</li>
            <li>Verify the repository is properly connected</li>
            <li>Check for any custom domain configuration issues</li>
          </ul>
        </div>
      </div>
    </div>
  );
}