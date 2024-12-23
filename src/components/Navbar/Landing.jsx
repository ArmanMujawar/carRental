import React from 'react';

const Landing = () => {
  return (
    <div className="shadow- relative w-full h-screen overflow-hidden shadow-slate-600">
      <img
        src="land2.jpg"
        alt="Landing Background"
        className="absolute w-full h-full object-cover shadow-lg"
      />

      
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to <span className="text-yellow-300">ArmanCar Rentals</span>
          </h1>
          <p className="text-lg mb-6">
            Your trusted partner for premium car rentals. Explore, drive, and enjoy!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
