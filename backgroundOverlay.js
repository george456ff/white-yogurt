if (window.innerWidth > 768) {
    // Set initial background position on page load
    window.addEventListener("DOMContentLoaded", function () {
    const headingDiv = document.querySelector(".headingDiv");
    if (headingDiv) headingDiv.style.backgroundPositionY = "-100px";
    });

    // Update background position and opacity on scroll
    window.addEventListener("scroll", function () {
    const headingDiv = document.querySelector(".headingDiv");
    const offset = window.pageYOffset;

    if (headingDiv) {
        headingDiv.style.backgroundPositionY = (-100 - offset * 0.5) + "px";
        const maxScroll = headingDiv.offsetHeight; // Height of the headingDiv
        const opacity = Math.min(offset / maxScroll, 0.7); // Cap opacity at 0.7 (70%)
        headingDiv.style.setProperty('--overlay-opacity', opacity);
    }
    });
}