document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ DOM fully loaded, initializing Cart.js...");

    // Ensure cart count updates on all pages
    updateCartCount();

    // Check if cart icon exists and add click event to redirect to checkout
    const cartIcon = document.getElementById("cartIcon");
    if (cartIcon) {
        cartIcon.addEventListener("click", function () {
            window.location.href = "checkout.html";
        });
    }

    // If on checkout page, load cart items
    if (document.querySelector(".checkout-items")) {
        loadCheckoutPage();
    }
});

// ✅ Function to Get Cart from Local Storage
function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

// ✅ Function to Save Cart to Local Storage
function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// ✅ Function to Update Cart Count in Header
function updateCartCount() {
    let cartCountElement = document.getElementById("cart-count");
    if (cartCountElement) {
        let cart = getCart();
        let totalCount = cart.reduce((sum, item) => sum + (parseInt(item.quantity, 10) || 0), 0);
        cartCountElement.textContent = totalCount;
    } else {
        console.error("❌ Cart count element not found!");
    }
}

// ✅ Function to Add Item to Cart
function addToCart(product) {
    let cart = getCart();
    let existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
        existingProduct.quantity += 1; // Increase quantity
    } else {
        product.quantity = 1; // Set initial quantity
        cart.push(product);
    }

    saveCart(cart);
    updateCartCount();
}

// ✅ Function to Remove Item from Cart
function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => String(item.id) !== String(productId));

    saveCart(cart);
    updateCartCount();
    loadCheckoutPage(); // Update checkout page if user is there
}

// ✅ Function to Load Cart Items in Checkout Page
function loadCheckoutPage() {
    const cartContainer = document.querySelector(".checkout-items");
    if (!cartContainer) {
        console.error("❌ Checkout cart container not found! Check checkout.html.");
        return;
    }

    let cart = getCart();
    cartContainer.innerHTML = "";

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    cart.forEach(item => {
        let cartItem = document.createElement("li");
        cartItem.classList.add("checkout-item");
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" width="50">
            <div class="checkout-item-details">
                <p>${item.title}</p>
                <p>₹${item.discountPrice} x 
                    <button class="decrease-qty" data-id="${item.id}">-</button>
                    <span id="quantity-${item.id}">${item.quantity}</span>
                    <button class="increase-qty" data-id="${item.id}">+</button>
                </p>
            </div>
            <button class="remove-item btn btn-danger" data-id="${item.id}">Remove</button>
        `;
        cartContainer.appendChild(cartItem);
    });

    // Attach event listeners for remove buttons and quantity buttons
    document.querySelectorAll(".remove-item").forEach(button => {
        button.addEventListener("click", function () {
            removeFromCart(this.getAttribute("data-id"));
        });
    });

    document.querySelectorAll(".increase-qty").forEach(button => {
        button.addEventListener("click", function () {
            updateQuantity(this.getAttribute("data-id"), 1);
        });
    });

    document.querySelectorAll(".decrease-qty").forEach(button => {
        button.addEventListener("click", function () {
            updateQuantity(this.getAttribute("data-id"), -1);
        });
    });
}

// ✅ Function to Update Item Quantity in Cart
function updateQuantity(productId, change) {
    let cart = getCart();
    let product = cart.find(item => String(item.id) === String(productId));

    if (product) {
        // Update quantity with change, and prevent negative or zero quantities
        product.quantity = Math.max(1, product.quantity + change); 

        saveCart(cart); // Save the updated cart
        updateCartCount(); // Update cart count in header
        document.getElementById(`quantity-${productId}`).textContent = product.quantity; // Update quantity on the page
    }
}
