'use client';

export default function TestPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
      <div className="text-center p-8 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20">
        <h1 className="text-4xl font-bold text-white mb-4">CREO Designers</h1>
        <p className="text-xl text-white/90 mb-6">Website is working correctly!</p>
        <div className="flex justify-center space-x-4">
          <a 
            href="/" 
            className="bg-white text-primary px-6 py-3 rounded-full font-bold hover:bg-white/90 transition-colors"
          >
            Home
          </a>
          <a 
            href="https://creodesigners.vercel.app" 
            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-colors"
          >
            Live Site
          </a>
        </div>
      </div>
    </div>
  );
}