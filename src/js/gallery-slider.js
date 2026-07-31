document.querySelectorAll("[data-gallery-slider]").forEach((slider) => {
  const track = slider.querySelector("[data-gallery-track]");
  const previous = slider.querySelector("[data-gallery-previous]");
  const next = slider.querySelector("[data-gallery-next]");
  const slides = Array.from(track.children);
  const indicators = Array.from(slider.querySelectorAll("[data-gallery-indicator]"));
  let activeIndex = 0;

  if (!slides.length) return;

  function renderControls() {
    previous.disabled = activeIndex === 0;
    next.disabled = activeIndex === slides.length - 1;
    indicators.forEach((indicator, index) => {
      if (index === activeIndex) indicator.setAttribute("aria-current", "true");
      else indicator.removeAttribute("aria-current");
    });
  }

  function updateControls() {
    activeIndex = Math.max(0, Math.min(slides.length - 1, Math.round(track.scrollLeft / track.clientWidth)));
    renderControls();
  }

  function goTo(index) {
    activeIndex = Math.max(0, Math.min(slides.length - 1, index));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({ left: activeIndex * track.clientWidth, behavior: reduceMotion ? "auto" : "smooth" });
    renderControls();
  }

  previous.addEventListener("click", () => goTo(activeIndex - 1));
  next.addEventListener("click", () => goTo(activeIndex + 1));
  indicators.forEach((indicator, index) => indicator.addEventListener("click", () => goTo(index)));
  track.addEventListener("scroll", updateControls, { passive: true });
  window.addEventListener("resize", () => {
    track.scrollTo({ left: activeIndex * track.clientWidth, behavior: "auto" });
    renderControls();
  });
  updateControls();
});
