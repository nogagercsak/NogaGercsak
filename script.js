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
