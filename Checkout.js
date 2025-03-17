document.addEventListener("DOMContentLoaded", function () {
    loadCartItems();
    document.getElementById("proceed-checkout").addEventListener("click", function () {
        // Confirmation alert before redirecting
        const confirmation = confirm("Are you sure you want to proceed to payment?");
        if (confirmation) {
            // If the user confirms, redirect to payment.html
            window.location.href = "Payment.html";
        }
    });
});

function loadCartItems() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsList = document.getElementById("cart-items-list");
    const cartTotal = document.getElementById("cart-total");

    if (!cartItemsList) return;

    cartItemsList.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        cartItemsList.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    cart.forEach(item => {
        total += item.discountPrice * item.quantity;

        let li = document.createElement("li");
        li.classList.add("list-group-item", "d-flex", "align-items-center", "justify-content-between", "border-0", "shadow-sm");
        li.innerHTML = `
            <div class="d-flex align-items-center">
                <img src="${item.image}" width="50" class="me-3">
                <span>${item.title} - ₹${item.discountPrice} x ${item.quantity}</span>
            </div>
            <button class="remove-item btn btn-link text-danger" data-id="${item.id}">
                <i class="fas fa-trash-alt"></i>
            </button>
        `;
        cartItemsList.appendChild(li);
    });

    cartTotal.textContent = `Total: ₹${total}`;

    document.querySelectorAll(".remove-item").forEach(button => {
        button.addEventListener("click", function () {
            removeFromCart(this.getAttribute("data-id"));
        });
    });

    document.getElementById("clear-cart").addEventListener("click", function () {
        localStorage.removeItem("cart");
        loadCartItems();
    });
}

function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => String(item.id) !== String(productId));
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCartItems();
}

