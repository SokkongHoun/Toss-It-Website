import { SaladMenu, WrapMenu, mueslisMenu, sidesMenu } from "./Data/menu.js";
import { formatCurrency } from "./Data/utils/moneyConverter.js";

function renderSaladPage() {
  let saladHTML = "";

  SaladMenu.forEach((item) => {
    const saladId = item.id;

    let MatchingSalad = SaladMenu.find((salad) => salad.id === saladId);

    saladHTML += `
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
    saladHTML;
}
renderSaladPage();

document.querySelector(".js-salad").addEventListener("click", () => {
  renderSaladPage();
});

function renderWrapPage() {
  let wrapHTML = "";

  WrapMenu.forEach((item) => {
    const wrapId = item.id;

    let matchingWrap = WrapMenu.find((wrap) => wrap.id === wrapId);

    wrapHTML += `
    <div class="product-item">
        <div>
            <img class="menu-item" src="${matchingWrap.img}" alt="menu-item">
        </div>
        <div>
            <div class="discount-price">
                <strike>${formatCurrency(
                  matchingWrap.discountPriceCents
                )}</strike>
            </div>
        </div>
        <div class="item-name-price-container">
            <div>${matchingWrap.name}</div>
            <div>${formatCurrency(matchingWrap.priceCents)}</div>
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
    wrapHTML;
}

document.querySelector(".js-wrap").addEventListener("click", () => {
  renderWrapPage();
});

function renderMuesliPage() {
  let muesliHTML = "";

  mueslisMenu.forEach((item) => {
    const muesliId = item.id;

    let matchingMuesli = mueslisMenu.find((muesli) => muesli.id === muesliId);

    muesliHTML += `
      <div class="product-item">
          <div>
              <img class="menu-item" src="${
                matchingMuesli.img
              }" alt="menu-item">
          </div>
          <div>
              <div class="discount-price">
                  <strike>${formatCurrency(
                    matchingMuesli.discountPriceCents
                  )}</strike>
              </div>
          </div>
          <div class="item-name-price-container">
              <div>${matchingMuesli.name}</div>
              <div>${formatCurrency(matchingMuesli.priceCents)}</div>
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
    muesliHTML;
}

document.querySelector(".js-muesli").addEventListener("click", () => {
  renderMuesliPage();
});

function renderSidesPage() {
  let sideHTML = "";

  sidesMenu.forEach((item) => {
    const sideId = item.id;

    let matchingSides = sidesMenu.find((side) => side.id === sideId);

    sideHTML += `
        <div class="product-item">
            <div>
                <img class="menu-item" src="${
                  matchingSides.img
                }" alt="menu-item">
            </div>
            <div>
                <div class="discount-price">
                    <strike>${formatCurrency(
                      matchingSides.discountPriceCents
                    )}</strike>
                </div>
            </div>
            <div class="item-name-price-container">
                <div>${matchingSides.name}</div>
                <div>${formatCurrency(matchingSides.priceCents)}</div>
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
    sideHTML;
}

document.querySelector(".js-sides").addEventListener("click", () => {
  renderSidesPage();
});
