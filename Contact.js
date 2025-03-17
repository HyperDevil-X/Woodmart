document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Form Validation
        let isValid = true;
        const inputs = contactForm.querySelectorAll("input, textarea");
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.classList.add("is-invalid");
                isValid = false;
            } else {
                input.classList.remove("is-invalid");
            }
        });

        if (isValid) {
            // Show Success Message
            successMessage.style.display = "block";

            // Hide Success Message after 3 seconds
            setTimeout(() => {
                successMessage.style.display = "none";
            }, 3000);

            // Reset Form Fields
            contactForm.reset();
        }
    });
});
