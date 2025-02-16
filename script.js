function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.display === "flex") {
        sidebar.style.display = "none"; // Hide sidebar
    } else {
        sidebar.style.display = "flex"; // Show sidebar
    }
}
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


