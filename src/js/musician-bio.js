document.querySelectorAll("[data-musician-bio-toggle]").forEach((toggle) => {
  const dialog = document.getElementById(toggle.getAttribute("aria-controls"));
  const closes = dialog?.querySelectorAll("[data-musician-bio-close]");
  if (!dialog || !closes?.length) return;

  let previousFocus = null;
  let previousDocumentOverflow = "";
  let previousBodyOverflow = "";
  let isClosing = false;

  const finishClose = () => {
    if (!dialog.hasAttribute("open")) return;
    dialog.classList.remove("is-closing");
    if (typeof dialog.close === "function") dialog.close();
    else dialog.removeAttribute("open");
  };

  const requestClose = () => {
    if (!dialog.hasAttribute("open") || isClosing) return;
    isClosing = true;
    dialog.classList.add("is-closing");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finishClose();
      return;
    }

    dialog.addEventListener("transitionend", finishClose, { once: true });
    window.setTimeout(finishClose, 260);
  };

  toggle.addEventListener("click", () => {
    previousFocus = toggle;
    isClosing = false;
    dialog.classList.add("is-opening");
    dialog.classList.remove("is-closing");
    previousDocumentOverflow = document.documentElement.style.overflow;
    previousBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
    window.requestAnimationFrame(() => dialog.classList.remove("is-opening"));
    closes[0].focus();
  });

  closes.forEach((close) => {
    close.addEventListener("click", () => {
      requestClose();
    });
  });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) requestClose();
  });

  dialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    requestClose();
  });

  dialog.addEventListener("close", () => {
    isClosing = false;
    document.documentElement.style.overflow = previousDocumentOverflow;
    document.body.style.overflow = previousBodyOverflow;
    previousFocus?.focus();
  });
});
