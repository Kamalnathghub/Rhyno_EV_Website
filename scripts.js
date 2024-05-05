

document.addEventListener("DOMContentLoaded", function() {
    const headline = document.getElementById("headline");
    const words = ["Style.","Elegance.", "Minimalism.", "Comfort."];
    let currentWordIndex = 0;
    let letterIndex = 0;
    let intervalId = null;

    function updateHeadline() {
        const firstLine = `Let's Elevate Your Ride Experience With Rhyno <br> Where Superiority Meets `;
        const secondLine = ` ${words[currentWordIndex].slice(0, letterIndex)}`;
        headline.innerHTML = `${firstLine}${secondLine}`;

        letterIndex++;
        if (letterIndex > words[currentWordIndex].length) {
            letterIndex = 0;
            currentWordIndex = (currentWordIndex + 1) % words.length;
        }
    }

    function startInterval() {
        intervalId = setInterval(updateHeadline, 300); 
    }

    function stopInterval() {
        clearInterval(intervalId);
    }

    startInterval(); // Start the letter-changing process

    // Pause the letter-changing when hovering over the headline
    headline.addEventListener("mouseenter", stopInterval);
    headline.addEventListener("mouseleave", startInterval);
});

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.image-item');
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('image-visible');
                observer.unobserve(entry.target); 
            }
        });
    };

// Observer options
    const observerOptions = {
        root: null, // observing with respect to the viewport
        rootMargin: '0px',
        threshold: 0.5 // Adjust this if necessary to trigger earlier or later
    };

// Create an observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

// Attach observer to each image
    images.forEach(img => {
        observer.observe(img);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const carouselItems = document.querySelectorAll('.carousal-item');

    const observerOptions = {
        root: null, // observing with respect to the viewport
        rootMargin: '0px',
        threshold: 0.5 // Adjust this if necessary to trigger earlier or later
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, observerOptions);

    carouselItems.forEach(item => {
        observer.observe(item);
    });
});

