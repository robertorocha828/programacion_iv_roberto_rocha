// Funciones simples

function sumarCreditos(credito1: number, credito2: number): number {
    return credito1 + credito2;
}

const totalCreditos = sumarCreditos(10, 20);
console.log(`Total de créditos: ${totalCreditos}`);

// Sin devolver un valor
function mostrarCentroEntrenamiento(nombre: string): void {
    console.log(`Centro de entrenamiento: ${nombre}.`);
    const naves: string[] = ["X-wing", "TIE Fighter", "Millennium Falcon"];
    for (const nave of naves) {
        console.log(`Entrenando con la nave: ${nave}`);
    }
}

mostrarCentroEntrenamiento("Templo Jedi");

// Funciones con parámetros opcionales
function entrenarJedi(nombre: string, nivel?: number): void {
    if (nivel) {
        console.log(`El Jedi ${nombre} esta entrenado en el nivel ${nivel}.`);
    } else {
        console.log(`El Jedi ${nombre} esta entrenado.`);
        nivel = 1;
        console.log(`Nivel de entrenamiento por defecto: ${nivel}.`);
    }
}

entrenarJedi("Luke Skywalker", 5);
entrenarJedi("Yoda");

function entrenarJedi2(nombre: string, nivel: number = 1): void {
    console.log(`El Jedi ${nombre} esta entrenado en el nivel ${nivel}.`);
}

entrenarJedi2("Leia", 5);
entrenarJedi2("Obi-Wan");

// Funciones flecha
function potenciarFuerza(fuerza: number): number {
    return fuerza * 2;
}
const potenciarFuerzaFlecha = (fuerza: number): number => fuerza * 2;

const fuerzaOriginal : number = 10;
const fuerzaPotenciada : number = potenciarFuerza(fuerzaOriginal);
console.log(`Fuerza original: ${fuerzaOriginal}, Fuerza potenciada: ${fuerzaPotenciada}`);

const fuerzaPotenciadaFlecha : number = potenciarFuerzaFlecha(fuerzaOriginal);
console.log(`Fuerza original: ${fuerzaOriginal}, Fuerza potenciada (flecha): ${fuerzaPotenciadaFlecha}`);