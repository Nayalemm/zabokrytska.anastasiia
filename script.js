document.addEventListener("DOMContentLoaded", function () {
    const themeSelect = document.getElementById("themeSelect");
    const bgColor = document.getElementById("bgColor");
    const saveColor = document.getElementById("saveColor");

    let savedTheme = localStorage.getItem("theme");
    let savedColor = localStorage.getItem("bgColor");

    if (savedTheme) {
        document.body.className = savedTheme;
        themeSelect.value = savedTheme;
    }

    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
        bgColor.value = savedColor;
    }

    themeSelect.addEventListener("change", function () {
        let theme = themeSelect.value;
        document.body.className = theme;
        localStorage.setItem("theme", theme);
    });

    saveColor.addEventListener("click", function () {
        let color = bgColor.value;

        if (color) {
            document.body.style.backgroundColor = color;
            localStorage.setItem("bgColor", color);
        }
    });
});