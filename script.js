let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
let themeToggle = document.querySelector('#theme-toggle');
let themeIcon = themeToggle.querySelector('i');

// Existing menu functionality
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// Theme toggle functionality
themeToggle.onclick = () => {
    document.documentElement.setAttribute(
        'data-theme',
        document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    );
    
    // Toggle icon
    themeIcon.classList.toggle('fa-moon');
    themeIcon.classList.toggle('fa-sun');
    
    // Save theme preference
    localStorage.setItem('theme', document.documentElement.getAttribute('data-theme'));
}

// Check for saved theme preference
window.onload = () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Set correct icon
    if (savedTheme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}