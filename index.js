/* Nav menu Logic*/
const navMenuMobile = document.getElementById("nav-menu-mobile");

function handleMenuToggleClick() {
    navMenuMobile.classList.toggle("active");
}

/* Email button logic*/
const copyEmailButton = document.getElementById("copy-email-button");

copyEmailButton.addEventListener("click", async function (e) {
    if(e.type = "click") {
        try {
            await navigator.clipboard.writeText("utechracingclub@gmail.com")
            .then(() => copyEmailButton.textContent = "Copied!");
        } catch (error) {
            console.error(error.message);
            alert("An error occured, please reload page.");
        }
    }
});