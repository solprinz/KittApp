const cardsGatos = document.querySelector("div#cardsGatos");
const cards = [];
const gatos = [
  {
    imagen: "../img/gato1.JPEG",
    nombre: "Atenea",
    edad: "3 años",
    fecha: "10/09/2023",
    genero: "hembra",
    ubicacion: "Santa Fe",
  },
  {
    imagen: "../img/gato2.JPEG",
    nombre: "Minerva",
    edad: "4 meses",
    fecha: "12/09/2023",
    genero: "hembra",
    ubicacion: "Entre Rios",
  },
  {
    imagen: "../img/gato3.JPEG",
    nombre: "Flor",
    edad: "1 año",
    fecha: "05/09/2023",
    genero: "hembra",
    ubicacion: "Rosario",
  },
  {
    imagen: "../img/gato4.JPEG",
    nombre: "Pícaro",
    edad: "3 años",
    fecha: "26/08/2023",
    genero: "macho",
    ubicacion: "CABA",
  },
  {
    imagen: "../img/gato5.JPEG",
    nombre: "Ciccio",
    edad: "8 meses",
    fecha: "30/09/2023",
    genero: "macho",
    ubicacion: "La Plata",
  },
  {
    imagen: "../img/gato6.JPEG",
    nombre: "Tigris",
    edad: "3 meses",
    fecha: "12/09/2023",
    genero: "macho",
    ubicacion: "Córdoba",
  },
  {
    imagen: "../img/gato7.JPEG",
    nombre: "Tilin",
    edad: "1 año",
    fecha: "20/08/2023",
    genero: "macho",
    ubicacion: "Córdoba",
  },
  {
    imagen: "../img/gato8.JPEG",
    nombre: "Pomelo",
    edad: "1 año",
    fecha: "20/08/2023",
    genero: "macho",
    ubicacion: "Rosario",
  },
  {
    imagen: "../img/gato9.JPEG",
    nombre: "Manchi",
    edad: "8 meses",
    fecha: "09/09/2023",
    genero: "hembra",
    ubicacion: "Pilar",
  },
  {
    imagen: "../img/gato10.JPEG",
    nombre: "Igor",
    edad: "6 meses",
    fecha: "11/09/2023",
    genero: "macho",
    ubicacion: "Corrientes",
  },
  {
    imagen: "../img/gato11.JPEG",
    nombre: "Lucy",
    edad: "6 meses",
    fecha: "12/09/2023",
    genero: "hembra",
    ubicacion: "Carlos Paz",
  },
  {
    imagen: "../img/gato12.JPEG",
    nombre: "Noche",
    edad: "2 meses",
    fecha: "05/09/2023",
    genero: "hembra",
    ubicacion: "Gualeguaychu",
  },
  {
    imagen: "../img/gato13.JPEG",
    nombre: "Botas",
    edad: "2 años",
    fecha: "18/09/2023",
    genero: "macho",
    ubicacion: "CABA",
  },
];

function retornoCardHTML(gato) {
  return `
  <div class="col-md-4 col-sm-2 card m-3" style="width: 18rem">
                <div ><img src=${gato.imagen} class="card-img-top" "</div>
                <div class="card-body">
                  <h2 class="card-title text-center mb-0">${gato.nombre}</h2>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item"><strong>Sexo:</strong> ${gato.genero}</li>
                  <li class="list-group-item"><strong>Edad:</strong> ${gato.edad}</li>
                  <li class="list-group-item">
                    <strong>Ubicación:</strong> ${gato.ubicacion}
                  </li>
                </ul>
                <p class="small text-end">Publicación: ${gato.fecha}</p>
                <div class="card-body text-center">
                  <a class="btn btn-primary" href="/pages/formulario.html">
                ¡Quiero adoptarlo/a!</button></a>
                </div>
              </div>
              `;
}

function cargarCards(array) {
  cardsGatos.innerHTML = "";
  array.forEach((gato) => {
    cardsGatos.innerHTML += retornoCardHTML(gato);
  });
}

cargarCards(gatos);
