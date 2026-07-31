(function () {
  var root = document.documentElement;
  if (!root.classList.contains("intro-active")) return;

  var intro = document.getElementById("intro");
  if (!intro) {
    root.classList.remove("intro-active");
    return;
  }

  // The intro always reveals the top of the page, never a restored scroll position.
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  window.scrollTo(0, 0);

  var HOLD = 3000; // signature writes, then a beat, then we hand over
  var FADE = 800;  // must match the .intro transition in style.css
  var started = false;
  var finished = false;
  var timer;

  function finish() {
    if (finished) return;
    finished = true;
    clearTimeout(timer);
    intro.classList.add("is-done");
    try { sessionStorage.setItem("la-intro-seen", "1"); } catch (e) {}
    setTimeout(function () { root.classList.remove("intro-active"); }, FADE);

    intro.removeEventListener("click", finish);
    window.removeEventListener("keydown", finish);
    window.removeEventListener("wheel", finish);
    window.removeEventListener("touchstart", finish);
  }

  function start() {
    if (started || finished) return;
    started = true;
    intro.classList.add("is-writing");
    timer = setTimeout(finish, HOLD);
  }

  // Any deliberate input skips straight through.
  intro.addEventListener("click", finish);
  window.addEventListener("keydown", finish);
  window.addEventListener("wheel", finish, { passive: true });
  window.addEventListener("touchstart", finish, { passive: true });

  // Hold the pen until the script face has loaded, or the fallback would be
  // written out and then swapped mid-animation.
  if (document.fonts && document.fonts.load) {
    setTimeout(start, 1200);
    document.fonts.load('1em "Italianno"').then(start, start);
  } else {
    start();
  }
})();
