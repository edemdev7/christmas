import React from 'react';
import { Sparkles, Snowflake } from 'lucide-react';

const Decorations = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          {i % 2 === 0 ? (
            <Sparkles className="w-6 h-6 text-yellow-200" />
          ) : (
            <Snowflake className="w-6 h-6 text-blue-200" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Decorations;