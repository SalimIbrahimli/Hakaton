// ============================
// 1) İstifadəçi adını göstər
// ============================
const user = JSON.parse(localStorage.getItem("travelxCurrentUser"));

if (user) {
  document.getElementById("welcomeName").textContent = user.name + "!";
} else {
  // login olmayıbsa göndər
  window.location.href = "./login.html";
}

// ============================
// 2) Orbit animasiya interaktivliyi
// ============================
document.addEventListener("DOMContentLoaded", () => {
  const orbit = document.querySelector(".welcome-orbit");
  const hero = document.querySelector(".welcome-hero");

  if (!orbit || !hero) return;

  // Hover zamanı glow effekti
  orbit.addEventListener("mouseenter", () => {
    orbit.classList.add("orbit-boost");
  });

  orbit.addEventListener("mouseleave", () => {
    orbit.classList.remove("orbit-boost");
  });

  // Mouse ilə parallax effekti
  hero.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    orbit.style.transform = `translate(${x * 12}px, ${y * 12}px) scale(1.03)`;
  });

  hero.addEventListener("mouseleave", () => {
    orbit.style.transform = "";
  });
});
