// ================================
// GlobalStudyBridge
// Version 0.1
// ================================

console.log("GlobalStudyBridge Loaded Successfully!");

// ================================
// Smooth Welcome
// ================================

window.addEventListener("load", () => {
    alert("Welcome to GlobalStudyBridge!\n\nYour AI Companion for Studying Abroad.");
});

// ================================
// Explore Button
// ================================

const exploreBtn = document.querySelector(".primary-btn");

if (exploreBtn) {

    exploreBtn.addEventListener("click", () => {

        document.getElementById("features").scrollIntoView({

            behavior: "smooth"

        });

    });

}

// ================================
// Learn More Button
// ================================

const learnBtn = document.querySelector(".secondary-btn");

if (learnBtn) {

    learnBtn.addEventListener("click", () => {

        document.getElementById("roadmap").scrollIntoView({

            behavior: "smooth"

        });

    });

}

// ================================
// Search Box Demo
// ================================

const searchButton = document.querySelector(".search-box button");

const searchInput = document.querySelector(".search-box input");

if (searchButton) {

    searchButton.addEventListener("click", () => {

        let keyword = searchInput.value.trim();

        if (keyword === "") {

            alert("Please enter a Country, University or Scholarship.");

        }

        else {

            alert(
                "Searching for: " +
                keyword +
                "\n\n(This feature will be connected to the database in the next version.)"
            );

        }

    });

}

// ================================
// Card Hover Animation
// ================================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

// ================================
// Country Card Click
// ================================

const countries = document.querySelectorAll(".country-card");

countries.forEach(country => {

    country.addEventListener("click", () => {

        let name = country.innerText;

        alert(

            "Country Selected:\n\n" +

            name +

            "\n\nFuture Version:\n" +

            "✔ Universities\n" +

            "✔ Scholarships\n" +

            "✔ Cost of Living\n" +

            "✔ Visa Guide\n" +

            "✔ Part-Time Jobs"

        );

    });

});

// ================================
// Simple Counter Animation
// ================================

const counters = document.querySelectorAll(".stat-box h2");

counters.forEach(counter => {

    const target = counter.innerText;

    const number = parseInt(target.replace(/\D/g, ""));

    const suffix = target.replace(/[0-9]/g, "");

    let count = 0;

    const speed = Math.max(20, Math.floor(number / 100));

    const update = () => {

        if (count < number) {

            count += speed;

            if (count > number) count = number;

            counter.innerText = count + suffix;

            requestAnimationFrame(update);

        }

    };

    update();

});

// ================================
// Navbar Shadow on Scroll
// ================================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.15)";

    }

    else {

        header.style.boxShadow = "0 2px 15px rgba(0,0,0,0.08)";

    }

});

// ================================
// Footer Year
// ================================

const footer = document.querySelector("footer p:last-child");

if (footer) {

    footer.innerHTML = `© ${new Date().getFullYear()} GlobalStudyBridge. All Rights Reserved.`;

}