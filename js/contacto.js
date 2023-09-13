/* FORMULARIO DE CONTACTO */
const nombre = document.querySelector("input#nombre");
const email = document.querySelector("input#email");
const mensaje = document.querySelector("input#mensaje");
const btnConsulta = document.querySelector("button#btnConsulta");
const btnNewsletter = document.querySelector("button#btnNewsletter");
const newsletter = document.querySelector("input#newsletter");

function msjEnviado() {
  Swal.fire({
    title: "Su mensaje ha sido enviado",
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

function limpiarCamposContacto() {
  nombre.value = "";
  email.value = "";
  mensaje.value = "";
}

function enviarConsulta() {
  if (nombre.value == "" || email.value == "" || mensaje.value == "") {
    camposVacios();
  } else {
    msjEnviado();
    limpiarCamposContacto();
  }
}

btnConsulta.addEventListener("click", enviarConsulta);

function emailInvalido() {
  Swal.fire({
    title: "Debe ingresar un e-mail válido",
    icon: "error",
    confirmButtonText: "Reintentar",
  });
}

function suscripcion() {
  Swal.fire({
    title: "¡Gracias por suscribirse!",
    icon: "success",
    confirmButtonText: "Ok",
  });
}

function limpiarCampoNewsletter() {
  newsletter.value = "";
}

function suscribirse() {
  if (newsletter.value == "") {
    emailInvalido();
  } else {
    suscripcion();
    limpiarCampoNewsletter();
  }
}
btnNewsletter.addEventListener("click", suscribirse);
