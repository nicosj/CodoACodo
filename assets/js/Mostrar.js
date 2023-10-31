export class Mostrar {
    constructor(ID) {
        this.container = document.getElementById(ID);
    }

    render = function (texto) {
        this.container.innerHTML += `<div class="items"><img  src="${texto}"/></div>`;
        return null;
    };
}