import React from 'react';

const Card = ({ title, value, description }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 m-4 w-64 hover:scale-105 transition-transform">
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <p className="text-2xl font-bold my-2">{value}</p>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  );
};

export default Card;
