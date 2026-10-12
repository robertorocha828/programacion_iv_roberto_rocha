// Ciclo for
for (let i = 2; i < 50; i+=5) {
    console.log(`Inscripción del aspirante número ${i}`);
}


for (let i = 40; i > 0; i-=5) {
    console.log(`Atendiendo el turno ${i}`);
    if (i === 20) {
        console.log("Las inscripciones de hoy han terminado");
        break;
    }
    if (i === 30) {
        console.log("El turno 30 fue pausado por documentos incompletos");
        continue;
    }
    console.log(`La atención continúa en el turno ${i}`);

}