document.querySelectorAll('nav.Bar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        if (href === "index.html") {
            window.location.href = href;
        } else {
            e.preventDefault();
            const targetSection = document.querySelector(href);
            targetSection.scrollIntoView({
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    });
});

const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-up');

const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
    entries, 
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('fade-in');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});
