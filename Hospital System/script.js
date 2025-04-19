document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    let userName = document.getElementById("name").value;

    localStorage.setItem("userName", userName);

  
    document.getElementById("successMessage").style.display = "block";

    setTimeout(function() {
        window.location.href = "appointment.html"; // Redirect to appointment page
    }, 2000);

    this.reset();
});
