// =========================
// GlobalStudyBridge
// script.js
// =========================

// Welcome Message
window.onload = function () {
    console.log("GlobalStudyBridge Loaded Successfully!");
};

// =========================
// Search Button
// =========================

const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function () {

    let input = document.querySelector(".search input").value;

    if (input == "") {

        alert("Please enter a country, university or scholarship.");

    } else {

        alert("Searching for: " + input + "\n\n(Database will be connected in the next version.)");

    }

});

// =========================
// Future Features Click
// =========================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("click", function () {

        alert("🚀 This feature will be available in Version 2.0");

    });

});

// =========================
// Country Click
// =========================

const countries = document.querySelectorAll(".country div");

countries.forEach(country => {

    country.addEventListener("click", function () {

        alert("You selected " + country.innerText);

    });

});

// =========================
// Navbar Shadow
// =========================

window.addEventListener("scroll", function () {

    const nav = document.querySelector("nav");

    if (window.scrollY > 20) {

        nav.style.boxShadow = "0 5px 20px rgba(0,0,0,.2)";

    } else {

        nav.style.boxShadow = "0 2px 10px rgba(0,0,0,.1)";

    }

});