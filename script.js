const contactForm = document.getElementById("contact-form");
const formResponse = document.getElementById("form-response");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    formResponse.textContent =
        "Thank you, " + name + "! Your form has been submitted successfully.";

    contactForm.reset();
});
