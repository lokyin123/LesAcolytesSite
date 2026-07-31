const lightbox = document.querySelector("[data-gallery-lightbox]");

if (lightbox) {
  const expandedImage = lightbox.querySelector("[data-gallery-expanded]");
  const closeButton = lightbox.querySelector("[data-gallery-close]");
  let activeThumbnail = null;

  document.querySelectorAll("[data-gallery-image]").forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      activeThumbnail = thumbnail;
      expandedImage.src = thumbnail.dataset.imageSrc;
      expandedImage.alt = thumbnail.dataset.imageAlt;
      lightbox.showModal();
    });
  });

  closeButton.addEventListener("click", () => lightbox.close());
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) lightbox.close();
  });
  lightbox.addEventListener("close", () => {
    expandedImage.src = "";
    if (activeThumbnail) activeThumbnail.focus();
  });
}
