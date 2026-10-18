function sumarPuntajes(puntaje1: number, puntaje2: number): number {
    return puntaje1 + puntaje2;
}

const totalPuntaje = sumarPuntajes(6.5, 2.5);
console.log(`Puntaje total sobre 10: ${totalPuntaje}`);


function mostrarCentroInscripcion(nombre: string): void {
    console.log(`Centro de inscripción: ${nombre}.`);
    const documentos: string[] = ["Copia de cédula", "Título de bachiller", "Certificado de notas", "Foto tamaño carné"];
    for (const documento of documentos) {
        console.log(`Documento requerido: ${documento}`);
    }
}

mostrarCentroInscripcion("Instituto Central Técnico, Quito");


function registrarAspirante(nombre: string, puntaje?: number): void {
    if (puntaje !== undefined) {
        console.log(`El aspirante ${nombre} fue registrado con puntaje ${puntaje}.`);
    } else {
        console.log(`El aspirante ${nombre} fue registrado sin puntaje.`);
        puntaje = 0;
        console.log(`Puntaje por defecto: ${puntaje}.`);
    }
}

registrarAspirante("Camila Andrade", 8.5);
registrarAspirante("Joselyn Quishpe");

function registrarAspirante2(nombre: string, puntaje: number = 0): void {
    console.log(`El aspirante ${nombre} fue registrado con puntaje ${puntaje}.`);
}

registrarAspirante2("Mateo Pazmiño", 7.5);
registrarAspirante2("Kevin Chicaiza");

// Funciones flecha
function aplicarBonoMerito(puntaje: number): number {
    return Math.min(10, puntaje + 0.5);
}
const aplicarBonoMeritoFlecha = (puntaje: number): number => Math.min(10, puntaje + 0.5);

const puntajeOriginal : number = 8.5;
const puntajeConBono : number = aplicarBonoMerito(puntajeOriginal);
console.log(`Puntaje original: ${puntajeOriginal}, Puntaje con bono de mérito: ${puntajeConBono}`);

const puntajeConBonoFlecha : number = aplicarBonoMeritoFlecha(puntajeOriginal);
console.log(`Puntaje original: ${puntajeOriginal}, Puntaje con bono de mérito (flecha): ${puntajeConBonoFlecha}`);


function formatearDato(valor: number): string;
function formatearDato(valor: string): string;
function formatearDato(valor: boolean): string;

function formatearDato(valor: number | string | boolean): string {
    if (typeof valor === "number") {
        return valor.toLocaleString("es-EC", {minimumFractionDigits: 2});
    }
    if (typeof valor === "boolean") {
        return valor ? "sí" : "no";
    }
    return `"${valor}"`;
    }

console.log(formatearDato(1850.75));
console.log(formatearDato(true));
console.log(formatearDato("matriculado"));


function crearContadorInscritos(inicio: number = 0){
    let cuenta = inicio;
    return{
        registrarInscripcion: () => ++cuenta,
        retirarInscripcion: () => --cuenta,
        total: () => cuenta,
        reiniciar: () => {cuenta = inicio}
    }
}

const inscritosMatutina = crearContadorInscritos();
const inscritosVespertina = crearContadorInscritos(20);

inscritosMatutina.registrarInscripcion();
inscritosMatutina.registrarInscripcion();
inscritosMatutina.registrarInscripcion();
inscritosVespertina.registrarInscripcion();

console.log(inscritosMatutina.total());
console.log(inscritosVespertina.total());

inscritosMatutina.reiniciar()
console.log(inscritosMatutina.total());