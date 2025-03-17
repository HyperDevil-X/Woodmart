document.getElementById("newsletterForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let emailInput = document.getElementById("emailInput").value;
    let successMessage = document.getElementById("successMessage");
    let errorMessage = document.getElementById("errorMessage");

    // Email Validation Regex
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailPattern.test(emailInput)) {
        successMessage.style.display = "block";
        errorMessage.style.display = "none";

        // Hide Success Message after 3 seconds
        setTimeout(() => {
            successMessage.style.display = "none";
        }, 3000);

        // Reset input field
        document.getElementById("emailInput").value = "";
    } else {
        errorMessage.style.display = "block";
        successMessage.style.display = "none";
    }
});
