document.querySelectorAll("[data-home-highlight-slider]").forEach((slider) => {
  const track = slider.querySelector("[data-home-highlight-track]");
  const previous = slider.querySelector("[data-home-highlight-previous]");
  const next = slider.querySelector("[data-home-highlight-next]");
  const slides = Array.from(track.children);
  const indicators = Array.from(slider.querySelectorAll("[data-home-highlight-indicator]"));
  const upcoming = slider.querySelector("[data-home-highlight-upcoming]");
  const fallback = slider.querySelector("[data-home-highlight-fallback]");
  let activeIndex = 0;

  const isLocalPreview = ["localhost", "127.0.0.1"].includes(window.location.hostname);
  const previewFallback = new URLSearchParams(window.location.search).get("preview") === "fallback";
  if (isLocalPreview && previewFallback && upcoming && fallback) {
    upcoming.hidden = true;
    fallback.hidden = false;
  }

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
