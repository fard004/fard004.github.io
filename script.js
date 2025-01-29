// Tab Switching Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all tab buttons and panels
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');

    // Add click event listener to each tab button
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons and panels
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Show corresponding panel
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    // Activar especificaciones por defecto
const defaultButton = document.querySelector('[data-tab="especificaciones"]');
const defaultPanel = document.getElementById('especificaciones');
defaultButton.classList.add('active');
defaultPanel.classList.add('active');
});

// Image Gallery Functionality
document.addEventListener('DOMContentLoaded', function() {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Update main image source
            const newSrc = this.src.replace('100/100', '500/500');
            mainImage.src = newSrc;

            // Update active thumbnail
            thumbnails.forEach(thumb => thumb.style.borderColor = '#ddd');
            this.style.borderColor = '#0066cc';
        });
    });
});

// Add smooth scrolling for navigation
document.querySelectorAll('.breadcrumb a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});