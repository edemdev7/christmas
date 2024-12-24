import React from 'react';
import { Star } from 'lucide-react';

const StarTop = () => {
  return (
    <div className="absolute top-[-80px] left-1/2 transform -translate-x-1/2">
      <Star className="w-16 h-16 text-yellow-300 animate-pulse" />
    </div>
  );
};

export default StarTop;