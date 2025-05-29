// js/datos.js

// Simulación de datos que vendrían de archivos JSON o una API en el futuro
const infoGeneralData = {
    estadoGeneralTexto: "ALERTA ROJA NIVEL 3: Sismo de magnitud 7.2 detectado. Réplicas posibles. Mantenga la calma, siga los protocolos y evite zonas de riesgo.",
    ultimaActualizacionGeneral: "2023-10-27 18:30" // Actualizada la hora
};

const ultimoComunicadoData = { // Este es el que se muestra destacado en la home
    id_comunicado: "C006", // Añadido un ID para posible referencia futura
    titulo: "ACTUALIZACIÓN: Vías de acceso y estado de servicios esenciales",
    fecha: "2023-10-27 18:15",
    cuerpo: "Se informa a la población que Av. Libertador entre Paula A. de Sarmiento y Rioja se encuentra INTERRUMPIDA por desprendimientos. Equipos viales trabajando. El servicio de agua potable presenta baja presión en zona Sur. Hospitales Rawson y Marcial Quiroga operativos para emergencias. Refugios con capacidad disponible: Escuela San Martín y Club Inca Huasi. Próximo parte: 20:00 hs."
};

const listaComunicadosData = [
    ultimoComunicadoData, // El más reciente siempre primero
    {
        id_comunicado: "C005",
        titulo: "Prioridad: Seguridad en Refugios y Vías de Acceso",
        fecha: "2023-10-27 15:45",
        cuerpo: "Se insta a la población a dirigirse a los refugios habilitados únicamente por las vías seguras señalizadas. Evite zonas con daños estructurales visibles. Equipos de rescate están trabajando en las áreas afectadas. Próximo comunicado en 1 hora."
    },
    {
        id_comunicado: "C004",
        titulo: "Habilitación de Primeros Refugios y Líneas de Ayuda",
        fecha: "2023-10-27 15:20",
        cuerpo: "Se han habilitado los siguientes refugios iniciales: Escuela Normal Sarmiento, Polideportivo Capital. Línea de información ciudadana (solo red mesh): 10X. Siga las indicaciones de personal autorizado."
    },
    {
        id_comunicado: "C003",
        titulo: "Primeras Medidas y Evaluación de Daños",
        fecha: "2023-10-27 15:00",
        cuerpo: "Defensa Civil informa que se ha activado el protocolo de emergencia provincial. Se están evaluando los daños y coordinando las primeras respuestas. Manténgase informado a través de este canal."
    },
    {
        id_comunicado: "C002",
        titulo: "RECOMENDACIÓN: Corte Suministro de Gas",
        fecha: "2023-10-27 14:45",
        cuerpo: "Ante la posibilidad de fugas, se recomienda a la población que, de ser posible y seguro, cierre la llave de paso general de gas de sus domicilios. Bomberos realizará inspecciones."
    },
    {
        id_comunicado: "C001",
        titulo: "Reporte Preliminar del Sismo",
        fecha: "2023-10-27 14:35",
        cuerpo: "Se registró un sismo con epicentro en [Pedernal, Sarmiento - Dato Simulado]. Intensidad percibida en la capital: VII en escala Mercalli Modificada. Se recomienda precaución y estar atentos a réplicas."
    }
];

const listaRefugiosData = [
    { id_refugio: "R001", nombre: "Escuela Normal Sarmiento", direccion: "Av. Alem y Libertador, Capital", estado: "Abierto", servicios: "Agua, Colchonetas, Primeros Auxilios Básicos, Carga de Celulares (Limitada)" },
    { id_refugio: "R002", nombre: "Polideportivo Capital", direccion: "Calle San Luis Oeste 1234, Capital", estado: "Abierto", servicios: "Agua, Comida Caliente, Baños Químicos" },
    { id_refugio: "R003", nombre: "Centro Cívico (Subsuelo)", direccion: "Av. Libertador 750 Oeste, Capital", estado: "Capacidad Completa", servicios: "Agua" },
    { id_refugio: "R004", nombre: "Escuela Hogar José Manuel Estrada", direccion: "Av. Benavidez y Maradona, Chimbas", estado: "Abierto", servicios: "Agua, Colchonetas, Espacio para Niños" },
    { id_refugio: "R005", nombre: "Club Inca Huasi", direccion: "Lateral de Circunvalación y Salta, Capital", estado: "Abierto", servicios: "Agua, Baños, Seguridad" },
    { id_refugio: "R006", nombre: "CIC Barrio Manantiales", direccion: "Calle Principal S/N, Rawson", estado: "Preparándose para abrir", servicios: "Agua (Próximamente)" }
];

const listaPuntosAyudaData = [
    { id_punto: "PA001", tipo: "Distribución de Agua Potable", ubicacion: "Plaza 25 de Mayo (Fuente Central), Capital", horario: "Permanente", notas: "Traer recipiente." },
    { id_punto: "PA002", tipo: "Entrega de Alimentos No Perecederos", ubicacion: "Estadio Aldo Cantoni (Entrada Este), Capital", horario: "09:00 - 18:00", notas: "Se prioriza familias con niños." },
    { id_punto: "PA003", tipo: "Farmacia de Turno (Emergencia)", ubicacion: "Farmacia San Juan, Rivadavia y Tucumán", horario: "24hs (Stock Limitado)", notas: "Solo urgencias médicas." },
    { id_punto: "PA004", tipo: "Recarga de Agua para Bomberos/Defensa Civil", ubicacion: "Hidrante de OSSE, Plaza de Concepción", horario: "Exclusivo vehículos de emergencia", notas: "" },
    { id_punto: "PA005", tipo: "Centro de Acopio de Donaciones", ubicacion: "Predio Ferial Costanera, Chimbas", horario: "10:00 - 17:00", notas: "Se necesita: agua, alimentos no perecederos, pañales, artículos de higiene." }
];

const listaCentrosMedicosData = [
    { id_centro: "CM001", nombre: "Hospital Dr. Guillermo Rawson (Guardia Central)", direccion: "Av. Rawson y Santa Fe, Capital", estado: "Operativo con demoras", especialidades: "Urgencias Generales, Traumatología, Cirugía de Urgencia", telefono_interno_mesh: "107A" },
    { id_centro: "CM002", nombre: "Hospital Dr. Marcial Quiroga (Guardia)", direccion: "Av. Libertador y Rastreador Calívar, Rivadavia", estado: "Operativo", especialidades: "Urgencias Generales, Maternidad, Pediatría de Urgencia", telefono_interno_mesh: "107B" },
    { id_centro: "CM003", nombre: "Posta Sanitaria Barrio Aramburu", direccion: "Calle Las Acacias S/N, Rivadavia", estado: "Operativa", especialidades: "Atención Primaria, Curaciones Menores", telefono_interno_mesh: "APS01" },
    { id_centro: "CM004", nombre: "CAPS Villa Krause", direccion: "Boulevard Sarmiento y Lemos, Rawson", estado: "Operativo", especialidades: "Atención Primaria, Vacunación de Emergencia (si aplica)", telefono_interno_mesh: "APS02" },
    { id_centro: "CM005", nombre: "Clínica El Castaño (Guardia Privada)", direccion: "Av. Córdoba y Catamarca, Capital", estado: "Operativa (Recepción Limitada)", especialidades: "Urgencias varias (consultar disponibilidad)", telefono_interno_mesh: "" }
];