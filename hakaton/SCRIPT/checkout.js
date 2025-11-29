document.addEventListener("DOMContentLoaded", () => {
  const data = localStorage.getItem("selectedTour");
  if (!data) return; // heç nə seçilməyibsə, boş qoy

  const tour = JSON.parse(data);

  // mətnləri doldur
  document.querySelector(".order-tour-title").textContent = tour.title;
  document.querySelector(".order-tour-location").textContent = tour.location;
  document.querySelector(".order-tour-date").textContent = tour.date;
  document.querySelector(".order-tour-days").textContent = tour.days;
  document.querySelector(".order-tour-group").textContent = tour.group;

  const priceText = tour.price.toFixed(0) + " ₼";
  document.querySelector(".order-price").textContent = priceText;
  document.querySelector(".order-total").textContent = priceText; // istəsən vergilər əlavə edərsən
});
