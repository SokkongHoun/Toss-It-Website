const singleBtn = document.querySelector(".js-indi-btn");
const grpBtn = document.querySelector(".js-grp-btn");
const singleContainer = document.querySelector(".js-single");
const grpContainer = document.querySelector(".js-grp");
const mainContentCont = document.querySelector(".main-content-container");

grpBtn.addEventListener("click", () => {
  singleContainer.style.display = "none";
  grpContainer.style.display = "block";

  grpBtn.style.backgroundColor = "#39db4a";
  singleBtn.style.backgroundColor = "rgb(32, 32, 32)";
});

singleBtn.addEventListener("click", () => {
  singleContainer.style.display = "block";
  grpContainer.style.display = "none";
  singleBtn.style.backgroundColor = "#39db4a";
  grpBtn.style.backgroundColor = "rgb(32, 32, 32)";
});
