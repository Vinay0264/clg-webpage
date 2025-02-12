function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.display === "flex") {
        sidebar.style.display = "none"; // Hide sidebar
    } else {
        sidebar.style.display = "flex"; // Show sidebar
    }
}
