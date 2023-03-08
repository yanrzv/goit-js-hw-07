import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map((el) => {
    return `<a class="gallery__item" href="${el.original}">
  <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
</a>
`  
})
    .join('');

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', event => {
    event.preventDefault();

    const lightbox = new SimpleLightbox('.gallery__item');
    lightbox.options.captionsData = 'alt';
    lightbox.options.captionDelay = 250;
    
})