// script.js

// Smooth Scroll Effect
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    window.scrollTo({
      top: targetElement.offsetTop - 50,
      behavior: 'smooth',
    });
  });
});

// Scroll Animations (Example: Fade-In)
window.addEventListener('scroll', function () {
  const elements = document.querySelectorAll('.fade-in');
  const windowHeight = window.innerHeight;

  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight) {
      element.classList.add('visible');
    }
  });
});

// Dynamic Projects
const projects = [
  { title: "Project 1", description: "Description of Project 1", imgSrc: "assets/project1.jpg" },
  { title: "Project 2", description: "Description of Project 2", imgSrc: "assets/project2.jpg" },
  { title: "Project 3", description: "Description of Project 3", imgSrc: "assets/project3.jpg" }
];

const portfolioContainer = document.querySelector('.portfolio-items');

projects.forEach(project => {
  const projectItem = document.createElement('div');
  projectItem.classList.add('portfolio-item');
  projectItem.innerHTML = `
    <img src="${project.imgSrc}" alt="${project.title}">
    <h3>${project.title}</h3>
    <p>${project.description}</p>
  `;
  portfolioContainer.appendChild(projectItem);
});

// Hamburger menu

const hamburgerIcon = document.getElementById('hamburger-icon');
        const mobileMenu = document.getElementById('mobile-menu');
    
        hamburgerIcon.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
