function findStudentIndex(students, searchStudent) {
  // Start coding here
  for (let i = 0; i < students.length; i++) {
    if (students[i] === searchStudent) {
      return i;
    }
  }
  return -1;
}

/* 
  1. ควรใช้ Search Algorithm ใดในการแก้โจทย์นี้ 
    -inear Search 
  2. ให้เหตุผลประกอบว่าทำไมถึงเลือกใช้ Search Algorithm นี้
    -เพราะข้อมูลใน Array ไม่ได้เรียงลำดับ 
  3. ให้ระบุว่า Big O Notation ของ Function นี้คือเท่าไร เพราะอะไร
    -O(n) จะต้องตรวจสอบทุกค่าใน Array จนกระทั่งถึงค่าสุดท้าย 
  *ใช็ chat ในการช่วยอธิบายคำตอบ

*/

const students = [
  "George",
  "Bobby",
  "Diana",
  "Hannah",
  "Andrew",
  "Jasmine",
  "Isaac",
  "John",
];

console.log(findStudentIndex(students, "John")); // 7
console.log(findStudentIndex(students, "Anna")); // -1
