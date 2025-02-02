function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
}

function scrollGallery(direction) {
    const galleryWrapper = document.querySelector('.gallery-wrapper');
    const scrollAmount = galleryWrapper.clientWidth / 3; // Adjust scroll amount to show 3 images at a time
    galleryWrapper.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}