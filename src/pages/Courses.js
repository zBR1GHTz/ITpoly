import React from 'react';

function Courses() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-5xl font-bold text-center text-blue-600 mb-6">หลักสูตร</h1>
        <p className="text-center text-gray-700 leading-relaxed mb-8">
          เรานำเสนอหลักสูตรที่ครอบคลุมและทันสมัยในระดับ ปวช. และ ปวส. เพื่อพัฒนาความเชี่ยวชาญของนักศึกษาในสายอาชีพที่เลือก
        </p>

        {/* การ์ดหลักสูตร */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* หลักสูตร ปวช. */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">หลักสูตร ปวช.</h2>
            <p className="text-gray-600 leading-relaxed">
              หลักสูตร ปวช. ของเรามุ่งเน้นการพัฒนาทักษะพื้นฐานและความเข้าใจในเทคโนโลยีสารสนเทศ เพื่อเตรียมความพร้อมสู่สายอาชีพ
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600 space-y-2">
              <li>วิชาพื้นฐานเทคโนโลยีสารสนเทศ</li>
              <li>การเขียนโปรแกรมเบื้องต้น</li>
              <li>การวิเคราะห์ระบบคอมพิวเตอร์</li>
            </ul>
          </div>

          {/* หลักสูตร ปวส. */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">หลักสูตร ปวส.</h2>
            <p className="text-gray-600 leading-relaxed">
              หลักสูตร ปวส. ออกแบบมาเพื่อพัฒนาทักษะระดับสูงในด้านเทคโนโลยีสารสนเทศ พร้อมสำหรับการทำงานในสายอาชีพ
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600 space-y-2">
              <li>การพัฒนาเว็บแอปพลิเคชัน</li>
              <li>การบริหารจัดการเครือข่าย</li>
              <li>การออกแบบฐานข้อมูล</li>
            </ul>
          </div>
        </div>

        {/* การแสดง PDF */}
        <div className="bg-white shadow-md rounded-lg p-6 mt-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">ไฟล์ PDF หลักสูตร</h2>
          <div className="text-center">
            {/* ใช้ embed สำหรับแสดง PDF */}
            <embed
              src="example.pdf" // ระบุ URL ไฟล์ PDF ของคุณที่นี่
              type="application/pdf"
              className="w-full h-96"
            />
          </div>
          <div className="mt-4 text-center">
            <a
              href="example.pdf" // ลิงก์ไปยังไฟล์ PDF
              download
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              ดาวน์โหลดไฟล์ PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
