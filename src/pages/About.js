import React from 'react';

function AboutUs() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold text-center text-blue-500 mb-6">About Us</h1>
        <p className="text-center text-gray-600 leading-relaxed mb-8">
          Welcome to the IT Department at วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนาเชียงใหม่. Our mission is to produce skilled professionals with technological expertise and social responsibility.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              We strive to be a leading department in Information Technology, focusing on innovation, practical skills, and global competitiveness.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To develop IT professionals with the ability to adapt to industry trends and a commitment to contributing positively to society.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-gray-600 leading-relaxed">
            <li>Comprehensive and up-to-date curriculum.</li>
            <li>Experienced faculty with industry expertise.</li>
            <li>State-of-the-art facilities and resources.</li>
            <li>Strong industry partnerships and internship opportunities.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;