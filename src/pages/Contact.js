import React from 'react';

function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold text-center text-blue-500 mb-6">ติดต่อเรา</h1>
        <p className="text-center text-gray-600 leading-relaxed mb-8">
          หากมีคำถามหรือข้อสงสัย สามารถติดต่อเราได้ผ่านแบบฟอร์มด้านล่าง
        </p>

        <div className="bg-white shadow-md rounded-lg p-6">
          <form className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="name" className="block text-gray-800 font-semibold">ชื่อ</label>
              <input type="text" id="name" className="w-full border border-gray-300 rounded-md p-2" placeholder="ชื่อของคุณ" />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-800 font-semibold">อีเมล</label>
              <input type="email" id="email" className="w-full border border-gray-300 rounded-md p-2" placeholder="อีเมลของคุณ" />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-800 font-semibold">ข้อความ</label>
              <textarea id="message" className="w-full border border-gray-300 rounded-md p-2" rows="4" placeholder="พิมพ์ข้อความของคุณ"></textarea>
            </div>
            <div>
              <button className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600">ส่งข้อความ</button>
            </div>
          </form>
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600">เบอร์โทรศัพท์: 123-456-7890</p>
          <p className="text-gray-600">อีเมล: info@itdepartment.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
