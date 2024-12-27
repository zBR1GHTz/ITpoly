import React from 'react';

function AboutUs() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-gray-50 min-h-screen">
      <div className="container mx-auto py-12 px-6">
        <h1 className="text-5xl font-extrabold text-center text-blue-600 mb-8">เกี่ยวกับเรา</h1>
        <p className="text-center text-gray-700 leading-relaxed text-lg mb-10 max-w-3xl mx-auto">
          ยินดีต้อนรับสู่วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนาเชียงใหม่ สถาบันที่มุ่งมั่นสร้างบุคลากรที่มีคุณภาพและความเชี่ยวชาญด้านเทคโนโลยีเพื่อรองรับความต้องการของสังคมและอุตสาหกรรม
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">เป้าหมายของเรา</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              เรามุ่งมั่นที่จะเป็นสถาบันชั้นนำในด้านการศึกษาด้านเทคโนโลยีที่มอบความรู้ ทักษะ และประสบการณ์เพื่อสร้างนักศึกษาที่พร้อมสู่ตลาดแรงงานระดับชาติและสากล
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">วิสัยทัศน์ของสาขา</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              สาขาของเรามีเป้าหมายที่จะสร้างผู้เชี่ยวชาญที่มีความสามารถในการคิดวิเคราะห์ สร้างนวัตกรรม และปรับตัวต่อการเปลี่ยนแปลงของเทคโนโลยีในยุคดิจิทัล
            </p>
          </div>
        </div>

        <div className="mt-12 p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">ทำไมถึงเลือกเรา?</h2>
          <ul className="list-disc list-inside text-gray-600 leading-relaxed text-lg space-y-4">
            <li>หลักสูตรที่ครอบคลุมและทันสมัย</li>
            <li>คณาจารย์ที่มีประสบการณ์และความเชี่ยวชาญในอุตสาหกรรม</li>
            <li>สิ่งอำนวยความสะดวกและทรัพยากรที่ทันสมัย</li>
            <li>ความร่วมมือที่แข็งแกร่งกับอุตสาหกรรมและโอกาสฝึกงาน</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
