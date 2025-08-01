// responsive header

let menuIcon = document.getElementById("menuIcon");
let menu = document.querySelector(".header ul");
menuIcon.addEventListener("click", function() {
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
});

// menu text

let menuItems = document.querySelectorAll(".header ul li");
menuItems.forEach(item => {
  item.addEventListener("click", function() {
    let span = this.querySelector(".menuText");
    if (span) {
      span.classList.remove("menuText");
      span.classList.add("clicked-span");
    }
  });
});
