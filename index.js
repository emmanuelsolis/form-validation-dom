   /* Verificamos si es un numero   */
   const numRegx = /^[0-9]+$/;

   
   function validar() {
       console.log("Aqui ando")
   let nombre = document.querySelector('input[name="nombre"]').value;
   let precioInput = document.getElementById("precio");
   let precioValor = precioInput.value.trim() /* Eliminamos los espacios */
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
 const d = document;
 const colorValidados = (idFormulario) => {
    const listaCampos = d.querySelectorAll(`#${idFormulario} [data-validate]` );
       console.log(listaCampos)
    }

 const enviarFormulario = () => {
    event.preventDefault();
    colorValidados('formValidacion')
 }