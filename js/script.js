var burgerMenuMobile = document.getElementById("burgerMenuMobile");
var burgerMenuBig = document.getElementById("burgerMenuBig");
var burgerMenuOpen = document.getElementById("burgerMenuOpen");
var burgerMenuClose = document.getElementById("burgerMenuClose");
var burgerMenuCloseBig = document.getElementById("burgerMenuCloseBig");

function hideElement(element) {
  element.style.display = "none";
}

function showElement(element) {
  element.style.display = "block";
}

function fadeIn(element) {
  element.classList.remove("fade-out")
  element.classList.add("fade-in"); // Add the fade-in class to trigger the animation
  showElement(element)
}

function fadeOut(element) {
  if (element.style.display !== "none") {
    element.classList.remove("fade-in");
    element.classList.add("fade-out"); // Add the fade-out class to trigger the animation
    setTimeout(() => {
      hideElement(element)
    }, 500);
 // Hide the element after the animation is complete
  }
}

function checkWidth(x) {
  if (x.matches) {
    hideElement(burgerMenuBig);
    hideElement(burgerMenuCloseBig);
    showElement(burgerMenuOpen);
    hideElement(burgerMenuClose);
    hideElement(burgerMenuMobile);
  } else {
    hideElement(burgerMenuMobile);
    hideElement(burgerMenuClose);
    showElement(burgerMenuOpen);
    hideElement(burgerMenuCloseBig);
    hideElement(burgerMenuBig);
  }
}

var x = window.matchMedia("(max-width: 700px)");
checkWidth(x);
x.addEventListener("change", checkWidth);

burgerMenuOpen.addEventListener("click", function () {
  if (x.matches) {
    fadeIn(burgerMenuMobile);
    showElement(burgerMenuClose);
    hideElement(burgerMenuOpen);
  } else {
    fadeIn(burgerMenuBig);
    showElement(burgerMenuCloseBig);
    hideElement(burgerMenuOpen);
  }
});

burgerMenuClose.addEventListener("click", function () {
  if (x.matches) {
    fadeOut(burgerMenuMobile);
    showElement(burgerMenuOpen);
  } else {
    fadeOut(burgerMenuBig);
    hideElement(burgerMenuCloseBig);
    showElement(burgerMenuOpen);
  }
});

burgerMenuCloseBig.addEventListener("click", function () {
  hideElement(burgerMenuCloseBig);
  fadeOut(burgerMenuBig);
  showElement(burgerMenuOpen);
});
