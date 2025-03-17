document.addEventListener("DOMContentLoaded", function () {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        alert("Your cart is empty. Please add products before proceeding to payment.");
        window.location.href = "details.html"; // Redirect to product page if cart is empty
    }

    // Populate order summary dynamically
    const orderSummary = document.getElementById("order-summary");
    const orderTotal = document.getElementById("order-total");
    let totalAmount = 0;
    cart.forEach(item => {
        totalAmount += item.discountPrice * item.quantity;
        const listItem = document.createElement("li");
        listItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center"); // Align vertically
        // Create an image element and set its source to the item's image with reduced margin
        const productImage = `<img src="${item.image}" width="40">`; // Reduced margin-right to `me-1`
        // Insert the image along with the title, price, and quantity
        listItem.innerHTML = `${productImage} <span>${item.title}</span> - ₹${item.discountPrice} x ${item.quantity}`;
        orderSummary.appendChild(listItem);
    });

    orderTotal.textContent = `Total: ₹${totalAmount}`;

    // Payment button action
    document.getElementById("proceed-payment").addEventListener("click", function () {
        const billingForm = document.getElementById("billing-form");
        const shippingForm = document.getElementById("shipping-form");

        // Validate forms
        if (!billingForm.checkValidity() || !shippingForm.checkValidity()) {
            alert("Please fill in all required fields.");
            return;
        }

        const selectedPaymentMethod = document.querySelector('input[name="payment-method"]:checked').id;
        let upiId = '';
        if (selectedPaymentMethod === 'phonepe') {
            upiId = document.getElementById("phonepe-upi").value;
        } else if (selectedPaymentMethod === 'gpay') {
            upiId = document.getElementById("gpay-upi").value;
        }

        if (selectedPaymentMethod !== 'cod' && !upiId) {
            alert("Please enter a valid UPI ID.");
            return;
        }

        // Simulate payment processing
        alert("Payment processing. Thank you for your order!");
        // Redirect to payment success page
        window.location.href = "Payment-success.html";
    });
});
