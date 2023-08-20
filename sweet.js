// Bienvenida
Swal.fire({
    title: 'Bienvenido/a',
    text: 'Quieres jugar piedras papel o tijeras?',
    confirmButtonText: 'seee'
})

// Función para mostrar un chiste en un SweetAlert
function mostrarChiste(chiste) {
    Swal.fire({
        title: 'Chiste',
        text: chiste,
        icon: 'info',
        confirmButtonText: 'Aceptar'
    });
}