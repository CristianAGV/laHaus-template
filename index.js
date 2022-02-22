document.addEventListener("DOMContentLoaded", function () {
  // SELECTORS
  const navBar = document.getElementById("navbar");
  const navBarLinks = document.getElementsByClassName("navbar-link");
  const overlay = document.getElementById("overlay");
  const typeActivator = document.querySelector(".type-input");
  const roomActivator = document.getElementById("room-activator");
  const options = document.getElementsByClassName("option");
  const dots = document.getElementsByClassName("dot");
  const slider = document.getElementById("slider");
  const selectors = document.getElementsByClassName("selector");
  const quoteContainer = document.getElementById("quote-container");
  const quoteDots = document.getElementsByClassName("quotes__dot");
  const moreBtns = document.getElementsByClassName("more-btn");
  const blocks = document.getElementsByClassName("block");

  // NAVBAR FUNCTIONALITY
  navBar.addEventListener("click", () => {
    let navbarContainer = document.getElementById("navbar-container");
    if (navbarContainer.className.includes("navbar-active")) {
      navbarContainer.classList.remove("navbar-active");
    } else {
      navbarContainer.classList.add("navbar-active");
    }
  });

  navBarLinks[0].addEventListener("click", () => {
    if (overlay.className.includes("overlay-active")) {
      overlay.classList.remove("overlay-active");
    } else {
      overlay.classList.add("overlay-active");
    }
  });

  navBarLinks[1].addEventListener("click", () => {
    if (overlay.className.includes("overlay-active")) {
      overlay.classList.remove("overlay-active");
    } else {
      overlay.classList.add("overlay-active");
    }
  });

  navBarLinks[2].addEventListener("click", () => {
    if (overlay.className.includes("overlay-active")) {
      overlay.classList.remove("overlay-active");
    } else {
      overlay.classList.add("overlay-active");
    }
  });

  navBarLinks[3].addEventListener("click", () => {
    if (overlay.className.includes("overlay-active")) {
      overlay.classList.remove("overlay-active");
    } else {
      overlay.classList.add("overlay-active");
    }
  });
  // INPUT SECTION FUNCTIONALITY
  typeActivator.addEventListener("click", function () {
    let typeList = document.getElementById("type-list");
    if (typeList.className.includes("hero-active")) {
      typeList.classList.remove("hero-active");
    } else {
      typeList.classList.add("hero-active");
    }
  });

  typeActivator.addEventListener("blur", function () {
    let typeList = document.getElementById("type-list");
    typeList.classList.remove("hero-active");
  });

  roomActivator.addEventListener("click", function () {
    let roomCount = document.getElementById("room-count");
    if (roomCount.className.includes("hero-active")) {
      roomCount.classList.remove("hero-active");
    } else {
      roomCount.classList.add("hero-active");
    }
  });

  roomActivator.addEventListener("blur", function () {
    let roomCount = document.getElementById("room-count");
    roomCount.classList.remove("hero-active");
  });

  options[0].addEventListener("click", () => {
    for (let i = 0; i < 4; i++) {
      options[i].classList.remove("filter-active");
    }
    options[0].classList.add("filter-active");
  });

  options[1].addEventListener("click", () => {
    for (let i = 0; i < 4; i++) {
      options[i].classList.remove("filter-active");
    }
    options[1].classList.add("filter-active");
  });

  options[2].addEventListener("click", () => {
    for (let i = 0; i < 4; i++) {
      options[i].classList.remove("filter-active");
    }
    options[2].classList.add("filter-active");
  });

  options[3].addEventListener("click", () => {
    for (let i = 0; i < 4; i++) {
      options[i].classList.remove("filter-active");
    }
    options[3].classList.add("filter-active");
  });
  // SLIDER SECTION
  dots[0].addEventListener("click", () => {
    if (dots[1].className.includes("dot-active")) {
      slider.style.transform = "translateX(0)";
    }

    if (dots[2].className.includes("dot-active")) {
      slider.style.transform = "translateX(0)";
    }
    for (let i = 0; i < 3; i++) {
      dots[i].classList.remove("dot-active");
    }
    dots[0].classList.add("dot-active");
  });

  dots[1].addEventListener("click", () => {
    if (dots[0].className.includes("dot-active")) {
      slider.style.transform = "translateX(-280px)";
    }

    if (dots[2].className.includes("dot-active")) {
      slider.style.transform = "translateX(-280px)";
    }

    for (let i = 0; i < 3; i++) {
      dots[i].classList.remove("dot-active");
    }
    dots[1].classList.add("dot-active");
  });

  dots[2].addEventListener("click", () => {
    slider.style.transform = "translateX(-560px)";
    for (let i = 0; i < 3; i++) {
      dots[i].classList.remove("dot-active");
    }
    dots[2].classList.add("dot-active");
  });

  selectors[0].addEventListener("click", () => {
    for (let i = 0; i < 2; i++) {
      selectors[i].classList.remove("selector-active");
    }
    selectors[0].classList.add("selector-active");
  });

  selectors[1].addEventListener("click", () => {
    for (let i = 0; i < 2; i++) {
      selectors[i].classList.remove("selector-active");
    }
    selectors[1].classList.add("selector-active");
  });

  // QUOTE SLIDER SECTION

  quoteContainer.addEventListener("scroll", () => {
    let containerScrollPosition = quoteContainer.scrollLeft;
    console.log(containerScrollPosition);
    if (containerScrollPosition < 225) {
      for (let i = 0; i < 5; i++) {
        quoteDots[i].classList.remove("quote-active");
      }
      quoteDots[0].classList.add("quote-active");
    }
    if (containerScrollPosition >= 235) {
      for (let i = 0; i < 5; i++) {
        quoteDots[i].classList.remove("quote-active");
      }
      quoteDots[1].classList.add("quote-active");
    }

    if (containerScrollPosition >= 651) {
      for (let i = 0; i < 5; i++) {
        quoteDots[i].classList.remove("quote-active");
      }
      quoteDots[2].classList.add("quote-active");
    }

    if (containerScrollPosition >= 1046) {
      for (let i = 0; i < 5; i++) {
        quoteDots[i].classList.remove("quote-active");
      }
      quoteDots[3].classList.add("quote-active");
    }
    if (containerScrollPosition >= 1464) {
      for (let i = 0; i < 5; i++) {
        quoteDots[i].classList.remove("quote-active");
      }
      quoteDots[4].classList.add("quote-active");
    }
  });
  // ANIMATION FOR "SEE MORE" LINKS
  moreBtns[0].addEventListener("click", (e) => {
    e.preventDefault();
    if (blocks[0].className.includes("container-active")) {
      blocks[0].style.maxHeight = "108px";
      blocks[0].classList.remove("container-active");
      moreBtns[0].innerHTML = "Mostrar mas";
    } else {
      blocks[0].style.maxHeight = "489px";
      blocks[0].classList.add("container-active");
      moreBtns[0].innerHTML = "Mostrar menos";
    }
  });

  moreBtns[1].addEventListener("click", (e) => {
    e.preventDefault();
    if (blocks[1].className.includes("container-active")) {
      blocks[1].style.maxHeight = "108px";
      blocks[1].classList.remove("container-active");
      moreBtns[1].innerHTML = "Mostrar mas";
    } else {
      blocks[1].style.maxHeight = "489px";
      blocks[1].classList.add("container-active");
      moreBtns[1].innerHTML = "Mostrar menos";
    }
  });

  moreBtns[2].addEventListener("click", (e) => {
    e.preventDefault();
    if (blocks[2].className.includes("container-active")) {
      blocks[2].style.maxHeight = "108px";
      blocks[2].classList.remove("container-active");
      moreBtns[2].innerHTML = "Mostrar mas";
    } else {
      blocks[2].style.maxHeight = "489px";
      blocks[2].classList.add("container-active");
      moreBtns[2].innerHTML = "Mostrar menos";
    }
  });

  moreBtns[3].addEventListener("click", (e) => {
    e.preventDefault();
    if (blocks[3].className.includes("container-active")) {
      blocks[3].style.maxHeight = "108px";
      blocks[3].classList.remove("container-active");
      moreBtns[3].innerHTML = "Mostrar mas";
    } else {
      blocks[3].style.maxHeight = "489px";
      blocks[3].classList.add("container-active");
      moreBtns[3].innerHTML = "Mostrar menos";
    }
  });
});
