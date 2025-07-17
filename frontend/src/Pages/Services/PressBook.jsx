import React from 'react';

const PressBook = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-[#daa520]">Press & Media</h1>
      <p className="text-gray-700 mb-6">Discover how Aman Estate has been featured in the press and media outlets.</p>
      <ul className="space-y-3">
        <li className="bg-white p-4 rounded-md shadow">📰 Featured in Times Property - "Top Realty Brand 2025"</li>
        <li className="bg-white p-4 rounded-md shadow">📺 NDTV Interview: Market Trends & Expert Tips</li>
        <li className="bg-white p-4 rounded-md shadow">🏆 Realty Plus Award: Best Digital Campaign 2024</li>
      </ul>
    </div>
  );
};

export default PressBook;
