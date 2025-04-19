// document.addEventListener("DOMContentLoaded", function() {
//     let userName = localStorage.getItem("userName");

//     if (userName) {
//         document.getElementById("welcomeMessage").textContent = userName + " - Book an Appointment";
//     }
// });

// // FETCHING DATA FRON INPUT/ FORM

// document.addEventListener('DOContentLoaded'), function() {
//     const form = document.getElementById('appointmentForm');

//     form.addEventListener('submit'), function(event){
//         event.preventDefault();

//         const name = document.getElementById('name').value;
//         const email = document.getElementById('email').value;

//         console.log('Name:', name);
//         console.log('Email:', email);
//     }

// }

const bookNow = document.getElementById("bookButton");
const containerr = document.querySelector(".container");
const closeIt = document.querySelector(".close_butt");


bookNow.addEventListener("click", change);
closeIt.addEventListener("click", change);
    function change() {
    containerr.classList.toggle('hide_container');
    
}