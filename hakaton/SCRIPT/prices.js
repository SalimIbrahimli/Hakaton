// SCRIPT/prices.js

document.addEventListener("DOMContentLoaded", () => {
  const ctaButtons = document.querySelectorAll(".route-cta");

  ctaButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      const card = btn.closest(".route-card");
      if (!card) return;

      const title = card.querySelector(".route-title").textContent.trim();
      const location = card.querySelector(".system-pill").textContent.trim();
      const date = card
        .querySelector(".route-meta li:nth-child(1) span")
        .textContent.trim();
      const group = card
        .querySelector(".route-meta li:nth-child(2) span")
        .textContent.trim();
      const days = card
        .querySelector(".route-stats-row .stat-chip:nth-child(1) .value")
        .textContent.trim();

      const priceText = card
        .querySelector(".route-price .price")
        .textContent.trim(); // "180 ₼"
      const price = parseInt(priceText, 10); // 180

      const selectedTour = {
        title,
        location,
        date,
        days,
        group,
        price,
      };

      localStorage.setItem("selectedTour", JSON.stringify(selectedTour));

      // price.html ilə eyni qovluqda olan checkout səhifəsi
      window.location.href = "./checkout.html";
    });
  });
});
