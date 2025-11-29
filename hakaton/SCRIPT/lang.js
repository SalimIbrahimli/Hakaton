// ===============================
//  AZ / EN / RU TRANSLATION SYS
// ===============================

const translations = {
  az: {
    nav_home: "Ana Səhifə",
    nav_map: "Xəritə",
    nav_faq: "FAQ",
    nav_about: "Haqqımızda",
    nav_contact: "Əlaqə",
    nav_prices: "Qiymətlər",
    nav_login: "Giriş",
    nav_profile: "Profil",
    nav_logout: "Çıxış",
    footer_rights: "© 2024 AZ Land. Bütün hüquqlar qorunur.",
  },
  en: {
    nav_home: "Home",
    nav_map: "Map",
    nav_faq: "FAQ",
    nav_about: "About Us",
    nav_contact: "Contact",
    nav_prices: "Prices",
    nav_login: "Login",
    nav_profile: "Profile",
    nav_logout: "Logout",
    footer_rights: "© 2024 AZ Land. All rights reserved.",
  },
  ru: {
    nav_home: "Главная",
    nav_map: "Карта",
    nav_faq: "FAQ",
    nav_about: "О нас",
    nav_contact: "Контакты",
    nav_prices: "Цены",
    nav_login: "Войти",
    nav_profile: "Профиль",
    nav_logout: "Выйти",
    footer_rights: "© 2024 AZ Land. Все права защищены.",
  },
};

let currentLang = "az";

function applyTranslations(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document
    .querySelectorAll("[data-i18n-placeholder]")
    .forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key]) {
        el.placeholder = dict[key];
      }
    });

  document.documentElement.setAttribute("lang", lang);
  localStorage.setItem("azland_lang", lang);
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  applyTranslations(lang);

  document
    .querySelectorAll(".lang-btn")
    .forEach((btn) => {
      btn.classList.toggle(
        "active",
        btn.getAttribute("data-lang") === lang
      );
    });
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("azland_lang") || "az";
  currentLang = savedLang;

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      setLanguage(lang);
    });
  });

  applyTranslations(currentLang);
});
