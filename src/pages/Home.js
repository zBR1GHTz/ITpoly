import React from 'react'
import images1 from "/ITpoly/src/images/1.jpg";

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-5xl font-bold text-center text-blue-600 mb-6">
          ยินดีต้อนรับสู่แผนกเทคโนโลยีสารสนเทศ
        </h1>
        <p className="text-center text-gray-700 leading-relaxed mb-8">
          สำรวจหลักสูตร กิจกรรม และสิ่งอำนวยความสะดวกต่างๆ ที่ถูกออกแบบมาเพื่อช่วยให้คุณประสบความสำเร็จในสายงานเทคโนโลยีสารสนเทศ
        </p>

        {/* การเพิ่มรูปภาพในหน้า Home */}
        <div className="flex justify-center mb-10">
          <img
            src={images1} // ชื่อหรือ URL รูปภาพของคุณ
            alt="IT Department"
            className="rounded-lg shadow-lg w-2/3 md:w-1/2"
          />
        </div>

        {/* การ์ดข้อมูล */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">หลักสูตร</h2>
            <p className="text-gray-600">
              พบกับหลากหลายหลักสูตรที่ออกแบบมาเพื่อตอบสนองความต้องการของผู้ที่ใฝ่ฝันจะเป็นผู้เชี่ยวชาญด้านเทคโนโลยีสารสนเทศ
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">กิจกรรม</h2>
            <p className="text-gray-600">
              เข้าร่วมกิจกรรมเชิงสร้างสรรค์ เวิร์กช็อป และงานอีเวนต์เพื่อพัฒนาทักษะและสร้างเครือข่ายที่กว้างขึ้น
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">สิ่งอำนวยความสะดวก</h2>
            <p className="text-gray-600">
              เข้าถึงห้องปฏิบัติการที่ทันสมัย ห้องสมุด และทรัพยากรต่างๆ ที่ช่วยสนับสนุนการเรียนรู้ของคุณ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
