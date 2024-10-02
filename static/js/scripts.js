// Ejemplo de simple animación al hacer hover en los productos
const productos = document.querySelectorAll('.producto');

productos.forEach(producto => {
    producto.addEventListener('mouseover', () => {
        producto.style.transform = 'scale(1.05)';
        producto.style.transition = 'transform 0.3s ease';
    });

    producto.addEventListener('mouseout', () => {
        producto.style.transform = 'scale(1)';
    });
});

// Mostrar la vista de detalles del producto
function mostrarDetalles(nombre, imagen, descripcion) {
    document.getElementById('catalogo').classList.add('hidden');
    document.getElementById('detalles').classList.remove('hidden');
    
    document.getElementById('producto-titulo').innerText = nombre;
    document.getElementById('producto-img').src = imagen;
    document.getElementById('producto-descripcion').innerText = descripcion;

    // Actualiza el enlace de WhatsApp
    document.getElementById('whatsapp').href = `https://wa.me/?text=Quiero comprar: ${nombre} - ${descripcion}`;
}
