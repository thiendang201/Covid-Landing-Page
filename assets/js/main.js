$(document).ready(function () {
  $(".banner__title h1").lettering();

  // parallax effect
  var image = document.querySelectorAll(".img-parallax-14");
  new simpleParallax(image, {
    scale: 1.6,
    orientation: "down",
  });

  // banner img animation
  TweenMax.from(".banner__img img", 2, {
    height: 0,
    opacity: 0,
    delay: 0.2,
    ease: Expo.easeInOut,
  });

  $(".banner__img img")
    .delay("2200")
    .queue(function (next) {
      $(this).css("height", "");

      // banner parallax effect
      var image = document.querySelectorAll(".banner .img-parallax");
      new simpleParallax(image, {
        scale: 1.6,
        orientation: "down",
      });

      next();
    });

  // banner title animation
  TweenMax.staggerFrom(
    ".banner__title span",
    2,
    {
      y: 20,
      opacity: 0,
      ease: "power4.out",
      delay: 1.2,
    },
    0.1
  );

  // logo animation
  TweenMax.from(".logo", 3, {
    opacity: 0,
    y: 20,
    ease: "circ.out",
    delay: 2.8,
  });
  // menu btn animation
  TweenMax.from(".menu-toggle", 2, {
    transition: "none",
    opacity: 0,
    y: 20,
    ease: "circ.out",
    delay: 3,
  });
  // media list animation
  TweenMax.staggerFrom(
    ".banner__media ul li",
    3,
    {
      y: 20,
      opacity: 0,
      ease: Expo.easeInOut,
      delay: 3.2,
    },
    0.1
  );

  TweenMax.from(".banner__scroll-down", 3, {
    transition: "none",
    opacity: 0,
    ease: "circ.out",
    delay: 3.4,
  });

  $(".banner__media ul li, .logo, .menu-toggle")
    .delay("7000")
    .queue(function (next) {
      $(this).addClass("tf-hover");
      next();
    });
});

function OpenMenu() {
  TweenMax.fromTo(
    ".nav-overlay",
    0.5,
    {
      opacity: 0,
      display: "none",
    },
    {
      display: "flex",
      top: 0,
      opacity: 1,
      ease: Expo.easeInOut,
    }
  );

  TweenMax.staggerFrom(
    ".nav-overlay__list li",
    0.8,
    { y: 40, opacity: 0, ease: Power2.easeOut, delay: 0.4 },
    0.15
  );
}

function CloseMenu() {
  TweenMax.to(".nav-overlay", 0.5, {
    opacity: 0,
    display: "none",
    ease: Expo.easeInOut,
  });
}

$(document).on("click", ".menu-toggle", function () {
  OpenMenu();
});

$(document).on("click", ".nav-overlay__close-btn", function () {
  CloseMenu();
});

$(document).on("click", ".nav-overlay__list li", function () {
  CloseMenu();
});

// scroll bar

function progress() {
  var windowScrollTop = $(window).scrollTop();
  var docHeight = $(document).height();
  var windowHeight = $(window).height();
  var progress = (windowScrollTop / (docHeight - windowHeight)) * 100;
  var $bgColor = "#fff";
  var $textColor = progress > 99 ? "#fff" : "#999";

  $(".scroll-bar h2")
    .text(Math.round(progress) + "%")
    .css({ color: $textColor });

  $(".fill")
    .height(progress + "%")
    .css({ backgroundColor: $bgColor });
}

$(document).on("scroll", function () {
  var scrollBar = $(".scroll-bar");
  var a, b;

  progress();
  scrollBar.css("opacity", "1");

  setTimeout(function () {
    a = $(document).height();
  }, 1500);

  setTimeout(function () {
    b = $(document).height();
  }, 3000);

  scrollBar.delay("3000").queue(function (next) {
    if (a === b) {
      scrollBar.css("opacity", "0");
    }
    next();
  });
});

// slide
var spv = window.innerWidth < 740 ? 1 : 2;

var swiper = new Swiper(".mySwiper", {
  slidesPerView: spv,
  spaceBetween: 40,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
