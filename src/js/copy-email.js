document.querySelectorAll("[data-copy-email]").forEach((fallback) => {
  const email = fallback.dataset.email || fallback.textContent.trim();
  const status = fallback.parentElement.querySelector("[data-copy-email-status]");
  const button = document.createElement("button");
  let statusTimer;

  button.type = "button";
  button.className = "copy-email";
  button.setAttribute("aria-label", `Copy email address ${email}`);
  button.innerHTML = `<span>${email}</span><svg class="copy-email__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="8" y="8" width="11" height="11" rx="1"></rect><path d="M16 8V5H5v11h3"></path></svg>`;
  fallback.replaceWith(button);

  const showStatus = (message) => {
    window.clearTimeout(statusTimer);
    status.textContent = message;
    statusTimer = window.setTimeout(() => {
      status.textContent = "";
    }, 2400);
  };

  const copyWithFallback = () => {
    const field = document.createElement("textarea");
    field.value = email;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    const copied = document.execCommand("copy");
    field.remove();
    return copied;
  };

  button.addEventListener("click", async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
      } else if (!copyWithFallback()) {
        throw new Error("Copy unavailable");
      }
      showStatus("Copied");
    } catch {
      button.replaceWith(fallback);
      status.textContent = "Select and copy the address";
    }
  });
});
