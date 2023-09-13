/* FORMULARIO PARA PUBLICAR ADOPCION */
const btnPublicar = document.querySelector("button#publicarAdopcion");
const nombreGato = document.querySelector("input#nombreGato");
const datoVet = document.querySelector("input#datoVet");
const historiaGato = document.querySelector("input#historiaGato");
const datos6 = document.querySelector("input#datos6");
const datos7 = document.querySelector("input#datos7");
const datos8 = document.querySelector("input#datos8");
const datos9 = document.querySelector("input#datos9");
const fechaNac = document.querySelector("input#fechaNac");

function publicacionHecha() {
  Swal.fire({
    title: "Su publicación ha sido realizada",
    icon: "success",
    confirmButtonText: "Ok",
  });
}
function camposVacios() {
  Swal.fire({
    title: "Debe completar todos los campos",
    icon: "error",
    confirmButtonText: "Reintentar",
  });
}

function limpiarCampos() {
  nombreGato.value = "";
  datoVet.value = "";
  historiaGato.value = "";
  datos6.value = "";
  datos7.value = "";
  datos8.value = "";
  datos9.value = "";
  fechaNac.value = "";
}

function publicarGato() {
  if (
    nombreGato.value == "" ||
    datoVet.value == "" ||
    historiaGato.value == "" ||
    datos6.value == "" ||
    datos7.value == "" ||
    datos8.value == "" ||
    datos9.value == "" ||
    fechaNac.value == ""
  ) {
    camposVacios();
  } else {
    publicacionHecha();
    limpiarCampos();
  }
}

btnPublicar.addEventListener("click", publicarGato);
