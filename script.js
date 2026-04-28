/**
 * INTERACTIVE NAVIGATION LOGIC
 * Handles switching between "pages" without reloading
 */
function navigateTo(pageId) {
    // Hide all pages
    document.querySelectorAll('.page-content').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        window.scrollTo(0, 0);
    }

    // Close mobile menu if open
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.remove('active');
    }
}

/**
 * MOBILE MENU TOGGLE
 * Manipulates the DOM to show/hide navigation on small screens
 */
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
}

/**
 * FORM VALIDATION & FEEDBACK
 * Handles event listeners and DOM manipulation for user input
 */
const wealthForm = document.getElementById('wealthForm');
const feedback = document.getElementById('formFeedback');

if (wealthForm && feedback) {
    wealthForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Selection and basic validation check
        const email = document.getElementById('email').value;
        if (!email.includes('@')) {
            return; // Simple fail-safe
        }

        // UI Manipulation
        wealthForm.style.opacity = '0.3';
        wealthForm.style.pointerEvents = 'none';
        feedback.classList.remove('hidden');

        // Reset after delay (Mocking a submission)
        setTimeout(() => {
            wealthForm.reset();
            wealthForm.style.opacity = '1';
            wealthForm.style.pointerEvents = 'auto';
            feedback.classList.add('hidden');
        }, 5000);
    });
}

/**
 * SCROLL EFFECTS
 * Sticky Nav visual refinement
 */
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav-fixed');
    if (nav) {
        if (window.scrollY > 20) {
            nav.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.1)';
            nav.style.height = '70px';
        } else {
            nav.style.boxShadow = 'none';
            nav.style.height = '80px';
        }
    }
});
