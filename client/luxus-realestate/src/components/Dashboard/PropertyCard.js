import React from 'react';

const PropertyCard = ({ size, price }) => {
  return (
    <div className="bg-white shadow-md rounded overflow-hidden">
      <img
        src="https://via.placeholder.com/300"
        alt="Property"
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{size} Sqft</h3>
        <p className="text-gray-600">{price}</p>
        <div className="flex justify-between items-center mt-4">
          <button className="bg-pink-500 p-2 rounded text-white">❤</button>
          <button className="bg-blue-500 p-2 rounded text-white">🔁</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
