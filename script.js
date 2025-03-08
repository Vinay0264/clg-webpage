function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.display === "flex") {
        sidebar.style.display = "none"; // Hide sidebar
    } else {
        sidebar.style.display = "flex"; // Show sidebar
    }
}
function toggleDropdown() {
    let dropdown = document.querySelector(".sidebar-dropdown-content");

    if(dropdown.style.display === "block"){
        dropdown.style.display = "none";
    } 
    else{
        dropdown.style.display = "block";
    }
}

// script for adding header.html
fetch("header.html")
      .then(response => response.text())
      .then(data=>{

        document.getElementById("header").innerHTML= data;

         // Now the header and navbar are loaded, so we can apply sticky logic
    makeNavbarSticky();
         
      })
      .catch(error=>console.error("Error loading header.",error));

fetch("footer.html")
      .then(response => response.text())
      .then(data=>{

        document.getElementById("footer").innerHTML= data;
      })
      .catch(error=>console.error("Error loading header.",error));  
      
// sliding functionalty
var swiper = new Swiper(".mySwiper", {
    loop: true,               // Enables infinite scrolling
    autoplay: {
        delay: 3000,          // 3 seconds per slide
        disableOnInteraction: false, // Keeps autoplay running after user interaction
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// Function to make navbar sticky after scrolling past the header
function makeNavbarSticky() {
    let navbar = document.querySelector(".clg-navbar"); // Select the navbar
    let header = document.querySelector("header"); // Select the header section
    let body = document.body;

    if (!navbar || !header) return; // Safety check

    window.addEventListener("scroll", function () {
        if (window.scrollY >= header.offsetHeight) {
            navbar.classList.add("fixed-nav");
            body.classList.add("fixed-nav-padding"); // Prevent content shift
        } else {
            navbar.classList.remove("fixed-nav");
            body.classList.remove("fixed-nav-padding");
        }
    });
}