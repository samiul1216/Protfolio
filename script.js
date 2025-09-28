// Theme toggle
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});
// ===== Skills highlight on click =====
document.querySelectorAll(".skills-list li").forEach(skill => {
  skill.addEventListener("click", () => {
    skill.classList.toggle("active");
  });
});


// Auto update year
document.getElementById("year").textContent = new Date().getFullYear();

// Project cards toggle: stack <-> spread
const projectsContainer = document.querySelector(".projects");
if (projectsContainer) {
  projectsContainer.addEventListener("click", () => {
    projectsContainer.classList.toggle("spread");
  });
}
