const images = ["gallery-image-1.jpg", "gallery-image-2.jpg", "gallery-image-3.jpg", "gallery-image-4.jpg", "gallery-image-5.jpg", "gallery-image-6.jpg", 
"gallery-image-7.jpg", "gallery-image-8.jpg", "gallery-image-9.jpg", "gallery-image-10.jpg", "gallery-image-11.jpg", "gallery-image-12.jpg", 
"gallery-image-13.jpg", "gallery-image-14.jpg", "gallery-image-15.jpg", "gallery-image-16.jpg", "gallery-image-17.jpg", "gallery-image-18.jpg"]; 
let currentIndex = 0;

let modalOpen = false;

function showImage(index) {
    currentIndex = index;
    const modal = document.getElementById('modal');
    const fullImage = document.getElementById('fullImage');
    fullImage.src = images[currentIndex];
    modal.style.display = 'flex';
    modalOpen = true;

    document.addEventListener('keydown', handleKeyDown);
}

function closeImage() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    modalOpen = false;

    document.removeEventListener('keydown', handleKeyDown);
}

function nextImage(event) {
    event.stopPropagation();
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('fullImage').src = images[currentIndex];
}

function prevImage(event) {
    event.stopPropagation();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById('fullImage').src = images[currentIndex];
}

function handleKeyDown(event) {
    if (modalOpen) {
        if (event.key === 'ArrowRight') {
            nextImage();
        } else if (event.key === 'ArrowLeft') {
            prevImage();
        } else if (event.key === 'Escape') {
            closeImage();
        }
    }
}