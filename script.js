document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1).toLowerCase(); 
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
nameElement.textContent = "";


let index = 0;


function typeNextLetter() {
if (index < nameText.length) {
nameElement.textContent += nameText.charAt(index);
index++;
setTimeout(typeNextLetter, 200); 
}
}


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
        const scrollAmount = 250; 
        prevBtn.addEventListener('click', function() {
            gallery.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });
        
        nextBtn.addEventListener('click', function() {
            gallery.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
        
        document.addEventListener('keydown', function(e) {
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
            const swipeThreshold = 30; 
            if (touchEndX < touchStartX - swipeThreshold) {
                gallery.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            }
            if (touchEndX > touchStartX + swipeThreshold) {
                gallery.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth'
                });
            }
        }
    }
});

// ================================================
// QUOTES SECTION
// ================================================

const quotes = [
    {
        text: "You may encounter many defeats, but you must not be defeated. In fact, it may be necessary to encounter the defeats, so you can know who you are, what you can rise from, how you can still come out of it.",
        author: "Maya Angelou"
    },
    {
        text: "I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain.",
        author: "Frank Herbert, Dune"
    },
    {
        text: "Anyone can cook. But only the fearless can be great.",
        author: "Ratatouille"
    },
    {
        text: "When you're playing a point, it has to be the most important thing in the world. And it is. But when it's behind you, it's behind you.",
        author: "Roger Federer"
    },
    {
        text: "If you think adventure is dangerous, try routine. It is lethal.",
        author: "Paul Coelho, The Alchemist"
    },
    {
        text: "You think your pain and your heartbreak are unprecedented in the history of the world, but then you read.",
        author: "James Baldwin"
    },
    {
        text: "In the depth of winter, I finally learned that within me there lay an invincible summer.",
        author: "Albert Camus"
    },
    {
    text: "The most dangerous phrase in the language is, 'We've always done it this way.'",
    author: "Grace Hopper"
    }
];

let currentQuoteIndex = -1;

// Function to get a random quote that's different from the current one
function getRandomQuote() {
    if (quotes.length === 0) return null;
    if (quotes.length === 1) return quotes[0];

    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * quotes.length);
    } while (newIndex === currentQuoteIndex);

    currentQuoteIndex = newIndex;
    return quotes[newIndex];
}

// Function to display a quote
function displayQuote() {
    const quote = getRandomQuote();
    if (quote) {
        const quoteText = document.getElementById('quoteText');
        const quoteAuthor = document.getElementById('quoteAuthor');

        if (quoteText && quoteAuthor) {
            quoteText.textContent = `"${quote.text}"`;
            quoteAuthor.textContent = `— ${quote.author}`;
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    displayQuote();
});