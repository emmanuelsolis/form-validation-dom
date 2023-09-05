


const validarCampos = (idFormulario) => {
  let listaCampos = d.querySelectorAll(`#${idFormulario} [data-validate]`);
  let validacion = true;
  if (listaCampos.length > 0) {
    listaCampos.forEach((elemento) => {
      const tipoElemento = elemento.getAttribute("type");
      if (elemento.value === "") {
        validacion = false;
        elemento.style.setProperty("border", "1px solid red");
        setTimeout(() => {
          elemento.style.setProperty("border", "");
        }, 2000);
      }else {
         elemento.style.setProperty("border", "1px solid green");
         setTimeout(() => {
            elemento.style.setProperty("border", "");
         }, 2000);
      }

      if (tipoElemento === "checkbox" && !elemento.checked) {
        validacion = false;
        elemento.style.setProperty("outline", "1px solid red");
        setTimeout(() => {
          elemento.style.setProperty("outline", "");
        }, 2000);
      }else {
         elemento.style.setProperty("outline", "1px solid green");
         setTimeout(() => {
            elemento.style.setProperty("outline", "");
         }, 2000);
      }
    });
  }
   return validacion;
};

const enviarFormulario = () => {
  event.preventDefault();
  if (!validarCampos('formValidacion')) {
     setTimeout (() => {
         alert("Todos los campos son obligatorios");
       }, 1000);
  } else {
    alert("Datos enviados correctamente");
  }
};
