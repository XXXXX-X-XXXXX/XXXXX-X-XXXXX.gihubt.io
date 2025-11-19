// Menu burger pour mobile
const burger = document.getElementById("burger");
const nav = document.querySelector(".nav");

if (burger && nav) {
    burger.addEventListener("click", () => {
        nav.classList.toggle("open");
    });

    // Fermer le menu quand on clique sur un lien
    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("open");
        });
    });
}

// Formulaire de contact (démo côté front uniquement)
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm && formStatus) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Ici tu pourrais plus tard envoyer vers un service (Formspree, backend perso, etc.)
        formStatus.textContent = "Merci pour votre message ! (démonstration, pas encore relié à un backend)";
        contactForm.reset();

        setTimeout(() => {
            formStatus.textContent = "";
        }, 4000);
    });
}
