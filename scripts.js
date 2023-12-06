document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("register-form");

  registerForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form field values
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Check if any field is empty
    if (!firstName || !lastName || !username || !email || !password) {
      return;
    }

    // Store each form field value individually in local storage
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  });
});
