// gsap.from(".stagger", {
//   opacity: 0,
//   duration: 1,
//   y: -100,
//   stagger: 0.6,
// });
// gsap.from(".wrapper-image", {
//   opacity: 0,
//   duration: 1.5,
//   y: 100,
//   delay: 0,
// });

// Select all elements with class "js-scroll"
const scrollElements = document.querySelectorAll(".js-scroll");

// Check if element is in view (within 1/dividend of the viewport height)
function isElementInView(el, dividend = 1) {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
}

// Check if element is out of view (above the viewport)
function isElementOutOfView(el) {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Add "scrolled" class to element
function displayScrollElement(element) {
    element.classList.add("scrolled");
}

// Remove "scrolled" class from element
function hideScrollElement(element) {
    element.classList.remove("scrolled");
}

// Handle scroll animation for all scrollElements
function handleScrollAnimation() {
    scrollElements.forEach((el) => {
        if (isElementInView(el, 1.25)) {
            displayScrollElement(el); // If element is in view, add "scrolled" class
        } else if (isElementOutOfView(el)) {
            hideScrollElement(el); // If element is out of view, remove "scrolled" class
        }
    });
}

// Listen for scroll event on window
window.addEventListener("scroll", handleScrollAnimation);