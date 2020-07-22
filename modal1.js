(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");

  menuBtnRef.addEventListener("click", () => {
    menuBtnRef.classList.toggle("is-open");
  });

  document.getElementById("modal-menu-open").onclick = function () {
    document.getElementById("heder-address").classList.toggle("is-open");
    document.getElementById("header-backgroup").classList.toggle("is-open");
  };

  // document.getElementById("modal-menu-open").onclick = function () {
  //   document.getElementById("header-backgroup").classList.toggle("is-open");
  // };
})();
