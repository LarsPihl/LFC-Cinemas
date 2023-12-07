function changeMenu() {
  let menu = document.getElementById("hiddenMenu").innerHTML;
  let originalMenu = document.getElementById("navBar").innerHTML;
  let image = document.getElementById("logo").innerHTML;

  if (menu.length == 0) {
    return (
      '<img id="logo" src="images/Logo.svg" alt="LFC Bio" />' + originalMenu
    );
  } else return "";
}

const swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 1,
  pagination: {
    el: document.querySelector(".image-carousel .swiper-pagination"),
    clickable: true,
  },
  navigation: {
    nextEl: document.querySelector(".image-carousel .swiper-button-nxt"),
    prevEl: document.querySelector(".image-carousel .swiper-button-prv"),
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});
const swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 20,
  freeMode: false,
  shortSwipes: false,
  pagination: {
    el: document.querySelector(".actor-carousel .swiper-pagination"),
    clickable: true,
  },
  navigation: {
    nextEl: document.querySelector(".actor-carousel .swiper-button-nxt"),
    prevEl: document.querySelector(".actor-carousel .swiper-button-prv"),
  },
  breakpoints: {
    300: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.getElementById("modal");

// Show modal
open.addEventListener("click", () => modal.classList.add("show-modal"));

// Hide modal
close.addEventListener("click", () => modal.classList.remove("show-modal"));

// Hide modal on outside click
window.addEventListener("click", (e) =>
  e.target == modal ? modal.classList.remove("show-modal") : false
);
