let cuposOcupados = 20;
let cuposTotales = 40;
while (cuposOcupados < cuposTotales) {
    console.log(`Cupos ocupados en Desarrollo de Software: ${cuposOcupados}`);
    cuposOcupados += 5;
}

let numeroTurno = 1;
while (numeroTurno <= 10) {
    console.log(`Turno de atención en secretaría: ${numeroTurno}`);
    numeroTurno++;
}

let entrevistasRealizadas = 0;
let entrevistasAprobadas = 0;
while (entrevistasRealizadas < 10) {
    entrevistasRealizadas++;
    let aprobada = Math.random() < 0.5;
    if (aprobada) {
        entrevistasAprobadas++;
        console.log(`Entrevista ${entrevistasRealizadas}: ¡Aprobada! Total de aprobadas: ${entrevistasAprobadas}`);
    } else {
        console.log(`Entrevista ${entrevistasRealizadas}: No aprobada. Total de aprobadas: ${entrevistasAprobadas}`);
    }
}

let rondasInscripcion = 0;
do {
    rondasInscripcion++;
    console.log(`Ronda de inscripción número: ${rondasInscripcion}`);
} while (rondasInscripcion < 5);


interface SolicitudAdmision {
    nombre: string;
    carrera: string;
    estado: string;
    nota: number; 
}
const solicitudesRecibidas: SolicitudAdmision[] = [
    { nombre: "Camila Andrade", carrera: "Desarrollo de Software", estado: "Pendiente", nota: 9.2 },
    { nombre: "Joselyn Quishpe", carrera: "Enfermería", estado: "Matriculado", nota: 8.8 },
    { nombre: "Kevin Chicaiza", carrera: "Electricidad", estado: "Matriculado", nota: 7.5 },
    { nombre: "Daniela Loor", carrera: "Gastronomía", estado: "Pendiente", nota: 6.4 },
    { nombre: "Mateo Pazmiño", carrera: "Mecánica Automotriz", estado: "Pendiente", nota: 8.1 }

];

let posicion = 0;
while (posicion < solicitudesRecibidas.length) {
    const solicitud = solicitudesRecibidas[posicion];
    if (!solicitud) {
        break;
    }
    if (solicitud.estado === "Matriculado") {
        posicion++;
        continue;
    }
    if (solicitud.nota < 7) {
        break;
    }

    console.log(`Nombre: ${solicitud.nombre}, Carrera: ${solicitud.carrera}, Nota: ${solicitud.nota}`);
    posicion++;

}