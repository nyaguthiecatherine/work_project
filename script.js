// script.js

// Toggle dark mode
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
};

// Show a confirmation when clicking on contact links
document.addEventListener("DOMContentLoaded", () => {
    const contactLinks = document.querySelectorAll(".contacts a");

    contactLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const type = link.href.startsWith("mailto:") ? "email" : "phone";
            const message = `Are you sure you want to open your ${type} app?`;

            if (!confirm(message)) {
                e.preventDefault(); // stop if user clicks cancel
            }
        });
    });

    // Optional: Add button to toggle dark mode
    const darkModeBtn = document.createElement("button");
    darkModeBtn.textContent = "Toggle Dark Mode";
    darkModeBtn.style.marginTop = "20px";
    darkModeBtn.onclick = toggleDarkMode;

    document.querySelector(".sidebar").appendChild(darkModeBtn);
});
