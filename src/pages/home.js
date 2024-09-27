import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const HomePage = () => {
  const [content, setContent] = useState(''); // State to update content based on button click

  return (
    <div className="relative min-h-screen flex items-center">
      <img src="/car-detailing.jpg" alt="Car detailing" className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">One-Stop Solution For All</h2>
        <h3 className="text-5xl md:text-7xl font-bold mb-8">AUTOMOBILE</h3>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Automobile Detailing service thoroughly cleans, restores, and protects all parts of a vehicle, inside and out, to enhance its appearance and extend its lifespan.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button 
            onClick={() => setContent('We provide top-notch automobile detailing services that focus on both exterior and interior detailing. Our services enhance the aesthetics and longevity of your vehicle.')}
            className="bg-yellow-400 text-black px-6 py-3 rounded font-bold flex items-center justify-center hover:bg-yellow-300 transition-colors"
          >
            WHAT WE DO <ArrowRight className="ml-2" />
          </button>
          <button 
            onClick={() => setContent(<img src="/car-exterior.jpg" alt="Car exterior view" className="w-full h-auto rounded-lg" />)}
            className="bg-transparent border border-white px-6 py-3 rounded font-bold hover:bg-white hover:text-black transition-colors"
          >
            VIEW WORKS
          </button>
        </div>
        <div className="mt-8">
          {content && (
            <div className="p-4 bg-gray-800 text-white rounded-lg">
              {typeof content === 'string' ? <p>{content}</p> : content}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
