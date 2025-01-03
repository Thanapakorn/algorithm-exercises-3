function sortByRating(shops) {
  // Start coding here
  return shops.sort((a, b) => b.rating - a.rating);
}

/* 
  1. ควรใช้ Algorithm ใดในการแก้โจทย์นี้ 
  - Sorting Algorithm
  2. ให้เหตุผลประกอบว่าทำไมถึงเลือกใช้ Algorithm นี้
  -เพราะมันเป็นฟังก์ชันในตัวที่มีประสิทธิภาพสูงสำหรับการจัดเรียงข้อมูลใน JavaScrip
  3. ให้ระบุว่า Big O Notation ของ Function นี้คือเท่าไร เพราะอะไร
  -O(n log n) มีประสิทธิภาพในการจัดเรียงข้อมูลที่มีลำดับบางอย่างอยู่แล้ว (เช่นเมื่อข้อมูลเกือบเรียงแล้ว)
  *ใช็ chat ในการช่วยอธิบายคำตอบ
*/

const shops = [
  {
    shopTitle: "ร้านอาหารส้มตำแซ่บ",
    rating: 4.5,
  },
  {
    shopTitle: "ร้านขนมไทยแม่จันทร์",
    rating: 4.8,
  },
  {
    shopTitle: "ร้านกาแฟหอมกรุ่น",
    rating: 4.2,
  },
  {
    shopTitle: "ร้านเบเกอรี่บ้านอบอุ่น",
    rating: 4.9,
  },
  {
    shopTitle: "ร้านก๋วยเตี๋ยวลูกชิ้นปลาเจ้าดัง",
    rating: 4.6,
  },
];

console.log(sortByRating(shops));
/*
[
  { shopTitle: 'ร้านเบเกอรี่บ้านอบอุ่น', rating: 4.9 },
  { shopTitle: 'ร้านขนมไทยแม่จันทร์', rating: 4.8 },
  { shopTitle: 'ร้านก๋วยเตี๋ยวลูกชิ้นปลาเจ้าดัง', rating: 4.6 },
  { shopTitle: 'ร้านอาหารส้มตำแซ่บ', rating: 4.5 },
  { shopTitle: 'ร้านกาแฟหอมกรุ่น', rating: 4.2 }
]
*/
