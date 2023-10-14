/* Slide */
const headerCarousel = document.getElementById('headerCarousel');
let currentIndex = 0;

function showImage(index) {
    headerCarousel.style.transform = `translateX(${-index * 100}%)`;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % headerCarousel.children.length;
    showImage(currentIndex);
}

setInterval(nextImage, 1000); 
