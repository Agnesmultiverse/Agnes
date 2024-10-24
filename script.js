// Scroll effects for revealing sections
document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.collection-container');
    sections.forEach(section => {
        const position = section.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
            section.classList.add('active');
        }
    });
});

// Add click-to-expand effect on images in gallery
const galleries = document.querySelectorAll('.gallery img');
galleries.forEach(image => {
    image.addEventListener('click', function() {
        window.open(this.src, '_blank');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const projectPreviews = document.querySelectorAll('.project-preview');

    const options = {
        threshold: 0.2  // When 20% of the section is in view
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); // Add active class when in view
            }
        });
    }, options);

    projectPreviews.forEach(preview => {
        observer.observe(preview); // Observe each project preview
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const projectLinks = document.querySelectorAll('.project-preview a');

    // Function to generate a random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Apply random color on hover and reset when the cursor leaves
    projectLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            const randomColor = getRandomColor();
            this.style.color = randomColor; // Apply random color
            this.style.textShadow = `2px 2px 8px ${randomColor}`; // Apply the same color as the text shadow
        });

        link.addEventListener('mouseleave', function() {
            this.style.color = ''; // Reset to the inherited color
            this.style.textShadow = ''; // Reset the text shadow
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Add the 'show' class to trigger the loading effect after page load
    const noteContent = document.querySelector('.note-content');
    setTimeout(function() {
        noteContent.classList.add('show');
    }, 500); // Delay of 500ms for a smoother effect
});

