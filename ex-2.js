function findBookIndex(books, searchBook) {
  // Start coding here
  for (let i = 0; i < books.length; i++) {
    if (books[i]["title"] === searchBook) {
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

const books = [
  { title: "A Tale of Two Cities", author: "Charles Dickens" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Catch-22", author: "Joseph Heller" },
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ender's Game", author: "Orson Scott Card" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
  { title: "Gone with the Wind", author: "Margaret Mitchell" },
  { title: "Harry Potter", author: "J.K. Rowling" },
];

console.log(findBookIndex(books, "Catch-22")); // 2
console.log(findBookIndex(books, "The Master Mind")); // -1
