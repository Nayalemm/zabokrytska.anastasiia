console.log("=== Варіант 1 ===");
const numbers = [5, 12, 7, 20, 3, 15];
const average = numbers.reduce((a, b) => a + b, 0) / numbers.length;
const max = Math.max(...numbers);
const min = Math.min(...numbers);
const sorted = [...numbers].sort((a, b) => a - b);
console.log("Середнє:", average);
console.log("Максимум:", max);
console.log("Мінімум:", min);
console.log("Відсортований масив:", sorted);

console.log("\n=== Варіант 2 ===");
const users = [
  { name: "Anna", age: 22 },
  { name: "Oleg", age: 17 },
  { name: "Ira", age: 25 },
  { name: "Max", age: 16 }
];
const adults = users.filter(user => user.age > 18);
const names = adults.map(user => user.name);
const avgAge = adults.reduce((sum, user) => sum + user.age, 0) / adults.length;
console.log("Користувачі старше 18:", adults);
console.log("Імена:", names);
console.log("Середній вік:", avgAge);

console.log("\n=== Варіант 3 ===");
const products = [
  { name: "Apple", category: "Fruits" },
  { name: "Banana", category: "Fruits" },
  { name: "Carrot", category: "Vegetables" },
  { name: "Broccoli", category: "Vegetables" }
];
const grouped = products.reduce((acc, product) => {
  if (!acc[product.category]) acc[product.category] = [];
  acc[product.category].push(product.name);
  return acc;
}, {});
console.log("Товари за категоріями:");
for (let category in grouped) {
  console.log(category + ":", grouped[category].join(", "));
}

console.log("\n=== Варіант 4 ===");
const students = {
  Anna: { Math: 90, English: 85, Science: 92 },
  Oleg: { Math: 75, English: 80, Science: 70 },
  Ira: { Math: 88, English: 90, Science: 85 }
};
for (let student in students) {
  const grades = Object.values(students[student]);
  const avg = grades.reduce((a, b) => a + b, 0) / grades.length;
  console.log(`${student}: середній бал ${avg.toFixed(2)}`);
}

console.log("\n=== Варіант 5 ===");
const namesArray = ["Anna", "Oleg", "Ira", "Max"];
const namesObj = namesArray.reduce((acc, name) => {
  acc[name] = name.length;
  return acc;
}, {});
console.log(namesObj);