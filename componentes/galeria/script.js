let imagen1 = {
    nombre: "Playa Tropical",
    descripcion: "Hermosa playa con palmeras",
    url: "https://img.freepik.com/foto-gratis/paisaje-forestal_71767-127.jpg"
};

let imagen2 = {
    nombre: "Montañas Verdes",
    descripcion: "Paisaje montañoso con vegetación",
    url: "https://img.freepik.com/fotos-premium/hermosos-paisajes-paisajes-naturales-hacen-que-personas-relajen-disfruten-fondo-pantalla_917506-214429.jpg"
};

let galeriaDeImagenes = [imagen1, imagen2]

function mostrarDetalles(imagen) {
    alert(`Nombre: ${imagen.nombre}\nDescripcion: ${imagen.descripcion}`)
}

document.addEventListener("DOMContentLoaded", function () {
    let galleryContainer = document.getElementById("gallery-container");

    galeriaDeImagenes.forEach(function (imagen) {
        let imageCard = document.createElement("div");
        imageCard.className = "image-card";

        let imageElement = document.createElement("img");
        imageElement.src = imagen.url;
        imageElement.alt = imagen.nombre;

        imageCard.addEventListener("click", function () {
            mostrarDetalles(imagen);
        });

        imageCard.appendChild(imageElement);
        galleryContainer.appendChild(imageCard);
    })
})