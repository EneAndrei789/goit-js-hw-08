    // Add imports above this line
    import { galleryItems } from './gallery-items';
    // Change code below this line

    console.log(galleryItems);


    import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

// Selectează lista din DOM
const galleryList = document.querySelector('.gallery');

// Generează marcajul HTML pentru galerie
const galleryMarkup = galleryItems.map(({ preview, original, description }) => `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
  </li>
`).join('');

// Inserează marcajul în DOM
galleryList.innerHTML = galleryMarkup;

// Inițializează SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
