import React from 'react';
import { TreePine } from 'lucide-react';

const MovingTree = () => {
  return (
    <div className="absolute bottom-4 animate-slide-lr">
      <TreePine className="w-16 h-16 text-green-600 transform -scale-x-100" />
    </div>
  );
};

export default MovingTree;