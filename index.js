/* Verificamos si es un numero   */
const numRegx = /^[0-9]+$/;

/*
   console.log("Aqui ando")
   function validar() {
   let nombre = document.querySelector('input[name="nombre"]').value;
   let precioInput = document.getElementById("precio");
   let precioValor = precioInput.value.trim() /* Eliminamos los espacios */
/*
   let precio = document.querySelector('input[name="precio"]').value;
   if(!numRegx.test(precioValor)){
     alert("El precio debe ser un numero")
   }
   let cantidad = document.querySelector('input[name="cantidad"]').value;
   let descripcion = document.querySelector( 'textarea[name="descripcion"]' ).value;
   let categoria = document.querySelector( 'select[name="categoria"]' ).value;
   let estado = document.querySelector('input[name="estado"]').value;

   if ( nombre == "" || precio == "" || cantidad == "" || descripcion == "" || categoria == "" || estado == "" ) { 
       alert("Todos los campos son obligatorios");
   } else {
       alert("Datos enviados correctamente");
   }
 } 
 */
const d = document;
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
      }

      if (tipoElemento === "checkbox" && !elemento.checked) {
        validacion = false;
        elemento.style.setProperty("outline", "1px solid red");
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
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Algo salió mal !",
      footer: "<h3>Verifique que no falte algún campo</h3>",
    });
    return;
  } else {
    alert("Datos enviados correctamente");
  }
};
