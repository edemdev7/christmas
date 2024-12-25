import React from 'react';
import Snowfall from './components/Snowfall';
import ChristmasTree from './components/ChristmasTree';
import GreetingCard from './components/GreetingCard';
import StarTop from './components/StarTop';
import BackgroundMusic from './components/BackgroundMusic';
import ChristmasLights from './components/ChristmasLights';
import Decorations from './components/Decorations';
import MovingTree from './components/MovingTree';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center overflow-hidden">
      <BackgroundMusic />
      <ChristmasLights />
      <Snowfall />
      <Decorations />
      <MovingTree />
      
      <div className="relative text-center z-10">
        <StarTop />
        <ChristmasTree />
        <GreetingCard />
      </div>
      <Footer />
    </div>
  );
}

export default App;