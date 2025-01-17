function toggleMobileMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    if (mobileMenu.style.left === "0px") {
        mobileMenu.style.left = "-100%"; // Hide menu
    } else {
        mobileMenu.style.left = "0px"; // Show menu
    }
}