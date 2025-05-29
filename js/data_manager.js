// js/data_manager.js

function mostrarInfoGeneral() {
    const elFechaActualizacion = document.getElementById('fecha-actualizacion-general');
    const elEstadoGeneral = document.getElementById('estado-general-texto');

    if (elFechaActualizacion) elFechaActualizacion.textContent = infoGeneralData.ultimaActualizacionGeneral;
    if (elEstadoGeneral) elEstadoGeneral.textContent = infoGeneralData.estadoGeneralTexto;
}

function mostrarUltimoComunicadoDestacado() {
    const elTitulo = document.getElementById('comunicado-titulo-destacado');
    const elFecha = document.getElementById('comunicado-fecha-destacado');
    const elCuerpo = document.getElementById('comunicado-cuerpo-destacado');

    if (elTitulo) elTitulo.textContent = ultimoComunicadoData.titulo;
    if (elFecha) elFecha.textContent = ultimoComunicadoData.fecha;
    if (elCuerpo) elCuerpo.textContent = ultimoComunicadoData.cuerpo;
}

function mostrarListaComunicados() {
    const contenedor = document.getElementById('lista-comunicados-contenedor');
    if (!contenedor) return; // Salir si no estamos en la página de comunicados

    let html = '<ul>';
    listaComunicadosData.forEach(comunicado => {
        html += `
            <li>
                <article>
                    <h3>${comunicado.titulo}</h3>
                    <p class="fecha-comunicado"><small>Publicado: ${comunicado.fecha}</small></p>
                    <p>${comunicado.cuerpo}</p>
                </article>
            </li>
        `;
    });
    html += '</ul>';
    contenedor.innerHTML = html;
}

function mostrarRefugiosYAyuda() {
    const contRefugios = document.getElementById('lista-refugios-contenedor');
    const contPuntosAyuda = document.getElementById('lista-puntos-ayuda-contenedor');
    const contCentrosMedicos = document.getElementById('lista-centros-medicos-contenedor');

    if (contRefugios) {
        let htmlRefugios = '<ul>';
        listaRefugiosData.forEach(r => {
            htmlRefugios += `<li><strong>${r.nombre}</strong> (${r.direccion}) - Estado: ${r.estado}. Servicios: ${r.servicios}</li>`;
        });
        htmlRefugios += '</ul>';
        contRefugios.innerHTML = htmlRefugios;
    }
    // Similar para Puntos de Ayuda y Centros Médicos
    if (contPuntosAyuda) {
        let htmlPuntos = '<ul>';
        listaPuntosAyudaData.forEach(p => {
            htmlPuntos += `<li><strong>${p.tipo}</strong> (${p.ubicacion}) - Horario: ${p.horario}</li>`;
        });
        htmlPuntos += '</ul>';
        contPuntosAyuda.innerHTML = htmlPuntos;
    }

    if (contCentrosMedicos) {
        let htmlCentros = '<ul>';
        listaCentrosMedicosData.forEach(c => {
            htmlCentros += `<li><strong>${c.nombre}</strong> (${c.direccion}) - Estado: ${c.estado}. Especialidades: ${c.especialidades}</li>`;
        });
        htmlCentros += '</ul>';
        contCentrosMedicos.innerHTML = htmlCentros;
    }
}

// Función para actualizar el año en el footer
function actualizarAnioFooter() {
    const elAnio = document.getElementById('current-year');
    if (elAnio) {
        elAnio.textContent = new Date().getFullYear();
    }
}