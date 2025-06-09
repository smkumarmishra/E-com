
// ================================================
// check the page login or register
// ==============================================
 
// Agar user registered nahi hai, to use register page par bhejo
  if (localStorage.getItem("isRegistered") !== "true") {
    window.location.href = "register.html";
  }
  //  agar logout ho tab------

  if (!localStorage.getItem("isLoggedIn")) {
  window.location.href = "login.html";
}
localStorage.removeItem("isLoggedIn");