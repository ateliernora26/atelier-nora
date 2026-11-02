/*
  ATELIER NORA — CONFIGURATION DES LIENS
  Remplace les valeurs entre guillemets ci-dessous par tes vrais liens.
  Exemple WhatsApp : https://wa.me/229XXXXXXXX
*/


document.addEventListener("DOMContentLoaded", function () {

  const socialLinks = {
    whatsapp: "https://wa.me/message/+22948757347",
    tiktok: "https://www.tiktok.com/@atelier.nora0?_r=1&_t=ZS-9B4RtNknaFg",
    facebook: "",
    instagram: ""
  };

  document.querySelectorAll("[data-platform]").forEach(function (link) {
    const platform = link.dataset.platform;
    const destination = socialLinks[platform];

    if (destination && destination.trim() !== "") {
      link.href = destination;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    } else {
      link.href = "#";

      link.addEventListener("click", function (event) {
        event.preventDefault();
        alert("Le lien " + platform + " n'a pas encore été ajouté.");
      });
    }
  });

});
