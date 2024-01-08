import { SaladMenu, WrapMenu, mueslisMenu, sidesMenu } from "/data/menu.js";
import { formatCurrency } from "/data/utils/moneyConverter.js";
function renderMenu(menu) {
  let menuHTML = "";

  menu.forEach((item) => {
    menuHTML += `
      <div class="col item-x">
        <div>
          <img src="${item.img}" width="100px" />
        </div>
        <div>
          <p class="menu-name-x">${item.name}</p>
          <p class="menu-price-x">$${formatCurrency(item.priceCents)}</p>
        </div>
      </div>`;
  });

  document.querySelector(".menu-container-js").innerHTML = menuHTML;
}

document.querySelector(".salad-js").addEventListener("click", () => {
  renderMenu(SaladMenu);
});

document.querySelector(".wrap-js").addEventListener("click", () => {
  renderMenu(WrapMenu);
});

document.querySelector(".muesli-js").addEventListener("click", () => {
  renderMenu(mueslisMenu);
});

document.querySelector(".side-js").addEventListener("click", () => {
  renderMenu(sidesMenu);
});

renderMenu(SaladMenu);
