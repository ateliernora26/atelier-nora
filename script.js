/*
  ATELIER NORA — CONFIGURATION DES LIENS
  Remplace les valeurs entre guillemets ci-dessous par tes vrais liens.
  Exemple WhatsApp : https://wa.me/229XXXXXXXX
*/

const socialLinks = {
  whatsapp: "",   // Exemple : https://wa.me/229XXXXXXXX
  tiktok: "https://www.tiktok.com/@atelier.nora0?_r=1&_t=ZS-9B4RtNknaFg",
  facebook: "",   // Exemple : https://www.facebook.com/ta-page
  instagram: ""   // Exemple : https://www.instagram.com/ton-compte/
};

document.querySelectorAll("[data-platform]").forEach((link) => {
  const platform = link.dataset.platform;
  const destination = socialLinks[platform];

  if (destination && destination.trim() !== "") {
    link.href = destination;
  } else {
    link.href = "#";
    link.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Le lien " + platform + " n'a pas encore été ajouté. Modifie-le dans le fichier script.js.");
    });
  }
});
