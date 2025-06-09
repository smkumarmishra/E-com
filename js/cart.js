function loadCartItems() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContainer = document.getElementById("cart-items");
  const totalSpan = document.getElementById("cart-total");

  cartContainer.innerHTML = ""; // Clear old data
  let total = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const tr = document.createElement("tr");

    tr.innerHTML = `
  <td data-label="Image"><img src="${item.image}" alt="${item.name}" /></td>
  <td data-label="Product">${item.name}</td>
  <td data-label="Price">₹${item.price}</td>

  <!-- Quantity Controls -->
  <td data-label="Quantity">
    <button class="qty-btn decrese-btn" onclick="decreaseQty(${item.id})">−</button>
    <span class="qty-value">${item.quantity}</span>
    <button class="qty-btn increse-btn" onclick="increaseQty(${item.id})">+</button>
  </td>

  <td data-label="Subtotal">₹${item.price * item.quantity}</td>
  <td data-label="Action">
    <button onclick="removeItem(${item.id})" class="delete-btn">
      <i class="fa-solid fa-trash"></i>
    </button>
  </td>
`;

    cartContainer.appendChild(tr);
  });

  totalSpan.textContent = total;
}

function removeItem(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter(item => item.id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCartItems(); // Reload
  updateCartCount(); //updateCartCount
}

function increaseQty(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = cart.find(item => item.id === productId);
  if (product) {
    product.quantity += 1;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCartItems(); // Refresh view
   updateCartCount(); //updateCartCount
}

function decreaseQty(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = cart.find(item => item.id === productId);
  if (product && product.quantity > 1) {
    product.quantity -= 1;
  } else if (product && product.quantity === 1) {
    // Optional: confirm before removing
    const confirmRemove = confirm("Remove this item from cart?");
    if (confirmRemove) {
      cart = cart.filter(item => item.id !== productId);
    } else {
      return;
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCartItems(); // Refresh view
   updateCartCount(); //updateCartCount
}


loadCartItems();

// -------------------check-out-btn js------------------------------

//  Jab checkout button click ho to total check karo


document.getElementById("checkout-btn").addEventListener("click", function () {
  // LocalStorage se cart uthao
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Agar cart khali hai to alert dikhaye

  if (cart.length === 0) {
    alert("🛒 Cart is empty! Please add some products before checkout.");
    return;
  }

  //  Total price calculate karo

  let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  //  Alert me show karo total

  alert(`🎉 Your total is ₹${total}. \n\nCheckout successful! (Future: Payment gateway aayega)`);
  
  //  Optional: localStorage clear karke cart khali karna

  localStorage.removeItem("cart");
  loadCartItems();

  
  //  Redirect to success page
  window.location.href = "../html/successful.html";
});



//  Empty Cart button click-----------------------
document.getElementById("empty-cart-btn").addEventListener("click", function () {
  const confirmClear = confirm("Are you sure you want to clear the cart?");
  
  if (confirmClear) {
    //  Clear localStorage
    localStorage.removeItem("cart");

    //  UI refresh
    loadCartItems();

    //  Cart count badge update
    updateCartCount();

    // Success message
    alert("Cart has been emptied.");
  }
});
// loadCartItems();
// updateCartCount();
