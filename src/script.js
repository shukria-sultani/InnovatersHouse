// responsive header

let menuIcon = document.getElementById("menuIcon");
let menu = document.querySelector(".header ul");
menuIcon.addEventListener("click", function () {
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
});

// menu text

let menuItems = document.querySelectorAll(".header ul li");
menuItems.forEach((item) => {
  item.addEventListener("click", function () {
    let span = this.querySelector(".menuText");
    if (span) {
      span.classList.remove("menuText");
      span.classList.add("clicked-span");
    }
  });
});

// campus slider

const slides = [
  {
    slideNo: 1,
    headline: "The Learning Hub",
    description:
      "Dive deep into knowledge within our state-of-the-art library, designed for quiet study and collaborative discovery.",
    bgImage: "/images/library.png",
  },
  {
    slideNo: 2,
    headline: "Cutting-Edge Tech Spaces",
    description:
      "Unleash your digital potential in our high-tech computer labs, equipped for coding, design, and innovation.",
    bgImage: "/images/computerlb.png",
  },
  {
    slideNo: 3,
    headline: "Discover Through Experimentation",
    description:
      "Conduct groundbreaking experiments in our advanced science laboratories, fostering hands-on learning and critical thinking.",
    bgImage: "/images/science.png",
  },
  {
    slideNo: 4,
    headline: "Energize & Connect",
    description:
      "Recharge and build friendships in our vibrant campus playground and recreational areas, where fun meets community.",
    bgImage: "/images/coffeshop.png",
  },
  {
    slideNo: 5,
    headline: "Your Campus Community Hub",
    description:
      "Relax, collaborate, and connect with peers in our cozy campus coffee shop and student lounge, the heart of student life.",
    bgImage: "/images/plyground.png",
  },
];

let currentSlide = 0;
const slideContainer = document.querySelector(".slide");

function showSlide(index) {
  if (!slideContainer) return;
  slideContainer.classList.remove("fade-in");
  setTimeout(() => {
    slideContainer.innerHTML = `
      <h2>${slides[index].headline}</h2>
      <p style="color: white;">${slides[index].description}</p>
    `;
    slideContainer.style.backgroundImage = `url('${slides[index].bgImage}')`;
    slideContainer.classList.add("fade-in");
  }, 200);
}

showSlide(currentSlide);

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 4000);

