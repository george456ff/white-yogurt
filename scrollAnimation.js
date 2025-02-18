document.addEventListener("DOMContentLoaded", function () {
    const textElements = document.querySelectorAll("#aboutHeading, #contactHeading, #aboutParagraph, #contactParagraph");
    const imageElements = document.querySelectorAll("#aboutImage, #contactImage");

    const observerOptions = { threshold: 0.2 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal");
            }
        });
    }, observerOptions);

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-image");
            }
        });
    }, observerOptions);

    textElements.forEach((el) => observer.observe(el));
    imageElements.forEach((el) => imageObserver.observe(el));
});