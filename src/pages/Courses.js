import React from 'react';

function Courses() {
  return (
    <div className="container my-5">
      <h1>Courses</h1>
      <p>แสดงข้อมูลหลักสูตรที่เปิดสอนในสาขา (เช่น ปวช., ปวส.)</p>
      <ul>
        <li>ปวช. - ความรู้พื้นฐานทางเทคโนโลยี</li>
        <li>ปวส. - รายวิชาที่เน้นความเชี่ยวชาญเฉพาะด้าน</li>
      </ul>
    </div>
  );
}

export default Courses;
