import React from "react";

export default function SearchBar() {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col md:flex-row items-center justify-center bg-white p-6 rounded-xl shadow-xl max-w-5xl w-[90%] space-y-4 md:space-y-0 md:space-x-4">
      <input
        type="text"
        placeholder="Enter Keyword"
        className="border border-gray-300 focus:border-[#daa520] focus:ring-[#daa520] focus:ring-1 p-3 flex-1 rounded-md w-full transition"
      />
      <select className="border border-gray-300 focus:border-[#daa520] focus:ring-[#daa520] focus:ring-1 p-3 rounded-md w-full md:w-auto transition">
        <option>All Status</option>
        <option>For Sale</option>
        <option>For Rent</option>
      </select>
      <select className="border border-gray-300 focus:border-[#daa520] focus:ring-[#daa520] focus:ring-1 p-3 rounded-md w-full md:w-auto transition">
        <option>All Type</option>
        <option>Villa</option>
        <option>Apartment</option>
        <option>Office</option>
      </select>
      <button className="bg-[#daa520] hover:bg-[#b58e20] text-black font-medium px-6 py-3 rounded-md w-full md:w-auto transition">
        Search
      </button>
    </div>
  );
}
