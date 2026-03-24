let age = prompt("Введіть ваш вік:");

if (age < 18) {
    alert("Вам заборонено вхід");
} else if (age >= 18 && age <= 65) {
    alert("Ласкаво просимо!");
} else {
    alert("Будь ласка, будьте обережні!");
}

let n = prompt("Введіть число n:");

for (let i = 2; i <= n; i += 2) {
    console.log(i);
}

let number = prompt("Введіть число для факторіалу:");

let factorial = 1;
let i = 1;

while (i <= number) {
    factorial = factorial * i;
    i++;
}

console.log("Факторіал = " + factorial);

let a = Number(prompt("Введіть перше число"));
let b = Number(prompt("Введіть друге число"));
let operation = prompt("Введіть операцію + - * /");

let result;

switch (operation) {
    case "+":
        result = a + b;
        break;
    case "-":
        result = a - b;
        break;
    case "*":
        result = a * b;
        break;
    case "/":
        result = a / b;
        break;
    default:
        result = "Помилка";
}

alert("Результат: " + result);

let randomNumber = Math.floor(Math.random() * 100) + 1;
let guess;

do {
    guess = prompt("Вгадай число від 1 до 100");

    if (guess < randomNumber) {
        alert("Загадане число більше");
    } else if (guess > randomNumber) {
        alert("Загадане число менше");
    } else {
        alert("Вітаємо! Ви вгадали число!");
    }

} while (guess != randomNumber);