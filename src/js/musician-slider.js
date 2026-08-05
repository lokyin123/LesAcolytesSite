document.querySelectorAll(".musician__portrait").forEach((slider) => {
  const track = slider.querySelector("[data-musician-track]");
  if (!track) return;
  const previous = slider.querySelector("[data-musician-previous]");
  const next = slider.querySelector("[data-musician-next]");
  const slides = Array.from(track.children);
  const indicators = Array.from(slider.querySelectorAll("[data-musician-indicator]"));
  let activeIndex = 0;

  if (slides.length < 2) return;

  function updateControls() {
    const nextIndex = Math.round(track.scrollLeft / track.clientWidth);
    activeIndex = Math.max(0, Math.min(slides.length - 1, nextIndex));
    previous.disabled = activeIndex === 0;
    next.disabled = activeIndex === slides.length - 1;
    indicators.forEach((indicator, index) => {
      if (index === activeIndex) indicator.setAttribute("aria-current", "true");
      else indicator.removeAttribute("aria-current");
    });
  }

  function goTo(index) {
    activeIndex = Math.max(0, Math.min(slides.length - 1, index));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({ left: activeIndex * track.clientWidth, behavior: reduceMotion ? "auto" : "smooth" });
    updateControls();
  }

  previous.addEventListener("click", () => goTo(activeIndex - 1));
  next.addEventListener("click", () => goTo(activeIndex + 1));
  indicators.forEach((indicator, index) => indicator.addEventListener("click", () => goTo(index)));
  track.addEventListener("scroll", updateControls, { passive: true });
  window.addEventListener("resize", () => {
    track.scrollTo({ left: activeIndex * track.clientWidth, behavior: "auto" });
    updateControls();
  });
  updateControls();
});
