/* Modal "El lugar" */
function mostrarModal(texto) {
    console.log("Modal mostrado");
    var modal = document.getElementById("miModal");
    var contenidoModal = document.getElementById("contenidoModal");


    modal.style.display = "block";
    contenidoModal.innerHTML = "<p>" + texto + "</p>";
}

function cerrarModal() {
    var modal = document.getElementById("miModal");

    
    modal.style.display = "none";
}
