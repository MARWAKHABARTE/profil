document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let formMessage = document.getElementById('formMessage');

    if (name && email && message) {
        if (!validateEmail(email)) {
            formMessage.textContent = "Veuillez entrer une adresse email valide.";
            formMessage.style.color = "red";
        } else {
            formMessage.textContent = "Formulaire soumis avec succès!";
            formMessage.style.color = "green";
            document.getElementById('contactForm').reset();
        }
    } else {
        formMessage.textContent = "Veuillez remplir tous les champs.";
        formMessage.style.color = "red";
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}


document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
