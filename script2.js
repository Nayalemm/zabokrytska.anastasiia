const text = document.getElementById("text");

document.getElementById("colorBtn").addEventListener("click", function () {
    text.style.color = "blue";
});

document.getElementById("fontBtn").addEventListener("click", function () {
    text.style.fontSize = "24px";
});

document.getElementById("bgBtn").addEventListener("click", function () {
    text.style.backgroundColor = "yellow";
});

document.getElementById("hideBtn").addEventListener("click", function () {
    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
});

document.getElementById("resetBtn").addEventListener("click", function () {
    text.style.color = "";
    text.style.fontSize = "";
    text.style.backgroundColor = "";
    text.style.display = "block";
});