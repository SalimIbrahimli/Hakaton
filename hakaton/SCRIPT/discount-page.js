// Kupon copy (sadə demo)
document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const code = btn
      .closest(".coupon-card")
      .querySelector(".coupon-code").textContent;
    navigator.clipboard.writeText(code).catch(() => {});
    btn.classList.add("copied");
    setTimeout(() => btn.classList.remove("copied"), 800);
  });
});
