import addProducts from "./addProducts.js";

function changeNavlinkClass(currPage) {
  $(".navlink").each(function () {
    this.id === `${currPage}-navlink`
      ? $(this).addClass("active")
      : $(this).removeClass("active");
  });
}
function changeHtmlData(currPage, hashDidChange) {
  hashDidChange === true && changeNavlinkClass(currPage);
  $.get(`pages/${currPage}.html`, function (data) {
    $("#app").html(
      `<h1>${currPage} </h1><div id=${currPage} class='banner-img'></div> ${data}`
    );
    currPage === "products" && addProducts();
  });
}
function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  pageID != "" ? changeHtmlData(pageID, true) : changeHtmlData("home");
}
function initURLListener() {
  window.onhashchange = changeRoute;
  changeRoute();
  console.log(changeRoute);
}
$(document).ready(function () {
  initURLListener();
});
