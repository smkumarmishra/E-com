const form = document.getElementById("register-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const Name = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;

  let errors = [];

  // 1. Name validation
  if (Name === "") {
    errors.push("Please enter your full name.");
  }

  // 2. Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errors.push("Please enter a valid email address.");
  }

  // 3. Password length check
  if (password.length < 6) {
    errors.push("Password must be at least 6 characters long.");
  }

  // 4. Confirm password match check
  if (password !== confirm) {
    errors.push("Passwords do not match.");
  }

  //  Final check
  if (errors.length > 0) {
    alert(errors.join("\n"));
    return; //  Stop further execution
  }
  // 

 

  //  Sab sahi, ab save karo
  localStorage.setItem("isRegistered", "true");
  localStorage.setItem("username", Name);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  alert(" Registration successful!");
  window.location.href = "products.html";
});
document.getElementById("logout").addEventListener("click", function () {
  localStorage.removeItem("isRegistered");
  alert("You are logged out.");
  window.location.href = "index.html";
});
