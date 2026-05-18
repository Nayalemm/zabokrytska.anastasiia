const form = document.getElementById("feedbackForm");
const result = document.getElementById("result");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!emailPattern.test(email)) {
        result.textContent = "Невірний email";
        result.style.color = "red";
        return;
    }

    if (message.length < 20) {
        result.textContent = "Повідомлення має містити мінімум 20 символів";
        result.style.color = "red";
        return;
    }

    result.textContent = `Дякуємо, ${name}! Повідомлення успішно надіслано.`;
    result.style.color = "green";

    form.reset();
});