(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");

  menuBtnRef.addEventListener("click", () => {
    menuBtnRef.classList.toggle("is-open");
  });
  $(document).ready(function () {
    $(".modal-menu-open").click(function () {
      $(".heder-address").toggleClass("is-open");
      $(".header-backgroup").toggleClass("is-open");
      return false;
    });
  });
})();
