import React from 'react';

function Courses() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold text-center text-blue-500 mb-6">Courses</h1>
        <p className="text-center text-gray-600 leading-relaxed mb-8">
          We offer a range of courses designed to prepare students for a successful career in Information Technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Vocational Certificate (ปวช.)</h2>
            <p className="text-gray-600">
              Gain foundational knowledge and skills to start your journey in IT.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Higher Vocational Certificate (ปวส.)</h2>
            <p className="text-gray-600">
              Develop advanced skills and expertise to excel in the IT industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
