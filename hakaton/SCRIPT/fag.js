// FAQ ACCORDION
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const questionBtn = item.querySelector(".faq-question");

    questionBtn.addEventListener("click", () => {
      // Əgər hamısı bağlı olsun istəyirsənsə – əvvəl başqalarından active-ni sil
      faqItems.forEach((other) => {
        if (other !== item) {
          other.classList.remove("active");
        }
      });

      // Kliklənən item-i aç / bağla
      item.classList.toggle("active");
    });
  });
});
