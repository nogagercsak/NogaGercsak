// Smooth scrolling when clicking on navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1).toLowerCase(); // Convert to lowercase
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

//typing effect for title
const nameElement = document.getElementById("nameTitle");
const nameText = nameElement.textContent;
nameElement.textContent = ""; // Clear the initial text


let index = 0;


function typeNextLetter() {
if (index < nameText.length) {
nameElement.textContent += nameText.charAt(index);
index++;
setTimeout(typeNextLetter, 100); // Adjust the typing speed (in milliseconds) here
}
}


// Start the typing effect when the page loads
typeNextLetter();


// JavaScript to toggle 'show' class based on collapse state
document.querySelector('[data-toggle="collapse"]').addEventListener('click', function () {
    const target = document.querySelector(this.getAttribute('data-target'));
    const isExpanded = target.classList.contains('show');
    this.classList.toggle('show', !isExpanded);
});

// Gallery horizontal scrolling functionality - minimalist version
document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery-grid');
    const prevBtn = document.querySelector('.gallery-prev');
    const nextBtn = document.querySelector('.gallery-next');
    
    if (gallery && prevBtn && nextBtn) {
        // Set scroll amount to the width of one gallery item plus a bit more
        const scrollAmount = 250; // Adjusted for smaller images
        
        // Scroll left button
        prevBtn.addEventListener('click', function() {
            gallery.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });
        
        // Scroll right button
        nextBtn.addEventListener('click', function() {
            gallery.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
        
        // Add keyboard navigation
        document.addEventListener('keydown', function(e) {
            // Only respond to arrow keys if the gallery is in the viewport
            const rect = gallery.getBoundingClientRect();
            const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isInViewport) {
                if (e.key === 'ArrowLeft') {
                    gallery.scrollBy({
                        left: -scrollAmount,
                        behavior: 'smooth'
                    });
                } else if (e.key === 'ArrowRight') {
                    gallery.scrollBy({
                        left: scrollAmount,
                        behavior: 'smooth'
                    });
                }
            }
        });
        
        // Add swipe support for mobile
        let touchStartX = 0;
        let touchEndX = 0;
        
        gallery.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        gallery.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
        
        function handleSwipe() {
            const swipeThreshold = 30; // Lower threshold for easier swiping
            if (touchEndX < touchStartX - swipeThreshold) {
                // Swipe left, scroll right
                gallery.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            }
            if (touchEndX > touchStartX + swipeThreshold) {
                // Swipe right, scroll left
                gallery.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth'
                });
            }
        }
    }
});