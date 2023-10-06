const shop = document.querySelector("#etsy");
const mail = document.querySelector("#mail");
const events = document.querySelector("#events");
const fb = document.querySelector("#fb");
const ig = document.querySelector("#ig");

shop.addEventListener("click", (e) => {
  window.location.href =
    "https://www.etsy.com/shop/CoodlesCreation?ref=seller-platform-mcnav";
});

mail.addEventListener("click", (e) => {
  window.location.href = "https://mailchi.mp/2e446ad0ecf4/coodles-creations";
});

events.addEventListener("click", (e) => {
  window.location.href = "events.html";
});
fb.addEventListener("click", (e) => {
  window.location.href =
    "https://www.facebook.com/profile.php?id=100093219255237";
});
ig.addEventListener("click", (e) => {
  window.location.href =
    "https://instagram.com/coodlescreations?igshid=MzRlODBiNWFlZA==";
});
