let integerNumber = 10;
let floatNumber = 5.5;
let text = "Hello";
let isActive = true;

console.log(integerNumber, typeof integerNumber);
console.log(floatNumber, typeof floatNumber);
console.log(text, typeof text);
console.log(isActive, typeof isActive);

integerNumber = 20;
floatNumber = 3.14;
text = "JavaScript";
isActive = false;

console.log(integerNumber, typeof integerNumber);
console.log(floatNumber, typeof floatNumber);
console.log(text, typeof text);
console.log(isActive, typeof isActive);

let concat = integerNumber + text;
console.log("Конкатенація:", concat);

let boolToNumber = Number(isActive);
console.log("Boolean -> Number:", boolToNumber);

let a = 12;
let b = 7;
let c = 5;

let average = (a + b + c) / 3;
console.log("Середнє арифметичне:", average);

console.log("Модуль числа:", Math.abs(-a));

console.log("Округлення вверх:", Math.ceil(average));
console.log("Округлення вниз:", Math.floor(average));

console.log("a у степені 2:", Math.pow(a, 2));

console.log("Ділиться на 5:", average % 5 === 0);
console.log("Ділиться на 7:", average % 7 === 0);

if (a + b > c && a + c > b && b + c > a) {
    console.log("Трикутник існує");
} else {
    console.log("Трикутник не існує");
}

let x = 8;
let y = 3;
let z = 12;

let max = Math.max(x, y, z);
let min = Math.min(x, y, z);

console.log("Найбільше число:", max);
console.log("Найменше число:", min);

let hasEven = (x % 2 === 0) || (y % 2 === 0) || (z % 2 === 0);
console.log("Є парне число:", hasEven);

let condition = (x > y) && (y < z);
console.log("Умова:", condition);

let number = 7;
let isPrime = true;

for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        isPrime = false;
    }
}

console.log(number + " просте число:", isPrime);


let name = "Тфнф";
let birthYear = 2008;
let city = "Kyiv";

let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;

console.log("Ім'я:", name);
console.log("Вік:", age);
console.log("Місто:", city);

if (age < 12) {
    console.log("Дитина");
} else if (age < 18) {
    console.log("Підліток");
} else if (age < 60) {
    console.log("Дорослий");
} else {
    console.log("Літня людина");
}

let capital = "Kyiv";

if (city === capital) {
    console.log("Користувач живе у столиці");
} else {
    console.log("Користувач живе не у столиці");
}

let user = {
    name: name,
    age: age,
    city: city,
    student: true
};

console.log("JSON:", JSON.stringify(user));