const productos = [
    {
        id: 1,
        nombre: "Camiseta Boca Juniors Titular",
        precio: 34999,
        imagen: '../assets/camiseta_titular.jpg'
    },
    {
        id: 2,
        nombre: "Camiseta Boca Juniors Suplente ",
        precio: 34999,
        imagen: '../assets/camiseta_suplente.jpg'
      
    },
    {
        id: 3,
        nombre: "Shorts Boca Juniors Titular",
        precio: 15999,
        imagen: '../assets/short_titular.jpg'
        
    },
    {
        id: 4,
        nombre: "Shorts Boca Juniors suplente",
        precio: 11999,
        imagen: '../assets/short_suplente.jpg'
    

    },  
    {
        id: 5,
        nombre: "Campera Boca Juniors Titular",
        precio: 29999,
        imagen: '../assets/campera_titular.jpg'
    },
    {
        id: 6,
        nombre: "Campera Boca Juniors Suplente ",
        precio: 29999,
        imagen: '../assets/campera_suplente.jpg'
      
    },
    {
        id: 7,
        nombre: "Medias Boca Juniors Titular",
        precio: 2999,
        imagen: '../assets/media_titular.jpg'
        
    },
    {
        id: 8,
        nombre: "Medias Boca Juniors suplente",
        precio: 2999,
        imagen: '../assets/media_suplente.jpg'
    

    },
    {
        id: 9,
        nombre: "Chomba Boca Jrs",
        precio: 10999,
        imagen: '../assets/chomba_blanca.jpg'
    },
    {
        id: 10,
        nombre: "Chomba Polo 3 Tiras Boca Jrs",
        precio: 20999,
        imagen: '../assets/chomba_azul.jpg'
      
    },
    {
        id: 11,
        nombre: "Remera Escudo Boca Jrs",
        precio: 14999,
        imagen: '../assets/remera.jpg'
        
    },
    {
        id: 12,
        nombre: "Remera Escudo colorido Boca Jrs",
        precio: 7999,
        imagen: '../assets/remera_dos.jpg'
    

    },
    


];

function guardarProductos(productos) {
    localStorage.setItem("productos", JSON.stringify(productos));
}

function cargarProductos() {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

guardarProductos(productos);

function guardarProductosCarrito(productos) {
    localStorage.setItem("carrito", JSON.stringify(productos));
}

function cargarProductosCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

function vaciarCarrito() {
    localStorage.removeItem("carrito");
    renderProductosCarrito();
    renderBotonCarrito();
}

function estaEnElCarrito(id) {
    const carrito = cargarProductosCarrito();
    
    return carrito.some(item => item.id === id);
}

function agregarAlCarrito(id) {
    const carrito = cargarProductosCarrito();
    
    if (estaEnElCarrito(id)) {
        let pos = carrito.findIndex(item => item.id === id);
        carrito[pos].cantidad += 1;
    } else {
        const producto = buscarProducto(id);
        producto.cantidad = 1;
        carrito.push(producto);
    }

    guardarProductosCarrito(carrito);
    renderBotonCarrito();    
}

function eliminarProducto(id) {
    const carrito = cargarProductosCarrito();
    const productos = carrito.filter(item => item.id !== id);
    guardarProductosCarrito(productos);
    renderProductosCarrito();
    renderBotonCarrito();
}

function buscarProducto(id) { 
    const productos = cargarProductos();

    return productos.find(item => item.id === id); 
}

function totalProductosCarrito() {
    const productos = cargarProductosCarrito();

    return productos.reduce((total, item) => total += item.cantidad, 0);
}

function totalPagarCarrito() {
    const productos = cargarProductosCarrito();

    return productos.reduce((total, item) => total += item.cantidad * item.precio, 0);
}

function renderBotonCarrito() {
    document.getElementById("carrito").innerText = totalProductosCarrito();

    
}

function renderProductosCarrito() {
    const productos = cargarProductosCarrito();
    let salida = "";

    if (totalProductosCarrito() > 0) {
        salida += `<table class="table">
        <tr>
        <td colspan="5" class="text-end"><button class="tdd" onclick="vaciarCarrito()">Vaciar Carrito</button></td>
        <tr>`;

        for (producto of productos) {
            salida += `<tr>
            <td><img src="${"images/" + producto.imagen}" alt="${producto.nombre}" width="80" /></td>
            <td class="td">${producto.nombre}</td>
            <td class="td">${producto.cantidad} X $${producto.precio}</td>
            <td class="td">$${producto.cantidad * producto.precio}</td>
            <td class="text-end"><button onclick="eliminarProducto(${producto.id});" title="Eliminar Producto"><img src="assets/basura.png" alt="Eliminar Producto" width="50" /></button></td>
            </tr>`;
        }

        salida += `<tr>
        <td class="td" colspan="3">Total a Pagar</td>
        <td class="td">$${totalPagarCarrito()}</td>
        <td>&nbsp;</td>
        </tr>`;
        salida += `</table>`;
    } else {
        salida = `<div class="alert alert-danger text-center" role="alert">No se agregaron Productos en el Carrito!</div>
      `
    }

    document.getElementById("productos").innerHTML = salida;
}

renderProductosCarrito();
renderBotonCarrito();


const lista = document.querySelector("#pie")

fetch("https://my-json-server.typicode.com/pachuboing747/base-de-datos.json/lista")
.then((response) => response.json())
.then((data) => {

data.forEach((post) =>{
    const li = document.createElement("li")
    li.innerHTML = `
    <h4>${post.nombre}</h4>
    <br/> 
    <h4>${post.titulos}</h4>
    <br/> 
    <h4>${post.descensos}</h4>
    `
    
    lista.append(li)
})

console.log(data)
})



