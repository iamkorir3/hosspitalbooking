document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

   
    let enteredName = document.getElementById("username").value;

   
    let storedName = localStorage.getItem("userName");

   
    if (enteredName === storedName) {
      
        window.location.href = "appointment.html";
    } else {

        document.getElementById("errorMessage").style.display = "block";
    }
});
