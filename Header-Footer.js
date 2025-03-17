// Function to load HTML content into a specific element
function loadHTML(targetElementId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(targetElementId).innerHTML = data;
        })
        .catch(error => console.error(`Error loading ${filePath}:`, error));
}

// Auto-create header and footer containers if not present
document.addEventListener("DOMContentLoaded", function () {
    if (!document.getElementById("header-container")) {
        let headerDiv = document.createElement("div");
        headerDiv.id = "header-container";
        document.body.prepend(headerDiv);
    }

    if (!document.getElementById("footer-container")) {
        let footerDiv = document.createElement("div");
        footerDiv.id = "footer-container";
        document.body.appendChild(footerDiv);
    }

    // Load header and footer
    loadHTML("header-container", "Header.html");
    loadHTML("footer-container", "Footer.html");
});
