// src/components/CollegeList.jsx
import React from 'react';

const CollegeList = ({ colleges, loading }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-600"></div>
      </div>
    );
  }

  if (colleges.length === 0) {
    return (
      <div className="text-center text-gray-500 py-12">
        No colleges found for the selected criteria.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
      {colleges.map((college) => (
        <div
          key={college.id || `${college.name}-${college.rankRange}`}
          className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
        >
          <h2 className="text-lg font-semibold text-blue-800">{college.name}</h2>
          <p className="text-sm text-gray-600">{college.location}</p>
          <p className="text-sm mt-1">Rank Range: {college.rankRange}</p>
        </div>
      ))}
    </div>
  );
};

export default CollegeList;
