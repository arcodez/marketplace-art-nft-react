// create a function to change the aria-expanded attribute of the button

function toggleButton(button) {
  if (button.getAttribute("aria-expanded") === "true") {
    button.setAttribute("aria-expanded", "false");
  } else {
    button.setAttribute("aria-expanded", "true");
  }
}

// create a function to take the add and remove classes from the navbar-collapse

function toggleNavbar() {
    const navbar = document.querySelector(".navbar-collapse");
    if (navbar.classList.contains("show")) {
        navbar.classList.remove("show");
    } else {
        navbar.classList.add("show");
    }
}


