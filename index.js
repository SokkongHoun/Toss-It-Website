import { SaladMenu } from "./Data/menu.js";
import { formatCurrency } from "./Data/utils/moneyConverter.js";

function renderPage() {
  let SaladHTML = "";

  SaladMenu.forEach((item) => {
    const saladId = item.id;

    let MatchingSalad = SaladMenu.find((salad) => salad.id === saladId);

    SaladHTML += `
    <div class="product-item">
        <div>
            <img class="menu-item" src="${MatchingSalad.img}" alt="menu-item">
        </div>
        <div>
            <div class="discount-price">
                <strike>${formatCurrency(
                  MatchingSalad.discountPriceCents
                )}</strike>
            </div>
        </div>
        <div class="item-name-price-container">
            <div>${MatchingSalad.name}</div>
            <div>${formatCurrency(MatchingSalad.priceCents)}</div>
        </div>
        <div>
            <button class="order-now-btn">
                ORDER NOW
            </button>
        </div>
    </div>
    `;
  });
  document.querySelector(".js-menu-control-item-container").innerHTML =
    SaladHTML;
}
renderPage();
