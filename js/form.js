/* FORMULARIO DE ADOPCIÓN */
const btnForm = document.querySelector("button#enviar");
const input = document.querySelector("#input");
const input1 = document.querySelector("input#input1");
const input2 = document.querySelector("input#input2");
const input3 = document.querySelector("input#input3");
const input4 = document.querySelector("input#input4");
const input5 = document.querySelector("input#input5");
const datos1 = document.querySelector("input#datos1");
const datos2 = document.querySelector("input#datos2");
const datos3 = document.querySelector("input#datos3");
const datos4 = document.querySelector("input#datos4");
const datos5 = document.querySelector("input#datos5");

function camposVacios() {
  Swal.fire({
    title: "Debe completar todos los campos",
    icon: "error",
    confirmButtonText: "Reintentar",
  });
}
function formEnviado() {
  Swal.fire({
    title: "Su formulario ha sido enviado",
    icon: "success",
    confirmButtonText: "Ok",
  });
}

/* FORMULARIO DE ADOPCION */
function limpiarCampos() {
  input1.value = "";
  input2.value = "";
  input3.value = "";
  input4.value = "";
  input5.value = "";
  datos1.value = "";
  datos2.value = "";
  datos3.value = "";
  datos4.value = "";
  datos5.value = "";
}

function confirmar() {
  if (
    input1.value == "" ||
    input2.value == "" ||
    input3.value == "" ||
    input4.value == "" ||
    input5.value == "" ||
    datos1.value == "" ||
    datos2.value == "" ||
    datos3.value == "" ||
    datos4.value == "" ||
    datos5.value == ""
  ) {
    camposVacios();
  } else {
    formEnviado();
    limpiarCampos();
  }
}

btnForm.addEventListener("click", confirmar);
