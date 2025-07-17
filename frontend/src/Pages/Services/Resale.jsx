import React from 'react';

const Resale = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-[#daa520]">Resale Properties</h1>
      <p className="text-gray-700 mb-6">Find pre-owned homes at affordable prices across locations.</p>
      <ul className="space-y-4">
        <li className="bg-white p-4 rounded-md shadow">2 BHK in Noida - ₹45 Lakhs</li>
        <li className="bg-white p-4 rounded-md shadow">3 BHK in Gurgaon - ₹75 Lakhs</li>
        <li className="bg-white p-4 rounded-md shadow">4 BHK Villa in Hyderabad - ₹1.2 Cr</li>
      </ul>
    </div>
  );
};

export default Resale;
