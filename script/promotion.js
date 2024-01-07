const promotionNavText = document.getElementById("promo-text");

setInterval(function () {
  if (
    promotionNavText.innerText ===
    "Dine more, pay less! All you can eat for just $6.95!"
  ) {
    promotionNavText.innerHTML =
      "All you can drink for $14.95! Grab this in-store offer now!";
  } else {
    promotionNavText.innerHTML =
      "Dine more, pay less! All you can eat for just $6.95!";
  }
}, 3000);
