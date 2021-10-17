import { galleryItems } from './gallery-items.js';

// Change code below this line


const galleryDiv = document.querySelector('.gallery')



// 1. Создание и рендер разметки по массиву данных galleryItems 
//и предоставленному шаблону элемента галереи.

const galleryMarkup = createPhotoMarkup(galleryItems);

galleryDiv.insertAdjacentHTML('beforeend', galleryMarkup);

function createPhotoMarkup(elements) {
  return elements
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
  <a
    class="gallery__link"
    data-lightbox="image-1"
    href="${original}" onclick="return false;"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `;
    })
    .join('');
}

// 2. Реализация делегирования на div.gallery
// и получение url большого изображения.

galleryDiv.addEventListener('click', onGalleryClick)

function onGalleryClick(e) {

    const thisIsImgage = e.target.classList.contains('gallery__image');
    
    if (!thisIsImgage)
    {
        return;
    }
const original =e.target.dataset.source;

  const instance = basicLightbox.create(`<img src="${original}">`);
  instance.show();
  console.log(instance);
  instance.show(() => console.log('lightbox now visible'))
    console.log(e.target.dataset.source);
}


const visible = basicLightbox.visible()
console.log(visible);