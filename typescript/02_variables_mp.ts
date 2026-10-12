// constantes
const PUNTAJE_MAXIMO_EXAMEN: number = 10;
const NOTA_MINIMA_APROBACION: number = 7;
const PLATAFORMA_ADMISION: string = "SAES";
const INSCRIPCIONES_ABIERTAS: boolean = true;

console.log("PUNTAJE MÁXIMO DEL EXAMEN: ", PUNTAJE_MAXIMO_EXAMEN);
console.log("NOTA MÍNIMA DE APROBACIÓN: ", NOTA_MINIMA_APROBACION);
console.log("PLATAFORMA DE ADMISIÓN:", PLATAFORMA_ADMISION);
console.log("INSCRIPCIONES ABIERTAS:", INSCRIPCIONES_ABIERTAS);

// variables
let inscritos: number = 0;
inscritos = 5;
console.log(inscritos);
inscritos = 5;
console.log(inscritos);
inscritos++;
console.log(inscritos);
inscritos += 5;
console.log(inscritos);
inscritos = inscritos + 3;
console.log(inscritos);
let nombreAspirante: string = "Roberto Rocha";
let cedulaCaducada: boolean = false;
console.log(nombreAspirante);
console.log(cedulaCaducada);


let opcionesCarrera: string[] = ["Desarrollo de Software", "Mecánica Automotriz", "Electricidad"];
console.log(opcionesCarrera);

let carreraAsignada: string | null = null;
let cupoReservado: string | undefined;

let codigoPostulacion: bigint = 202610110000987654n;
console.log(codigoPostulacion);

// tipo symbol
let postulacion1: symbol = Symbol("Postulación Central Técnico");
let postulacion2: symbol = Symbol("Postulación Central Técnico");
console.log(postulacion2.toString());
console.log(postulacion1 === postulacion2);
console.log(postulacion1.description);


// tipo objeto
let postulante: {
    nombre: string,
    edad: number,
    puntaje: number,
    becado: boolean;
} = {
    nombre: "Mateo Pazmiño",
    edad: 18,
    puntaje: 8.42,
    becado: false
}

console.log(postulante);