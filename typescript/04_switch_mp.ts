type Carrera =
| "Desarrollo de Software"
| "Mecánica Automotriz"
| "Electricidad"
| "Enfermería"
| "Gastronomía"

let carreraElegida = "Mecánica Automotriz" as Carrera;

switch (carreraElegida) {
    case "Desarrollo de Software":
        console.log("Desarrollo de Software pertenece al área de Tecnologías de la Información");
        break;
    case "Mecánica Automotriz":
        console.log("Mecánica Automotriz pertenece al área automotriz");
        break;
    case "Electricidad":
        console.log("Electricidad pertenece al área de energía y electricidad");
        break;
    case "Enfermería":
        console.log("Enfermería pertenece al área de salud");
        break;
    case "Gastronomía":
        console.log("Gastronomía pertenece al área de turismo y hospitalidad");
        break;
    default:
        console.log("Carrera no ofertada");
}

// Los puntajes mínimos por instituto son valores de ejemplo, no cifras oficiales
type Institutos = "Central Técnico" | "Japón" | "Rumiñahui";

let institutoElegido = "Japón" as Institutos;
let puntajePostulante: number = 7.6;
let tieneDocumentos: boolean = true;

switch (institutoElegido) {
    case 'Central Técnico':
        if (puntajePostulante > 8 && tieneDocumentos) {
            console.log("Aspirante admitido en el Instituto Central Técnico de Quito");
        } else {
            console.log("Aspirante no alcanza el puntaje para el Instituto Central Técnico");
        }
        break;
    case 'Japón':
        if (puntajePostulante > 7 && tieneDocumentos) {
            console.log("Aspirante admitido en el Instituto Japón de Quito");
        } else {
            console.log("Aspirante no alcanza el puntaje para el Instituto Japón");
        }
        break;
    case 'Rumiñahui':
        if (puntajePostulante > 6.5 && tieneDocumentos) {
            console.log("Aspirante admitido en el Instituto Rumiñahui de Sangolquí");
        } else {
            console.log("Aspirante no alcanza el puntaje para el Instituto Rumiñahui");
        }
        break;
    default:
        console.log("Instituto desconocido");
}