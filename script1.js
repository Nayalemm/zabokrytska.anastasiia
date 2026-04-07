const usersList = document.getElementById("users");

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        if (!response.ok) {
            throw new Error("Помилка");
        }
        return response.json();
    })
    .then(users => {
        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = `Ім'я: ${user.name}, Email: ${user.email}`;
            usersList.appendChild(li);
        });
    })
    .catch(() => {
        usersList.textContent = "Помилка завантаження";
    });