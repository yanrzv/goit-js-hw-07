import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map((el) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${el.original}">
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
    />
  </a>
</div>
`  
})
    .join('');

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', event => {
    event.preventDefault();

    const isGalleryImage = event.target.classList.contains('gallery__image');

    if(!isGalleryImage) {
        return;
    }

    basicLightbox.create(`
		<img width="1280" src="${event.target.dataset.source}">
	`).show()
})

