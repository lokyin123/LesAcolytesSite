const menu = document.querySelector("#main-navigation");
const menuToggle = document.querySelector(".menu-toggle");
const menuClose = document.querySelector(".menu-close");
const mobileQuery = window.matchMedia("(max-width: 650px)");

if (menu && menuToggle && menuClose) {
  function focusableItems() {
    return Array.from(menu.querySelectorAll("a[href], button:not([disabled])"));
  }

  function openMenu() {
    menu.classList.add("is-open");
    menu.inert = false;
    menu.removeAttribute("aria-hidden");
    menuToggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("menu-open");
    menuClose.focus();
  }

  function closeMenu({ restoreFocus = true } = {}) {
    menu.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
    if (mobileQuery.matches) {
      menu.inert = true;
      menu.setAttribute("aria-hidden", "true");
    }
    if (restoreFocus) menuToggle.focus();
  }

  function syncMode() {
    if (mobileQuery.matches) closeMenu({ restoreFocus: false });
    else {
      menu.classList.remove("is-open");
      menu.inert = false;
      menu.removeAttribute("aria-hidden");
      menuToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    }
  }

  menuToggle.addEventListener("click", openMenu);
  menuClose.addEventListener("click", () => closeMenu());
  menu.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => closeMenu({ restoreFocus: false }))
  );
  document.addEventListener("keydown", (event) => {
    if (!menu.classList.contains("is-open")) return;
    if (event.key === "Escape") {
      closeMenu();
      return;
    }
    if (event.key !== "Tab") return;
    const items = focusableItems();
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
  mobileQuery.addEventListener("change", syncMode);
  syncMode();
}
