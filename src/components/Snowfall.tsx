import React from 'react';

const Snowfall = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-fall"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 3 + 2}s`,
          }}
        >
          <div className="h-2 w-2 bg-white rounded-full opacity-70" />
        </div>
      ))}
    </div>
  );
};

export default Snowfall;