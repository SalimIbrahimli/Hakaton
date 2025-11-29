const tooltip = document.getElementById("mapTooltip");
const tooltipCountry = tooltip.querySelector(".tooltip-country");
const tooltipPrice = tooltip.querySelector(".tooltip-price");

const cardCity = document.getElementById("cardCity");
const cardCountry = document.getElementById("cardCountry");
const cardPrice = document.getElementById("cardPrice");

document.querySelectorAll(".map-point").forEach((point) => {
  point.addEventListener("mouseenter", () => {
    const country = point.dataset.country;
    const price = point.dataset.price;

    tooltipCountry.textContent = country;
    tooltipPrice.textContent = price === "Ev Şəhər" ? price : `$${price}`;

    const rect = point.getBoundingClientRect();
    tooltip.style.left = rect.left + rect.width / 2 + "px";
    tooltip.style.top = rect.top - 12 + window.scrollY + "px";
    tooltip.style.opacity = 1;
    tooltip.style.transform = "translate(-50%, -20px)";
  });

  point.addEventListener("mousemove", () => {
    const rect = point.getBoundingClientRect();
    tooltip.style.left = rect.left + rect.width / 2 + "px";
    tooltip.style.top = rect.top - 12 + window.scrollY + "px";
  });

  point.addEventListener("mouseleave", () => {
    tooltip.style.opacity = 0;
  });

  // Kartı doldur
  point.addEventListener("click", () => {
    const city = point.dataset.city;
    const country = point.dataset.country;
    const price = point.dataset.price;

    cardCity.textContent = city;
    cardCountry.textContent = country;
    cardPrice.textContent = price === "Ev Şəhər" ? "Ev Şəhər" : `$${price}`;
  });
});
