// products.js

// Products array: saare products is array me store honge
const products = [
  {
    id: 1, // unique id for product
    name: "Casual Shoes",
    price: 2344,
    image: "../images/shoes.jpeg"
  },
  {
    id: 2,
    name: "Classic Watch",
    price: 4999,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Choice shirt",
    price: 1599,
    image: "../images/shirt.jpeg"
  },
  {
    id: 4,
    name: "simple Jeans",
    price: 3499,
    image: "../images/jins.jpg"
  },
  {
    id: 5,
    name: "Smartphone",
    price: 12999,
    image: "https://images.unsplash.com/photo-1510552776732-03e61cf4b144?auto=format&fit=crop&w=800&q=80"
  }
  ,
   {
    id: 6, // unique id for product
    name: "Casual Shoes",
    price: 2499,
    image: "../images/shoes.jpeg"
  },
  {
    id: 7,
    name: "Classic Watch",
    price: 4999,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"
  },
   {
    id: 8,
    name: "Branded Jeans",
    price: 3499,
    image: "../images/jins.jpg"
  },
  {
    id: 9,
    name: "White Girl Top",
    price: 4099,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjBkcmVzc3xlbnwwfHwwfHx8Mg%3D%3D"
  },
  {
    id: 10,
    name: "Black Women Dress",
    price: 4999,
    image: "https://images.unsplash.com/photo-1599662875272-64de8289f6d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBkcmVzc3xlbnwwfHwwfHx8Mg%3D%3D"
  },
   {
    id: 11,
    name: "Black Top",
    price: 4999,
    image: "https://images.unsplash.com/photo-1511130558090-00af810c21b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWVuJTIwZHJlc3N8ZW58MHx8MHx8fDI%3D"
  },
  {
    id: 12,
    name: "Design Girl Dress",
    price: 999,
    image: "https://images.unsplash.com/photo-1602010069450-0a62034f235c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW4lMjBkcmVzc3xlbnwwfHwwfHx8Mg%3D%3D"
  },
     {
    id: 13,
    name: "Bnarashi Sharee",
    price: 9999,
    image: "https://images.unsplash.com/photo-1692992193981-d3d92fabd9cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvbWVuJTIwZHJlc3N8ZW58MHx8MHx8fDI%3D"
  },
    {
    id: 14,
    name: "Black  Dress",
    price: 7999,
    image: "https://images.unsplash.com/photo-1611484907270-d1e8d10e0f95?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvbWVuJTIwZHJlc3N8ZW58MHx8MHx8fDI%3D"
  },
    {
    id: 15,
    name: "White top Dress",
    price: 4999,
    image: "https://images.unsplash.com/photo-1688597167802-463b5685e758?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHdvbWVuJTIwZHJlc3N8ZW58MHx8MHx8fDI%3D"
  },
    {
    id: 16,
    name: "Black Blazer Dress",
    price: 12999,
    image: "https://images.unsplash.com/photo-1611232658526-33dec2927498?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHdvbWVuJTIwZHJlc3N8ZW58MHx8MHx8fDI%3D"
  },
   {
    id: 17,
    name: "Design Shirt",
    price: 9999,
    image: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwZHJlc3N8ZW58MHx8MHx8fDI%3D"
  },
   {
    id: 18,
    name: "Black macho T-shirt",
    price: 4999,
    image: "https://images.unsplash.com/photo-1660891950307-a427ea1bebb6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVuJTIwZHJlc3N8ZW58MHx8MHx8fDI%3D"
  },
   {
    id: 19,
    name: "Black Clssical Pant",
    price: 6999,
    image: "https://images.unsplash.com/photo-1584864783592-f1d6d4fcd1d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbiUyMGRyZXNzfGVufDB8fDB8fHwy"
  },
    {
    id: 20,
    name: "White Clssical Dress",
    price: 6999,
    image: "https://media.istockphoto.com/id/1499661536/photo/group-of-cheering-young-fans-men-wearing-traditional-white-kurta-and-tricolor-duppata-with.jpg?s=612x612&w=0&k=20&c=lYX2lVEGR3_vJDv9Sw50ohCJXXI6TeaVoSYcAtwWVDw="
  },
];


// ----------------------------------

// Function to display all products inside #product-list
function displayProducts() {
  const productList = document.getElementById("product-list");

  products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    //  HTML inside each product card
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    productList.appendChild(card);
  });
}
// ================= Add cart--------------------

//  Product ko cart me add karo and save karo localStorage me
function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.quantity += 1;
  } else {
    const product = products.find(p => p.id === productId);
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("Item added to cart!");
}

// --------------------- cart-count----------------------

//  Show total quantity in badge
function updateCartCount() {
  const countSpan = document.getElementById("cart-count");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (countSpan) countSpan.textContent = total;
}

displayProducts();
updateCartCount();
