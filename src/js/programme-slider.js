document.querySelectorAll("[data-programme-slider]").forEach((slider) => {
  const track = slider.querySelector("[data-programme-track]");
  const previous = slider.querySelector("[data-programme-previous]");
  const next = slider.querySelector("[data-programme-next]");
  const indicators = Array.from(slider.querySelectorAll("[data-programme-indicator]"));
  const cards = Array.from(track.children);
  let activeIndex = 0;

  if (!track || !cards.length) return;

  function renderControls() {
    previous.disabled = activeIndex === 0;
    next.disabled = activeIndex === cards.length - 1;
    indicators.forEach((indicator, index) => {
      if (index === activeIndex) indicator.setAttribute("aria-current", "true");
      else indicator.removeAttribute("aria-current");
    });
  }

  function updateControls() {
    activeIndex = Math.max(0, Math.min(cards.length - 1, Math.round(track.scrollLeft / track.clientWidth)));
    renderControls();
  }

  function goTo(index) {
    activeIndex = Math.max(0, Math.min(cards.length - 1, index));
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
