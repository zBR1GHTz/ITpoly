import React from 'react';

function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold text-center text-blue-500">Welcome to IT Department</h1>
        <p className="text-center text-gray-600 mt-4">
          แสดงข้อมูลทั่วไปของสาขา พร้อมภาพประกอบกิจกรรมและข้อความต้อนรับ
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src="https://via.placeholder.com/500"
              alt="กิจกรรม"
              className="rounded-lg shadow-md hover:shadow-xl transition duration-300"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">ปรัชญาของสาขา</h2>
            <p className="text-gray-600 mt-4">
              สร้างบุคลากรด้านเทคโนโลยีสารสนเทศให้มีคุณภาพและความรับผิดชอบต่อสังคม
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;