// Fungsi untuk mengirim pesan WhatsApp
function sendWhatsAppMessage() {
  const button = document.getElementById("whatsapp-contact-button");

  try {
    const phoneNumber = button.getAttribute("data-phone-number");
    const defaultMessage = button.getAttribute("data-default-message");

    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(waUrl, "_blank");
  } catch (error) {
    console.error(error);
    errorMessage.style.display = "block";
    errorMessage.textContent = error.message;
  }
}

// Tambahkan event listener
document.getElementById("whatsapp-contact-button").addEventListener("click", sendWhatsAppMessage);

// navbar fixed

window.onscroll = function () {
  const header = document.querySelector("header");

  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// hamburger

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});
