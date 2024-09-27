// import React from 'react';
// import { ArrowRight } from 'lucide-react';

// const AestheticsPage = () => (
//   <div className="relative min-h-screen flex items-center">
//     <img src="/car-exterior.jpg" alt="Car exterior" className="absolute inset-0 w-full h-full object-cover" />
//     <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 text-center">
//       <h2 className="text-4xl md:text-6xl font-bold mb-4">IMPROVE GENERAL AESTHETICS</h2>
//       <h3 className="text-xl md:text-2xl text-yellow-400 mb-8">APPEARENCE</h3>
//       <div className="bg-black bg-opacity-70 p-6 rounded-lg">
//         <h4 className="text-2xl md:text-3xl font-bold mb-4">EXTERIOR</h4>
//         <p className="mb-6">Customize the license plate frame, add decals and stickers, get custom wheels, install fog lights, get a new paint job, replace the headlights, tint the windows, or install window graphics.</p>
//         <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
//           <a href="#" className="text-yellow-400 hover:underline flex items-center">
//             View <ArrowRight className="ml-2" />
//           </a>
//           <button className="bg-transparent border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors">
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// export default AestheticsPage;


// AestheticsPage.js
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const AestheticsPage = () => {
  const [content, setContent] = useState(''); // State to update content based on button click

  return (
    <div className="relative min-h-screen flex items-center">
      <img src="/car-exterior.jpg" alt="Car exterior" className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">IMPROVE GENERAL AESTHETICS</h2>
        <h3 className="text-xl md:text-2xl text-yellow-400 mb-8">APPEARANCE</h3>
        <div className="bg-black bg-opacity-70 p-6 rounded-lg">
          <h4 className="text-2xl md:text-3xl font-bold mb-4">EXTERIOR</h4>
          <p className="mb-6">Customize the license plate frame, add decals and stickers, get custom wheels, install fog lights, get a new paint job, replace the headlights, tint the windows, or install window graphics.</p>
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <a href="#" className="text-yellow-400 hover:underline flex items-center">
              View <ArrowRight className="ml-2" />
            </a>
            <button 
              className="bg-transparent border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors"
              onClick={() => setContent(<img src="/software-interface.jpg" alt="Software Interface" className="w-full h-auto rounded-lg" />)}
            >
              Next
            </button>
          </div>
        </div>
        <div className="mt-8">
          {content && (
            <div className="p-4 bg-gray-800 text-white rounded-lg">
              {content}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AestheticsPage;
