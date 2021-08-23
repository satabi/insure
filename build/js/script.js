(function () {
  const hamburgerMenu = document.querySelector(".header__hamburger");
  const navModal = document.querySelector("[data-modal]");
  const body = document.querySelector("body");
  let menuOpen = false;

  hamburgerMenu.addEventListener("click", (e) => {
    e.preventDefault;
    if (!menuOpen) {
      hamburgerMenu.classList.add("header__hamburger--active");
      navModal.classList.add("modal--active");
      body.classList.add("no-scroll");
      menuOpen = true;
    } else {
      hamburgerMenu.classList.remove("header__hamburger--active");
      navModal.classList.remove("modal--active");
      body.classList.remove("no-scroll");
      menuOpen = false;
    }
  });
})();
