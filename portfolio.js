
const translations = {
  fr: {
    navHome: "Accueil",
    navAbout: "À propos",
    navCreations: "Créations",
    navContact: "Contact",

    eyebrow: "BIENVENUE CHEZ ATELIER NORA",
    heroTitle: "L'art qui prend vie.",
    heroText: "Des créations artisanales, des objets personnalisés et un univers décoratif imaginé avec soin.",
    heroButton: "Découvrir nos créations",

    aboutEyebrow: "NOTRE UNIVERS",
    aboutTitle: "À propos d'ATELIER NORA",
    aboutText: "ATELIER NORA est un univers dédié à la créativité, à l'artisanat et à la personnalisation. Chaque idée est une occasion de créer quelque chose d'unique.",

    workEyebrow: "NOTRE SAVOIR-FAIRE",
    workTitle: "Nos univers créatifs",
    category1: "Créations artisanales",
    description1: "Des créations imaginées et réalisées avec soin.",
    category2: "Objets personnalisés",
    description2: "Des objets uniques qui reflètent votre personnalité.",
    category3: "Décoration & design",
    description3: "Des idées créatives pour embellir vos espaces.",

    contactEyebrow: "RESTONS EN CONTACT",
    contactTitle: "Une idée à concrétiser ?",
    contactText: "Contactez-nous pour échanger autour de votre projet.",
    contactButton: "Nous contacter",
    footerText: "L'art qui prend vie."
  },

  en: {
    navHome: "Home",
    navAbout: "About",
    navCreations: "Creations",
    navContact: "Contact",

    eyebrow: "WELCOME TO ATELIER NORA",
    heroTitle: "Art that comes to life.",
    heroText: "Handmade creations, personalized items and a decorative world thoughtfully designed.",
    heroButton: "Discover our creations",

    aboutEyebrow: "OUR WORLD",
    aboutTitle: "About ATELIER NORA",
    aboutText: "ATELIER NORA is a creative world dedicated to craftsmanship and personalization. Every idea is an opportunity to create something unique.",

    workEyebrow: "WHAT WE DO",
    workTitle: "Our creative worlds",
    category1: "Handmade creations",
    description1: "Thoughtfully imagined and carefully crafted creations.",
    category2: "Personalized items",
    description2: "Unique items that reflect your personality.",
    category3: "Decoration & design",
    description3: "Creative ideas to enhance your spaces.",

    contactEyebrow: "LET'S STAY IN TOUCH",
    contactTitle: "Have an idea to bring to life?",
    contactText: "Get in touch to discuss your project.",
    contactButton: "Contact us",
    footerText: "Art that comes to life."
  }
};

const languageSelect = document.getElementById("languageSelect");

function changeLanguage(language) {
  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;

    if (translations[language][key]) {
      element.textContent = translations[language][key];
    }
  });

  localStorage.setItem("atelierNoraLanguage", language);
}

const savedLanguage = localStorage.getItem("atelierNoraLanguage") || "fr";

languageSelect.value = savedLanguage;
changeLanguage(savedLanguage);

languageSelect.addEventListener("change", function () {
  changeLanguage(this.value);
});
