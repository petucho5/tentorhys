// Animaciones adicionales con scroll
document.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".fade-in, .slide-up");
  const triggerBottom = window.innerHeight * 0.8;
  elements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("visible");
    }
  });
});
