//Menu Hamburguesa
const menu = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');

// Abrir/Cerrar Menú
menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    navLinks.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('is-active');
        navLinks.classList.remove('active');
    });
});

// SCROLL SUAVE HERO AL CONTENIDO

const btnHero = document.querySelector('.btn-hero');

if (btnHero) {
    btnHero.addEventListener('click', () => {
    const target = document.querySelector('#contenido');
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
});
}


//Para que los videos se reproduzcan uno por uno
    const videos = document.querySelectorAll(".feria-video");
    let currentVideo = 0;

// Reproduce el primer video
    videos[currentVideo].play();

    videos.forEach((video, index) => {
    video.addEventListener("ended", () => {
        video.classList.remove("active");

        currentVideo = (index + 1) % videos.length;

        videos[currentVideo].classList.add("active");
        videos[currentVideo].play();
    });
});

// LÓGICA DEL CARRITO PARA TIENDA
let carrito = [];

function agregarAlCarrito(nombre) {
    carrito.push(nombre);
    renderizarCarrito();
}

function eliminarDelCarrito(index) {
    // Eliminamos el producto usando su posición en el arreglo
    carrito.splice(index, 1);
    renderizarCarrito();
}

function renderizarCarrito() {
    const listaUI = document.getElementById('lista-carrito');
    const contenedor = document.getElementById('carrito-flotante');
    const contador = document.getElementById('cant-items');

    // Limpiamos la lista actual
    listaUI.innerHTML = "";

    // Si no hay productos, ocultamos el carrito
    if (carrito.length === 0) {
        contenedor.style.display = 'none';
        return;
    }

    // Mostramos el carrito y dibujamos cada producto
    contenedor.style.display = 'block';
    contador.innerText = carrito.length;

    carrito.forEach((producto, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${producto}
            <button class="btn-remove" onclick="eliminarDelCarrito(${index})">Quitar</button>
        `;
        listaUI.appendChild(li);
    });
}

function cerrarCarrito() {
    document.getElementById('carrito-flotante').style.display = 'none';
}

function enviarWhatsApp() {
    if (carrito.length === 0) return;
    const nro = "5492617264989";
    const msg = encodeURIComponent("¡Hola CHEMA! ✨ Me interesan estos productos: " + carrito.join(", "));
    window.open(`https://wa.me/${nro}?text=${msg}`, '_blank');
}




