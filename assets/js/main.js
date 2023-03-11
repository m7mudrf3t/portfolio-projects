// nav
let header = document.querySelector("header");

function stickyNav() {
    header.classList.toggle("onscrool", window.pageYOffset > 0);
    // make header disaper on scrool top 0
    // console.log(window.pageYOffset > 0 )
}

stickyNav();
window.addEventListener("scroll", stickyNav);

// Scroll To Top
let scrollTop = document.querySelector(".toTopBtn");
window.addEventListener("scroll", function() {
    window.addEventListener(
        "scroll",
        window.scrollY < 500 ?
        scrollTop.classList.remove("active") :
        scrollTop.classList.add("active")
    );
});

//Click event to scroll to top
scrollTop.addEventListener(
    "click",
    () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    },
    500
);

// menu btn

let menuBtn = document.querySelector(".menu-btn");
let mobileMenu = document.querySelector(".links");
menuBtn.addEventListener("click", () => menuBtn.classList.toggle("active"));
menuBtn.addEventListener("click", () => mobileMenu.classList.toggle("show"));


// find all progress circles
let progressBars = document.querySelectorAll(".circular-progress");
let skillSection = document.querySelector(".skill");

/**
 * define intersection observer
 */
const options = {
    rootMargin: "-100px",
    threshold: 0
};

const inViewPortObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        let observedEl = entry.target;

        // in viewport
        if (entry.isIntersecting) {
            animateProgress(observedEl)
        }
        // not in viewport
        else {
            let valueContainer = observedEl.querySelector(".value-container");
            valueContainer.classList.remove('value-container-complete');
        }
    });
}, options);

progressBars.forEach((progressBar) => {
    inViewPortObserver.observe(progressBar);
});



function animateProgress(progressBar) {
    // select child value container
    let valueContainer = progressBar.querySelector(".value-container");
    let progressEndValue = valueContainer.dataset.progress;
    let complete = valueContainer.classList.contains('value-container-complete');

    let i = 0;
    // increment progress angles
    if (!complete) {
        let progress = setInterval(() => {
            i++;
            valueContainer.textContent = `${[i]}%`;
            progressBar.style.background = `conic-gradient(
                var(--primary-color) ${i * 3.6}deg,
                  #cadcff ${i * 3.6}deg
              )`;
            // stop animation
            if (i == progressEndValue) {
                clearInterval(progress);
                valueContainer.classList.add('value-container-complete');
            }
        }, 10);
    }
}

// +++++++++++++++++++++++++++++++++++++++++++

// faq

//using selectors inside the element
// const questions = document.querySelectorAll(".collapse");
// console.log(questions); // null

// questions.forEach(function(question) {
//     const btn = question.querySelector(".faq-question");
//     console.log(btn); // null

//     btn.addEventListener("click", function() {
//         // console.log(question);

//         questions.forEach(function(item) {
//             if (item !== question) {
//                 item.classList.remove("show-faq");
//             }
//         });

//         question.classList.toggle("show-faq");
//     });

// });

let accordion = document.querySelector(".faq-items");
let accordionItems = accordion.querySelectorAll(".faq-item");

for (let i = 0; i < accordionItems.length; i++) {
    let questionItem = accordionItems[i].querySelector(".faq-question");
    questionItem.addEventListener("click", function() {
        if (accordionItems[i].classList.contains("show-faq")) {
            accordionItems[i].classList.remove("show-faq");
        } else {
            try {
                accordion.querySelector(".show-faq").classList.remove("show-faq");
            } catch (msg) {}
            accordionItems[i].classList.add("show-faq");
        }
    });
}

// dark mode togle

let darktoggle = document.querySelector(".darktoggle");
let darkBody = document.querySelector("body");
let faqQestion = document.querySelector(".dark-img");

window.onload = function() {
    let theme = localStorage.getItem("theme") || "light";
    if (theme === "dark") {
        darkBody.classList.add("dark");
        darktoggle.classList.add("dark");
        // faqQestion.classList.add("show-dark");
    }
};

darktoggle.addEventListener("click", function() {
    let isDark = darkBody.classList.contains("dark");

    this.classList.toggle("fa-sun");
    this.classList.toggle("fa-moon");
    darkBody.classList.toggle("dark");

    localStorage.setItem("theme", isDark ? "light" : "dark");
});

//  filter

let switcherList = document.querySelectorAll(".filter-links a");
let switcherItem = document.querySelectorAll(".project-item");
let items = Array.from(switcherItem);

switcherList.forEach((item) => {
    item.addEventListener("click", function() {
        switcherList.forEach((e) => {
            e.classList.remove("active");
            this.classList.add("active");
        });
    });
    item.addEventListener("click", function() {
        items.forEach((item) => {
            item.style.display = "none";
        });
        document.querySelectorAll(this.dataset.cat).forEach((e) => {
            e.style.display = "block";
        });
    });
});



// Wait for the page to load

window.addEventListener('load', function() {
    // Hide the preloader
    document.querySelector('.spinner').style.display = 'none';
});