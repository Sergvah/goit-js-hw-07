"use strict";
import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRefs = document.querySelector(".gallery");

function galleryMark(params) {
  const markGal = params
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="#">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
  return markGal;
  console.log(markGal);
}
console.log(galleryMark(galleryItems));
galleryRefs.insertAdjacentHTML("beforeend", galleryMark(galleryItems));
console.log(galleryRefs);

galleryRefs.addEventListener("click", onBigPhoto);
function onBigPhoto(evt) {
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `
    <img src="${evt.target.dataset.source}" width = '800' height = '600'>
`,
    {
      onShow: () => {
        window.addEventListener("keydown", onEscapeClose);
      },
      onClose: () => {
        window.removeEventListener("keydown", onEscapeClose);
      },
    }
  );
  function onEscapeClose(evt) {
    if (evt.key === "Escape") {
      instance.close();
    }
  }
  instance.show();
}
