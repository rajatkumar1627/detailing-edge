import React from 'react';

const SoftwarePage = () => (
  <div className="relative min-h-screen flex items-center bg-gray-900">
    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:block">
      <img src="/software-interface.jpg" alt="Software interface" className="max-w-xl" />
    </div>
    <div className="relative z-10 max-w-2xl mx-auto px-4 py-12 lg:ml-20">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">PRECUT X</h2>
      <h3 className="text-5xl md:text-6xl font-bold text-yellow-400 mb-8">SOFTWARE</h3>
      <h4 className="text-xl md:text-2xl font-bold mb-4">Extensive, Exact & Editable</h4>
      <p className="mb-8">
        Our precut x software will cut your paint protection installation time, eliminate the risk factor of hand-cutting films during bulk installations and give you precisely cut film that will fit every edge and corner of the vehicle. Choose from our 80,000+ distinct patterns for one that will fit from bumper to bumper.
      </p>
      <div className="h-1 w-20 bg-yellow-400 mb-8"></div>
    </div>
  </div>
);

export default SoftwarePage;