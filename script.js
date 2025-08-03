const greeting = ()=>{
    let username = document.getElementById("username");
    if(username){
         username.textContent = "Amina 👋"
    }
 
}
greeting();

// responsive header
const menuIcon = document.getElementById("menuIcon");
const menu = document.querySelector(".header ul");
if (menuIcon && menu) {
  menuIcon.addEventListener("click", function () {
    if (menu.style.display === "flex") {
      menu.style.display = "none";
    } else {
      menu.style.display = "flex";
    }
  });
}


// Set .active class on menuText for current page and on click
window.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.header ul li a');
  function setActiveMenuByUrl() {
    navLinks.forEach(link => {
      const span = link.querySelector('.menuText, .active');
      if (span) span.classList.remove('active');
      const linkHref = link.getAttribute('href');
      if (linkHref && window.location.pathname.endsWith(linkHref)) {
        if (span) span.classList.add('active');
      }
    });
  }

  // On page load, set active by URL
  setActiveMenuByUrl();

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = link.getAttribute('href');
      if (href === '#' || href === '' || href === window.location.pathname) {
        e.preventDefault();
        navLinks.forEach(l => {
          const s = l.querySelector('.menuText, .active');
          if (s) s.classList.remove('active');
        });
        const span = link.querySelector('.menuText');
        if (span) span.classList.add('active');
      }
    });
  });
});

// campus slider
const slides = [
    {
    slideNo: 2,
    headline: "Cutting-Edge Tech Spaces",
    description:
      "Unleash your digital potential in our high-tech computer labs, equipped for coding, design, and innovation.",
    bgImage: "images/computerlb.png",
  },
  {
    slideNo: 1,
    headline: "The Learning Hub",
    description:
      "Dive deep into knowledge within our state-of-the-art library, designed for quiet study and collaborative discovery.",
    bgImage: "images/library.png",
  },

  {
    slideNo: 3,
    headline: "Discover Through Experimentation",
    description:
      "Conduct groundbreaking experiments in our advanced science laboratories, fostering hands-on learning and critical thinking.",
    bgImage: "images/science.png",
  },
  {
    slideNo: 4,
    headline: "Energize & Connect",
    description:
      "Recharge and build friendships in our vibrant campus playground and recreational areas, where fun meets community.",
    bgImage: "images/coffeshop.png",
  },
  {
    slideNo: 5,
    headline: "Your Campus Community Hub",
    description:
      "Relax, collaborate, and connect with peers in our cozy campus coffee shop and student lounge, the heart of student life.",
    bgImage: "images/plyground.png",
  },
];

let currentSlide = 0;
const slideContainer = document.querySelector(".slide");
if (slideContainer) {
  function showSlide(index) {
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
}

// profile page
const showEmailBtn = document.getElementById('showEmailBtn');
const showPhoneBtn = document.getElementById('showPhoneBtn');
const hideContactBtn = document.getElementById('hideContactBtn');
const contactInfo = document.getElementById('contactInfo');
if (showEmailBtn && showPhoneBtn && hideContactBtn && contactInfo) {
  showEmailBtn.addEventListener('click', function() {
    contactInfo.textContent = 'Email: amina.ahmadi@gmail.com';
  });
  showPhoneBtn.addEventListener('click', function() {
    contactInfo.textContent = 'Phone: +93 78567890';
  });
  hideContactBtn.addEventListener('click', function() {
    contactInfo.textContent = '';
  });
}
// Status Update
const statusText = document.getElementById('statusText');
const statusInput = document.getElementById('statusInput');
const updateStatusBtn = document.getElementById('updateStatusBtn');
if (statusText && statusInput && updateStatusBtn) {
  updateStatusBtn.addEventListener('click', function() {
    if (statusInput.value.trim() == '') 
    {
       alert("Please enter the status!")
    }
      
      else{
      statusText.innerHTML = statusInput.value;
      statusInput.value = '';
    }
  });
}


// courses page


 // Initial courses array
    let courses = [
      { name: 'Mathematics', grade: '10', details: 'Algebra, Geometry, Trigonometry' },
      { name: 'Biology', grade: '11', details: 'Genetics, Evolution, Ecology' },
      { name: 'Chemistry', grade: '10', details: 'Atoms, Molecules, Reactions' },
      { name: 'Physics', grade: '11', details: 'Mechanics, Waves, Electricity' },
    ];
    let currentFilter = 'all';
    const coursesList = document.getElementById('coursesList');
    const courseDetails = document.getElementById('courseDetails');
    const addCourseForm = document.getElementById('addCourseForm');
    const courseNameInput = document.getElementById('courseNameInput');
    const courseGradeInput = document.getElementById('courseGradeInput');
    // Render courses
    function renderCourses() {
      coursesList.innerHTML = '';
      let filtered = courses.filter(c => currentFilter === 'all' || c.grade === currentFilter);
      if (filtered.length === 0) {
        coursesList.innerHTML = '<li style="color:#888;">No courses found.</li>';
        return;
      }
      filtered.forEach((course, idx) => {
        let li = document.createElement('li');
        li.style.cssText = 'background:#f8da99; margin-bottom:12px; border-radius:10px; padding:16px 18px; display:flex; align-items:center; justify-content:space-between; box-shadow:0 2px 8px rgba(229,170,44,0.08);';
        li.innerHTML = `
          <span><strong>${course.name}</strong> <span style="color:#0c3371; font-size:0.95em;">(Grade ${course.grade})</span></span>
          <button class="show-details-btn" data-idx="${idx}" data-grade="${course.grade}" style="background:#0c3371; color:#fff; border:none; border-radius:8px; padding:7px 14px; font-size:1em; font-weight:500; cursor:pointer;">Show Course Details</button>
        `;
        coursesList.appendChild(li);
      });
    }
    renderCourses();
    // Show details
    coursesList.addEventListener('click', function(e) {
      if (e.target.classList.contains('show-details-btn')) {
        const idx = e.target.dataset.idx;
        courseDetails.textContent = courses[idx].details;
      }
    });
    // Add course
    addCourseForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = courseNameInput.value.trim();
      const grade = courseGradeInput.value;
      if (!name || !grade) {
        alert('Please enter a course name and select a grade.');
        return;
      }
      courses.push({ name, grade, details: 'No details yet.' });
      courseNameInput.value = '';
      courseGradeInput.value = '';
      renderCourses();
      courseDetails.textContent = '';
    });
    // Filter
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        currentFilter = this.dataset.grade;
        renderCourses();
        courseDetails.textContent = '';
      });
    });

    // contact 
        document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
      }
      alert('Thank you for contacting us, ' + name + '! Your message has been sent.');
      this.reset();
    });