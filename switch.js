document.addEventListener("DOMContentLoaded", function () {
  // Get theme toggle checkbox
  const themeToggle = document.getElementById("checkbox");

  // Get saved theme or use default
  const currentTheme = localStorage.getItem("theme") || "dark";

  // Apply theme
  document.documentElement.setAttribute("data-theme", currentTheme);

  // Set checkbox state
  themeToggle.checked = currentTheme === "light";

  // Toggle theme on change
  themeToggle.addEventListener("change", function () {
    if (this.checked) {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  });
});
