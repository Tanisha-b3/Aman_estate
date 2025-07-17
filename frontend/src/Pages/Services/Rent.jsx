import React from 'react';

const Rent = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-[#daa520]">Rent Properties by Location</h1>
      <p className="text-gray-700 mb-6">Explore rental listings based on popular cities or areas.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {['Delhi', 'Mumbai', 'Bangalore', 'Pune', 'Hyderabad', 'Chennai'].map((city) => (
          <div key={city} className="bg-white shadow-md p-6 rounded-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">{city}</h2>
            <p className="text-sm text-gray-600 mt-2">Explore 50+ properties in {city}.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rent;
