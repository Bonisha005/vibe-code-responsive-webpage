const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute("data-theme");
    html.setAttribute("data-theme", currentTheme === "light" ? "dark" : "light");
});

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    loader.style.display = "none";
});
