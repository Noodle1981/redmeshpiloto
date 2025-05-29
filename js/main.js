// js/main.js

document.addEventListener('DOMContentLoaded', function() {
    // Lógica a ejecutar cuando el DOM está listo

    // Actualizar el año en el footer en todas las páginas
    actualizarAnioFooter();

    // Determinar en qué página estamos para cargar los datos correspondientes
    // Esto es una forma simple, se puede mejorar con un enrutador JS básico si se hace SPA
    const path = window.location.pathname.split("/").pop();

    if (path === 'index.html' || path === '') {
        mostrarInfoGeneral();
        mostrarUltimoComunicadoDestacado();
    } else if (path === 'comunicados.html') {
        mostrarListaComunicados();
    } else if (path === 'refugios.html') {
        mostrarRefugiosYAyuda();
    }
    // La página de recomendaciones es mayormente estática, no necesita carga de datos JS por ahora.

    // (Opcional) Implementar navegación tipo SPA para evitar recargas completas
    // Esto es más avanzado para un MVP inicial, pero posible.
    // Por ahora, la navegación es con recarga de página completa.
});