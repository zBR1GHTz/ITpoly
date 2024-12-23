import React from 'react';

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-5xl font-bold text-center text-blue-600 mb-6">Welcome to Our IT Department</h1>
        <p className="text-center text-gray-700 leading-relaxed mb-8">
          Explore our programs, activities, and facilities designed to help you succeed in the field of Information Technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Programs</h2>
            <p className="text-gray-600">
              Discover a variety of courses and programs tailored to meet the needs of aspiring IT professionals.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Activities</h2>
            <p className="text-gray-600">
              Participate in engaging activities, workshops, and events to enhance your skills and network.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Facilities</h2>
            <p className="text-gray-600">
              Access state-of-the-art labs, libraries, and resources to support your learning journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;