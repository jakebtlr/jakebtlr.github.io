document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("theme-toggle-btn");
    const rootElement = document.documentElement;

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        rootElement.classList.add(savedTheme);
    }

    toggleBtn.addEventListener("click", () => {
        rootElement.classList.toggle("dark-mode");
        const currentTheme = rootElement.classList.contains("dark-mode") ? "dark-mode" : "";
        localStorage.setItem("theme", currentTheme);
    });
});
