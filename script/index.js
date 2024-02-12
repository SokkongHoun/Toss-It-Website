import { SaladMenu, WrapMenu, sidesMenu } from "./menu.js";

function renderMenu(menu) {
  let menuHTML = "";

  menu.forEach((item) => {
    menuHTML += `
      <div class="col item-x">
        <div>
          <img src="${item.img}" width="100px" alt="${item.name}"/>
        </div>
        <div>
          <p class="menu-name-x">${item.name}</p>
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

document.querySelector(".side-js").addEventListener("click", () => {
  renderMenu(sidesMenu);
});

renderMenu(SaladMenu);
