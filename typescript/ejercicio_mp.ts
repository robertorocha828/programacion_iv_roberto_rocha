const cuposPorCarrera: Record<string, number> = {
    "Desarrollo de Software": 40,
    "Mecánica Automotriz": 30,
    "Enfermería": 25
}


for (const carrera in cuposPorCarrera) {
    console.log(`Carrera ${carrera} con ${cuposPorCarrera[carrera]} cupos disponibles`);
}