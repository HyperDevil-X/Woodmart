const products = [
    { id: 1, title: "Men's Shirt", category: "men", subcategory: "Shirts", price: 1200, discountPrice: 999, description: "A stylish cotton shirt for daily wear.", image: "./images/showcase-img-5.jpg" },
    { id: 2, title: "Women's Dress", category: "women", subcategory: "Dresses", price: 2200, discountPrice: 1899, description: "Elegant floral dress for casual and formal occasions.", image: "./images/product-7-2.jpg" },
    { id: 3, title: "Kids T-shirt", category: "kids", subcategory: "T-Shirts", price: 800, discountPrice: 699, description: "Soft and comfy t-shirt for kids.", image: "./images/showcase-img-9.jpg" },
    { id: 4, title: "Men's Jeans", category: "men", subcategory: "Jeans", price: 2000, discountPrice: 1699, description: "Denim jeans with a perfect fit.", image: "./images/mens-jeans.jpg" },
    { id: 5, title: "Formal Blazers", category: "formal", subcategory: "Blazers", price: 4000, discountPrice: 3800, description: "Formal blazers are structured jackets designed for professional and semi-formal occasions.", image: "./images/men-women-formal-3.jpg" },
    { id: 6, title: "Formal Blazers", category: "formal", subcategory: "Blazers", price: 4000, discountPrice: 3500, description: "Formal blazers are structured jackets designed for professional and semi-formal occasions.", image: "./images/men-women-formal-2.jpg" },
    { id: 7, title: "Formal Office T-shirt", category: "formal", subcategory: "Office Shirts", price: 1500, discountPrice: 1000, description: "Formal office T-shirts offer a blend of professionalism and comfort, featuring subtle designs, premium fabrics, and a tailored fit suitable for workplace settings.", image: "./images/men-women-formal-1.jpg" },
    { id: 8, title: "Formal Business Suits", category: "formal", subcategory: "Business Suits", price: 5000, discountPrice: 3500, description: "Business suits are formal attire typically worn in professional settings.", image: "./images/men-women-formal-businesssuite-2.jpg" },
    { id: 9, title: "Formal Business Suits", category: "formal", subcategory: "Business Suits", price: 8000, discountPrice: 6500, description: "Business suits are formal attire typically worn in professional settings.", image: "./images/men-women-formal-businesssuite-1.jpg" },
    { id: 10, title: "Women's Casual T-shirt", category: "casual", subcategory: "T-Shirts", price: 800, discountPrice: 500, description: "A casual t-shirt is a comfortable, everyday wear garment made from soft fabric, perfect for a relaxed and stylish look.", image: "./images/womens casual tshirt.jpg" },
    { id: 11, title: "Men's Casual T-shirt", category: "casual", subcategory: "T-Shirts", price: 700, discountPrice: 600, description: "A casual t-shirt is a comfortable, everyday wear garment made from soft fabric, perfect for a relaxed and stylish look.", image: "./images/mens casual1.jpg" },
    { id: 12, title: "Men's Casual T-shirt", category: "casual", subcategory: "T-Shirts", price: 700, discountPrice: 650, description: "A casual t-shirt is a comfortable, everyday wear garment made from soft fabric, perfect for a relaxed and stylish look.", image: "./images/mens casual2.jpg" },
    { id: 13, title: "Men's Casual Jeans", category: "casual", subcategory: "Jeans", price: 3000, discountPrice: 2000, description: "Casual jeans are comfortable, everyday denim pants designed for a relaxed and stylish look.", image: "./images/mens casual jeans.jpg" },
    { id: 14, title: "Women's Casual Jeans", category: "casual", subcategory: "Jeans", price: 1800, discountPrice: 1500, description: "Casual jeans are comfortable, everyday denim pants designed for a relaxed and stylish look.", image: "./images/womens casual jeans.jpg" },
    { id: 15, title: "Women's Casual Shorts", category: "casual", subcategory: "Shorts", price: 1800, discountPrice: 1785, description: "Casual shorts are comfortable, lightweight bottoms perfect for warm weather and relaxed outings.", image: "./images/womens casual shorts1.jpg" },
    { id: 16, title: "Women's Casual Shorts", category: "casual", subcategory: "Shorts", price: 1500, discountPrice: 1400, description: "Casual shorts are comfortable, lightweight bottoms perfect for warm weather and relaxed outings.", image: "./images/womens casual shorts2.jpg" },
    { id: 17, title: "Men's Casual Shorts", category: "casual", subcategory: "Shorts", price: 8000, discountPrice: 6500, description: "Casual shorts are comfortable, lightweight bottoms perfect for warm weather and relaxed outings.", image: "./images/mens casual shorts.jpg" },
    { id: 18, title: "Men's Sherwanis", category: "ethnic", subcategory: "Sherwanis", price: 3000, discountPrice: 2800, description: "Ethnic sherwanis are traditional Indian garments worn by men on special occasions like weddings and festivals.", image: "./images/men sherwanis.jpg" },
    { id: 19, title: "Women's Sherwanis", category: "ethnic", subcategory: "Sherwanis", price: 4500, discountPrice: 4000, description: "Ethnic sherwanis are traditional Indian garments worn by men on special occasions like weddings and festivals.", image: "./images/women sherwanis.jpg" },
    { id: 20, title: "Men's Kurtas", category: "ethnic", subcategory: "Kurtas", price: 3000, discountPrice: 2500, description: "Ethnic kurtas are traditional, long tunic-style garments worn by men and women, often made from cotton, silk, or linen. ", image: "./images/men kurtas.jpg" },
    { id: 21, title: "Women's Kurtas", category: "ethnic", subcategory: "Kurtas", price: 2800, discountPrice: 2500, description: "Ethnic kurtas are traditional, long tunic-style garments worn by men and women, often made from cotton, silk, or linen. ", image: "./images/women kurtas.jpg" },
    { id: 22, title: "Women's Lehengas", category: "ethnic", subcategory: "Lehengas", price: 8000, discountPrice: 6500, description: "Ethnic lehengas are traditional Indian outfits consisting of a flared skirt, blouse (choli), and a dupatta.", image: "./images/women lehengas.jpg" },
    { id: 23, title: "Women's Lehengas", category: "ethnic", subcategory: "Lehengas", price: 4000, discountPrice: 3500, description: "Ethnic lehengas are traditional Indian outfits consisting of a flared skirt, blouse (choli), and a dupatta.", image: "./images/women lehengas 2.jpg" },
    { id: 25, title: "Women's Lehengas", category: "ethnic", subcategory: "Lehengas", price: 6400, discountPrice: 6100, description: "Ethnic lehengas are traditional Indian outfits consisting of a flared skirt, blouse (choli), and a dupatta.", image: "./images/women lehengas 3.jpg" },
    { id: 26, title: "Women's Track Pants", category: "sports", subcategory: "Track Pants", price: 1000, discountPrice: 800, description: "Athletic pants with a relaxed fit, perfect for running, training, or casual wear, offering comfort and mobility.", image: "./images/women trackpants.jpg" },
    { id: 27, title: "Men's Track Pants", category: "sports", subcategory: "Track Pants", price: 1000, discountPrice: 900, description: "Athletic pants with a relaxed fit, perfect for running, training, or casual wear, offering comfort and mobility.", image: "./images/men trackpants.jpg" },
    { id: 28, title: "Women's Jerseys", category: "sports", subcategory: "Jerseys", price: 900, discountPrice: 850, description: " Lightweight, moisture-wicking tops ideal for sports activities, often featuring team logos and numbers.", image: "./images/women jerseys.jpg" },
    { id: 29, title: "Men's Jerseys", category: "sports", subcategory: "Jerseys", price: 600, discountPrice: 500, description: " Lightweight, moisture-wicking tops ideal for sports activities, often featuring team logos and numbers.", image: "./images/men jerseys.jpg" },
    { id: 30, title: "Women's Gym Wear", category: "sports", subcategory: "Gym Wear", price: 1200, discountPrice: 1000, description: " Athletic pants with a relaxed fit, perfect for running, training, or casual wear, offering comfort and mobility.", image: "./images/women gymwear.jpg" },
    { id: 31, title: "Men's Gym Wear", category: "sports", subcategory: "Gym Wear", price: 1000, discountPrice: 940, description: " Athletic pants with a relaxed fit, perfect for running, training, or casual wear, offering comfort and mobility.", image: "./images/men gymwear.jpg" },
    { id: 32, title: "Men's Sweaters", category: "winter", subcategory: "Sweaters", price: 1500, discountPrice: 1240, description: " Warm and cozy knitwear, perfect for layering in cold weather.", image: "./images/men sweater.jpg" },
    { id: 33, title: "Women's Sweaters", category: "winter", subcategory: "Sweaters", price: 1000, discountPrice: 940, description: " Warm and cozy knitwear, perfect for layering in cold weather.", image: "./images/women sweater.jpg" },
    { id: 34, title: "Men's Jackets", category: "winter", subcategory: "Jackets", price: 2500, discountPrice: 2400, description: " Stylish and insulated outerwear that provides protection against wind and cold.", image: "./images/men jackets.jpg" },
    { id: 35, title: "Women's Jackets", category: "winter", subcategory: "Jackets", price: 3000, discountPrice: 2845, description: " Stylish and insulated outerwear that provides protection against wind and cold.", image: "./images/women jackets.jpg" },
    { id: 36, title: "Men's Woolen Coats", category: "winter", subcategory: "Woolen Coats", price: 1200, discountPrice: 1080, description: " Elegant and heavy coats made from wool, offering excellent warmth during winter.", image: "./images/men woolen coats.jpg" },
    { id: 37, title: "Women's Woolen Coats", category: "winter", subcategory: "Woolen Coats", price: 2000, discountPrice: 1750, description: " Elegant and heavy coats made from wool, offering excellent warmth during winter.", image: "./images/women woolencoats.jpg" },
    { id: 38, title: "Women's Designer Dresses", category: "luxury", subcategory: "Designer Dresses", price: 6000, discountPrice: 5430, description: "High-end, exclusive fashion pieces crafted with premium fabrics, intricate designs, and unique craftsmanship, often seen on runways and red carpets.", image: "./images/designer dress.jpg" },
    { id: 39, title: "Women's Designer Dresses", category: "luxury", subcategory: "Designer Dresses", price: 4000, discountPrice: 3780, description: "High-end, exclusive fashion pieces crafted with premium fabrics, intricate designs, and unique craftsmanship, often seen on runways and red carpets.", image: "./images/women designerdress.jpg" },
    { id: 40, title: "Women's Branded Suits", category: "luxury", subcategory: "Branded Suits", price: 5500, discountPrice: 5245, description: " Elegant, high-quality suits from renowned fashion houses, offering superior tailoring, luxurious fabrics, and a refined fit for formal and business settings.", image: "./images/women brandsuites.jpg" },

];

const subcategories = {
    men: ["T-Shirts", "Shirts", "Jeans", "Suits"],
    women: ["Dresses", "Sarees", "Lehengas", "Tops"],
    kids: ["Baby Suits", "Frocks", "T-Shirts", "Jeans"],
    formal: ["Blazers", "Office Shirts", "Business Suits"],
    casual: ["T-Shirts", "Jeans", "Shorts"],
    ethnic: ["Sherwanis", "Kurtas", "Lehengas"],
    sports: ["Track Pants", "Jerseys", "Gym Wear"],
    winter: ["Sweaters", "Jackets", "Woolen Coats"],
    luxury: ["Designer Dresses", "Branded Suits"]
};

let currentPage = 1;
const productsPerPage = 8; // 2 rows * 4 products per row

// Load and filter products
function loadProducts(page = 1) {
    const container = document.getElementById("productContainer");
    container.innerHTML = "";

    let activeCategory = document.querySelector(".category-item.active")?.getAttribute("data-category") || "all";
    let selectedSubcategories = Array.from(document.querySelectorAll(".subcategory-filter:checked"))
                                    .map(checkbox => checkbox.value);
    let maxPrice = parseInt(document.getElementById("priceFilter").value);

    let filteredProducts = products.filter(product => {
        return (activeCategory === "all" || product.category === activeCategory) &&
               (selectedSubcategories.length === 0 || selectedSubcategories.includes(product.subcategory)) &&
               (product.discountPrice <= maxPrice);
    });

    if (filteredProducts.length === 0) {
        container.innerHTML = `<p class="text-center text-danger">No products found.</p>`;
        updatePagination(0);
        return;
    }

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    updatePagination(totalPages);

    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    paginatedProducts.forEach(product => {
        container.innerHTML += `
            <div class="col-md-3 mb-4">
                <div class="product-card shadow p-3 position-relative">
                    <img src="${product.image}" alt="${product.title}" class="product-img img-fluid">
                    <div class="product-overlay"></div>  <!-- Dark overlay on hover -->
                    <button class="btn btn-primary view-product position-absolute" data-id="${product.id}">View</button>
                    <h5>${product.title}</h5>
                    <p class="text-muted">${product.description}</p>
                    <p><span class="text-danger">₹${product.discountPrice}</span> <del>₹${product.price}</del></p>
                </div>
            </div>`;
    });

    document.querySelectorAll(".view-product").forEach(button => {
        button.addEventListener("click", function () {
            const productId = this.getAttribute("data-id");
            openProductModal(productId);
        });
    });
}

// Update Pagination
function updatePagination(totalPages) {
    const pagination = document.querySelector(".pagination");
    pagination.innerHTML = "";

    if (totalPages <= 1) return;

    pagination.innerHTML += `
        <li class="page-item ${currentPage === 1 ? "disabled" : ""}">
            <a class="page-link" href="#" id="prevPage">&laquo;</a>
        </li>`;

    for (let i = 1; i <= totalPages; i++) {
        pagination.innerHTML += `
            <li class="page-item ${currentPage === i ? "active" : ""}">
                <a class="page-link" href="#" data-page="${i}">${i}</a>
            </li>`;
    }

    pagination.innerHTML += `
        <li class="page-item ${currentPage === totalPages ? "disabled" : ""}">
            <a class="page-link" href="#" id="nextPage">&raquo;</a>
        </li>`;

    document.querySelectorAll(".page-link").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            if (this.id === "prevPage") {
                currentPage--;
            } else if (this.id === "nextPage") {
                currentPage++;
            } else {
                currentPage = parseInt(this.getAttribute("data-page"));
            }
            loadProducts(currentPage);
        });
    });
}

// Update Subcategories Dynamically
function updateSubcategories(category) {
    let subcategoryContainer = document.getElementById("subcategoryFilters");
    subcategoryContainer.innerHTML = "";

    if (subcategories[category]) {
        subcategories[category].forEach(sub => {
            subcategoryContainer.innerHTML += `
                <div>
                    <input type="checkbox" class="subcategory-filter" value="${sub}"> ${sub}
                </div>`;
        });

        document.querySelectorAll(".subcategory-filter").forEach(checkbox => {
            checkbox.addEventListener("change", () => {
                currentPage = 1;
                loadProducts(currentPage);
            });
        });
    }
}

// Handle Category Clicks
document.querySelectorAll(".category-item").forEach(item => {
    item.addEventListener("click", function () {
        document.querySelectorAll(".category-item").forEach(i => i.classList.remove("active"));
        this.classList.add("active");

        let category = this.getAttribute("data-category");
        currentPage = 1;
        updateSubcategories(category);
        loadProducts(currentPage);
    });
});

// Initialize Price Range Slider
function initializePriceRangeSlider() {
    const priceFilter = document.getElementById("priceFilter");
    const priceValue = document.getElementById("priceValue");

    // Set max price to ₹10,000
    priceFilter.max = 10000;
    priceFilter.value = 10000;
    priceValue.textContent = `₹ ${priceFilter.value}`;

    // Update price value and filter products when slider changes
    priceFilter.addEventListener("input", () => {
        priceValue.textContent = `₹ ${priceFilter.value}`;
        currentPage = 1;
        loadProducts(currentPage);
    });
}

// Open Product Details Modal
function openProductModal(productId) {
    const product = products.find(p => p.id == productId);
    if (!product) return;

    document.getElementById("modalProductImage").src = product.image;
    document.getElementById("modalProductTitle").textContent = product.title;
    document.getElementById("modalProductDescription").textContent = product.description;
    document.getElementById("modalProductCategories").textContent = product.category;
    document.getElementById("modalProductSubcategories").textContent = product.subcategory;
    document.getElementById("modalProductPrice").textContent = `₹${product.discountPrice}`;
    document.getElementById("modalProductOriginalPrice").textContent = `₹${product.price}`;

    document.getElementById("addToCartBtn").setAttribute("data-id", product.id);

    let modal = new bootstrap.Modal(document.getElementById("productModal"));
    modal.show();
}

// Handle Add to Cart Click
document.getElementById("addToCartBtn").addEventListener("click", function () {
    const productId = this.getAttribute("data-id");
    const product = products.find(p => p.id == productId);

    if (product) {
        addToCart(product);
        alert(`${product.title} has been added to your cart!`);
    }
});

// Function to Get Cart from localStorage
function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

// Function to Save Cart to localStorage
function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// ✅ Function to Add Product to Cart
function addToCart(product) {
    let cart = getCart();
    let existingProduct = cart.find(item => item.id == product.id);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        product.quantity = 1;
        cart.push(product);
    }

    saveCart(cart);
    updateCartCount(); // Ensure the cart count is updated
}

// Function to Update Cart Count in Header
function updateCartCount() {
    let cartCountElement = document.getElementById("cart-count");

    if (cartCountElement) {
        let cart = getCart();
        let totalItems = 0;

        // Ensure quantity is properly counted
        cart.forEach(item => {
            totalItems += parseInt(item.quantity, 10) || 0; // Convert to integer
        });

        cartCountElement.textContent = totalItems;
    }
}

// Ensure updateCartCount runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    updateCartCount();
});


// Initialize
window.onload = () => {
    initializePriceRangeSlider();
    loadProducts(currentPage);
};
