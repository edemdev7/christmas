import React from 'react';
import { TreePine } from 'lucide-react';

const ChristmasTree = () => {
  return (
    <div className="mb-8 flex justify-center space-x-4">
      <TreePine className="w-12 h-12 text-green-500 animate-bounce" />
      <TreePine className="w-16 h-16 text-green-600 animate-bounce" style={{ animationDelay: '0.2s' }} />
      <TreePine className="w-12 h-12 text-green-500 animate-bounce" style={{ animationDelay: '0.4s' }} />
    </div>
  );
};

export default ChristmasTree;