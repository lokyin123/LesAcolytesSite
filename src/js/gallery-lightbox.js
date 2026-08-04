const lightbox = document.querySelector("[data-gallery-lightbox]");

if (lightbox) {
  const closeButton = lightbox.querySelector("[data-gallery-close]");
  let activeThumbnail = null;
  let expandedImage = null;

  document.querySelectorAll("[data-gallery-image]").forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      activeThumbnail = thumbnail;
      expandedImage = document.createElement("img");
      expandedImage.dataset.galleryExpanded = "";
      expandedImage.src = thumbnail.dataset.imageSrc;
      expandedImage.alt = thumbnail.dataset.imageAlt;
      lightbox.appendChild(expandedImage);
      lightbox.showModal();
    });
  });

  closeButton.addEventListener("click", () => lightbox.close());
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) lightbox.close();
  });
  lightbox.addEventListener("close", () => {
    if (expandedImage) expandedImage.remove();
    expandedImage = null;
    if (activeThumbnail) activeThumbnail.focus();
  });
}
