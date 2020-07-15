(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open1]"),
    closeModalBtn: document.querySelector("[data-modal-close1]"),

    modal: document.querySelector("[data-modal1]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
(() => {
  document.querySelector(".js-speaker-form").addEventListener("submit", (e) => {
    e.preventDefault();

    new FormData(e.currentTarget).forEach((value, name) =>
      console.log(`${name}: ${value}`)
    );

    e.currentTarget.reset();
  });
})();
