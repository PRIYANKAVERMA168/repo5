
const lightbox = document.getElementById('lightbox');
const galleryItems = document.querySelectorAll('.image-container img');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeBtn = document.getElementById('close-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    const image = galleryItems[index];
    lightboxImg.src = image.src;
    lightboxCaption.textContent = image.alt;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

galleryItems.forEach((image, index) => {
    image.addEventListener('click', () => openLightbox(index));
});

closeBtn.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

function showPrev() {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    openLightbox(currentIndex);
}

function showNext() {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    openLightbox(currentIndex);
}

prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    showPrev();
});

nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    showNext();
});

document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'flex') {
        if (e.key === 'ArrowLeft') showPrev();
        else if (e.key === 'ArrowRight') showNext();
        else if (e.key === 'Escape') closeLightbox();
    }
});