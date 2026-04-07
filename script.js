const input = document.getElementById("textInput");
const addBtn = document.getElementById("addBtn");
const sortBtn = document.getElementById("sortBtn");
const list = document.getElementById("list");

addBtn.addEventListener("click", function () {
    const text = input.value.trim();

    if (text === "") {
        alert("Введіть текст");
        return;
    }

    const li = document.createElement("li");
    li.textContent = text;

    li.addEventListener("click", function () {
        li.remove();
    });

    list.appendChild(li);
    input.value = "";
});

sortBtn.addEventListener("click", function () {
    const items = Array.from(list.children);

    items.sort();

    list.innerHTML = "";

    items.forEach(item => list.appendChild(item));
});