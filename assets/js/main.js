// Scroll to Top Button (can be enhanced)
const scrollBtn = document.createElement('button');
scrollBtn.textContent = '↑';
scrollBtn.id = 'scrollToTop';
document.body.appendChild(scrollBtn);

scrollBtn.style.position = 'fixed';
scrollBtn.style.bottom = '20px';
scrollBtn.style.right = '20px';
scrollBtn.style.padding = '10px';
scrollBtn.style.borderRadius = '50%';
scrollBtn.style.border = 'none';
scrollBtn.style.background = '#0077b6';
scrollBtn.style.color = '#fff';
scrollBtn.style.fontSize = '1.2rem';
scrollBtn.style.cursor = 'pointer';
scrollBtn.style.display = 'none';

window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Optional: Auto-highlight nav item based on URL
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});

// Contact form validation (very simple)
if (window.location.pathname.includes('contact.html')) {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            const name = form.querySelector('input[type="text"]');
            const email = form.querySelector('input[type="email"]');
            const message = form.querySelector('textarea');

            if (!name.value || !email.value || !message.value) {
                alert('Please fill in all fields.');
                e.preventDefault();
            }
        });
    }
}

// Toggle Dark/Light Mode
const modeToggle = document.getElementById('modeToggle');
const body = document.body;

// Check for user’s saved preference in localStorage
if (localStorage.getItem('mode') === 'dark') {
    body.classList.add('dark-mode');
    modeToggle.textContent = '🌞'; // Switch to light mode icon
} else {
    body.classList.remove('dark-mode');
    modeToggle.textContent = '🌙'; // Switch to dark mode icon
}

modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Save the user's preference
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('mode', 'dark');
        modeToggle.textContent = '🌞'; // Switch to light mode icon
    } else {
        localStorage.setItem('mode', 'light');
        modeToggle.textContent = '🌙'; // Switch to dark mode icon
    }
});
