import React from 'react';

const ChristmasLights = () => {
  return (
    <div className="fixed top-0 left-0 right-0 flex justify-around pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="w-4 h-4 rounded-full animate-christmas-lights"
          style={{
            backgroundColor: ['#ff0000', '#00ff00', '#ffff00', '#0000ff'][i % 4],
            animationDelay: `${i * 0.1}s`
          }}
        />
      ))}
    </div>
  );
};

export default ChristmasLights;