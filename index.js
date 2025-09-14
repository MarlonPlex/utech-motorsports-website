/* NAV MENU LOGIC*/
const navMenuMobile = document.getElementById("mobile-nav-menu");
const openNavMenuButton = document.getElementById("nav-menu-open");
const closeNavMenuButton = document.getElementById("nav-menu-close");
const navMenuItems = document.querySelectorAll(".nav__menu-item");

function handleMenuToggleClick() {
    const menuState = navMenuMobile.classList.toggle("nav__mobile-menu--active");
    if(!menuState) {
        openNavMenuButton.focus();
        openNavMenuButton.removeAttribute("aria-expanded");
    } else {
        openNavMenuButton.setAttribute("aria-expanded", "true");
    }
}
// Mouse and key events to control the menu toggle.
navMenuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", (event) => {
        if(event.type == "click") {
            handleMenuToggleClick();
        }
    });
});
document.addEventListener("keydown", (event) =>{
    if(event.key == "Escape" && navMenuMobile.classList.contains("nav__mobile-menu--active")) {
        handleMenuToggleClick();
    }
});



/* EMAIL BUTTON LOGIC*/
const copyEmailButton = document.getElementById("copy-email-button");

copyEmailButton.addEventListener("click", async function (event) {
    if(event.type == "click") {
        try {
            await navigator.clipboard.writeText("utechracingclub@gmail.com")
            .then(() => copyEmailButton.textContent = "Copied!");
        } catch (error) {
            console.error(error.message);
            alert("An error occured, please reload page.");
        }
    }
});