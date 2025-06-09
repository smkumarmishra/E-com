// =========================
// 📦 Product Listing Logic
// =========================

// Container jahan products dikhte hain
const productList = document.getElementById('product-list');

// Render products from products.js
function displayProducts() {
  if (!productList || typeof products === 'undefined') return;

  productList.innerHTML = ''; // Clear existing

  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>Price: ₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    productList.appendChild(productDiv);
  });
}

// =========================
// 🛒 Cart Management Logic
// =========================

// Add item to cart in localStorage
function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const existingProduct = cart.find(item => item.id === productId);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${products.find(p => p.id === productId).name} added to cart!`);
  updateCartCount();
}

// Update the cart count in icon
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const total = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);

  const countSpan = document.getElementById("cart-count");
  if (countSpan) {
    countSpan.textContent = total;
  }
}

// =========================
// 👤 Profile Dropdown Logic
// =========================

const profileIcon = document.getElementById("profileIcon");
const dropdownMenu = document.getElementById("dropdownMenu");

if (profileIcon && dropdownMenu) {
  profileIcon.addEventListener("click", () => {
    dropdownMenu.classList.toggle("show");
  });

  document.addEventListener("click", (e) => {
    const profileDropdown = document.getElementById("profileDropdown");
    if (profileDropdown && !profileDropdown.contains(e.target)) {
      dropdownMenu.classList.remove("show");
    }
  });
}

// =========================
// Humburg click Page
// =========================
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

   hamburger.addEventListener("click", () => {
    
    navMenu.classList.toggle("active");
  });

// =========================
// Initialize Page
// =========================

document.addEventListener("DOMContentLoaded", () => {
  // Only run product listing if we are on products page
  if (productList) {
    displayProducts();
  }

  // Always update cart count
  updateCartCount();
});


