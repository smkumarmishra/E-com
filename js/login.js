const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const registerEmail = localStorage.getItem("email");
  const registerPass = localStorage.getItem("password");

  const errors = [];

  //  Step 1: Check if user exists
  if (!registerEmail || !registerPass) {
    alert(" No user found. Please register first.");
    window.location.href = "register.html";
    return;
  }

  //  Step 2: Check email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errors.push("Please enter a valid email address.");
  }

  //  Step 3: Check if password is empty
  if (password === "") {
    errors.push("Please enter your password.");
  }

  //  Step 4: Show validation errors (if any)
  if (errors.length > 0) {
    alert(errors.join("\n"));
    return; //  Stop everything here
  }

  // Step 5: Match email & password
  if (email === registerEmail && password === registerPass) {
    localStorage.setItem("isLoggedIn", "true");
    alert("-- Login successful!");
    window.location.href = "products.html";
    return;
  } else {
    alert("-- Invalid username or password!");
    return;
  }
});
