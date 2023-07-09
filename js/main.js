var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

let toTop = document.querySelector(".to-top")

window.onscroll = () => {

    if(document.documentElement.scrollTop > 0) {
        
        toTop.style.opacity = "1";
        
        } else {

            toTop.style.opacity = "0";
        }

    }

    toTop.onclick = () => {
        document.documentElement.scrollTop = 0;
    }

let toggler = document.querySelector(".toggle");
let nav = document.querySelector(".responsive-nav");
let links = document.querySelector(".responsive-nav li a")
let close = document.querySelector(".close");

toggler.onclick = function () {
  nav.classList.add("open");
};

close.onclick = function () {
  this.parentElement.classList.remove("open");
};

const observe = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add("show")
    }
  });

});
const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((el) => observe.observe(el))