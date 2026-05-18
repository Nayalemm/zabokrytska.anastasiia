const form = document.getElementById("surveyForm");
const output = document.getElementById("output");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const age = parseInt(document.getElementById("age").value);
    const about = document.getElementById("about").value.trim();

    const gender = document.querySelector('input[name="gender"]:checked');

    const hobbies = [];
    document.querySelectorAll(".hobby:checked").forEach(item => {
        hobbies.push(item.value);
    });

    if (isNaN(age) || age < 10 || age > 100) {
        output.innerHTML = "<p style='color:red;'>Вік має бути від 10 до 100</p>";
        return;
    }

    function safeText(text) {
        return text
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    }

    output.innerHTML = `
        <h3>Дані користувача:</h3>
        <p><strong>Ім’я:</strong> ${safeText(name)}</p>
        <p><strong>Вік:</strong> ${age}</p>
        <p><strong>Стать:</strong> ${gender ? gender.value : "Не вибрано"}</p>
        <p><strong>Хобі:</strong> ${hobbies.join(", ")}</p>
        <p><strong>Опис:</strong> ${safeText(about)}</p>
    `;
});