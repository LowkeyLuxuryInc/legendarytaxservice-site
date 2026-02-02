import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './styles/global.css';

const App = () => {
  useEffect(() => {
    gsap.to('.gold-dust', {
      x: 'random(200, 400)',
      y: 'random(100, 300)',
      duration: 1,
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div className="App bg-black text-white">
      <div className="gold-dust">✨</div>
      <header>
        <h1 className="text-gold text-5xl font-bold">The Gold Standard in Tax Services</h1>
        <button className="bg-gold text-black py-2 px-4 mt-4">Get Started</button>
      </header>
      <main>
        {/* Other sections */}
      </main>
    </div>
  );
};

export default App;
