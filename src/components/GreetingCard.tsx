import React from 'react';
import { Gift } from 'lucide-react';

const GreetingCard = () => {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-12 shadow-2xl transform hover:scale-105 transition-transform">
      <h1 className="text-6xl font-bold text-red-500 mb-6 animate-text-glow">
        Merry Christmas!
      </h1>
      <p className="text-2xl text-white mb-8">
        Wishing you joy, peace, and happiness this holiday season
      </p>
      <div className="flex justify-center space-x-6">
        <Gift className="w-10 h-10 text-red-400 animate-wiggle" />
        <Gift className="w-10 h-10 text-green-400 animate-wiggle" style={{ animationDelay: '0.2s' }} />
        <Gift className="w-10 h-10 text-yellow-400 animate-wiggle" style={{ animationDelay: '0.4s' }} />
      </div>
    </div>
  );
};

export default GreetingCard;