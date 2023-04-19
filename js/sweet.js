const btnEnviar = document.getElementById('myBtn');

const validacion = (e) => {
  e.preventDefault();
  const usuario = document.getElementById('nya');
  const tarjeta = document.getElementById('tarjeta');
  const mes = document.getElementById('mes');
  const annio = document.getElementById('annio');
  const cvv = document.getElementById('cvv');
  if (usuario.value === "") {
    mensajeError();
  }else if (tarjeta.value === "") {
    mensajeError();
  } else if (mes.value === "") {
    mensajeError();
  }else if (annio.value === "") {
    mensajeError();
  } else if (cvv.value === "") {
    mensajeError();
  }else{
    mensajeExito()}
  
}


function mensajeExito(){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Tu compra ha sido exitosa',
        showConfirmButton: true,
        timer: 100000
    })

   
 vaciarCarrito()
}
function mensajeError(){
    Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Revise los datos ingresados',
        showConfirmButton: true,
        timer: 100000
    })
}


document.getElementById("myBtn").addEventListener("click",validacion);