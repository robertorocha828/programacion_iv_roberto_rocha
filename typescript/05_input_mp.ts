let carreraIngresada = prompt("Ingrese la carrera a la que postula (Desarrollo de Software, Mecánica Automotriz, Electricidad, Enfermería, Gastronomía): ");
let edadIngresada = Number(prompt("Ingrese la edad del aspirante: "));
let puntajeIngresado = Number(prompt("Ingrese el puntaje del examen de acceso (0-10): "));

if(carreraIngresada === "Desarrollo de Software" || carreraIngresada === "Mecánica Automotriz" || carreraIngresada === "Electricidad" || carreraIngresada === "Enfermería" || carreraIngresada === "Gastronomía") {
    if(!Number.isNaN(edadIngresada) && edadIngresada >= 16 && edadIngresada <= 100) {
        if(!Number.isNaN(puntajeIngresado) && puntajeIngresado > 0 && puntajeIngresado <= 10) {
            console.log(`El aspirante a ${carreraIngresada} tiene ${edadIngresada} años y obtuvo ${puntajeIngresado} sobre 10 en el examen de acceso.`);
         
            if(puntajeIngresado >= 7) {
                console.log("El aspirante puede continuar con el proceso de matrícula.");
            } else {
                console.log("El aspirante no alcanza el puntaje mínimo de ejemplo (7).");
            }
        } else {
            console.log("El puntaje debe ser mayor que 0 y máximo 10.");
        }
    } else {
        console.log("Edad inválida. Debe estar entre 16 y 100.");
    }
} else {
    console.log("Carrera no ofertada. Ingrese una carrera válida.");
}