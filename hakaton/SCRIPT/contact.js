const fileUpload = document.getElementById("fileUpload");
const fileInput = document.getElementById("fileInput");
const contactForm = document.getElementById("contactForm");

fileUpload.addEventListener("click", () => {
  fileInput.click();
});

fileInput.addEventListener("change", (e) => {
  if (e.target.files.length > 0) {
    const fileName = e.target.files[0].name;
    fileUpload.querySelector(".file-upload-text").textContent = "✓ " + fileName;
    fileUpload.style.borderColor = "rgba(100, 200, 100, 0.5)";
    fileUpload.style.background = "rgba(50, 150, 100, 0.1)";
  }
});

fileUpload.addEventListener("dragover", (e) => {
  e.preventDefault();
  fileUpload.style.borderColor = "rgba(100, 180, 255, 0.7)";
  fileUpload.style.background = "rgba(15, 35, 80, 0.7)";
});

fileUpload.addEventListener("dragleave", () => {
  fileUpload.style.borderColor = "rgba(100, 150, 255, 0.3)";
  fileUpload.style.background = "rgba(15, 35, 80, 0.3)";
});

fileUpload.addEventListener("drop", (e) => {
  e.preventDefault();
  fileInput.files = e.dataTransfer.files;
  if (e.dataTransfer.files.length > 0) {
    const fileName = e.dataTransfer.files[0].name;
    fileUpload.querySelector(".file-upload-text").textContent = "✓ " + fileName;
    fileUpload.style.borderColor = "rgba(100, 200, 100, 0.5)";
    fileUpload.style.background = "rgba(50, 150, 100, 0.1)";
  }
});

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const btn = contactForm.querySelector(".submit-btn");
  btn.textContent = "✓ Göndərildi!";
  btn.style.background = "linear-gradient(135deg, #10b981, #059669)";

  setTimeout(() => {
    btn.innerHTML =
      '<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Göndər';
    btn.style.background = "linear-gradient(135deg, #2563eb, #1d4ed8)";
    contactForm.reset();
    fileUpload.querySelector(".file-upload-text").textContent =
      "Şəkil yükləyin və ya bura sürün";
    fileUpload.style.borderColor = "rgba(100, 150, 255, 0.3)";
    fileUpload.style.background = "rgba(15, 35, 80, 0.3)";
  }, 2000);
});
