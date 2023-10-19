/* Slide */
/* const headerCarousel = document.getElementById('headerCarousel');
let currentIndex = 0;

function showImage(index) {
    headerCarousel.style.transform = `translateX(${-index * 100}%)`;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % headerCarousel.children.length;
    showImage(currentIndex);
}

setInterval(nextImage, 1000);  */

/* Modal "El lugar" */
function mostrarModal(texto) {
    var modal = document.getElementById("miModal");
    var contenidoModal = document.getElementById("contenidoModal");


    modal.style.display = "block";
    contenidoModal.innerHTML = "<p>" + texto + "</p>";
}

function cerrarModal() {
    var modal = document.getElementById("miModal");

    
    modal.style.display = "none";
}
