//----------------------------- Logout functionality------------------------------//

    // 
    document.getElementById("logout").addEventListener("click", function () {
      localStorage.removeItem("isLoggedIn");
      alert("---> Logged out!");
      window.location.href = "index.html";
    });
