// constatentes
const PI: number = 3.1416;
const IVA: number = 15;
const SERVICIO_API: string = "apiService";
const ACTIVE: boolean = true;

console.log("PI: " , PI);
console.log("I.V.A.: " , IVA);
console.log("NOMBRE DEL SERVIDOR:" , SERVICIO_API);
console.log("ESTADO:" , ACTIVE);

// variables
let contador: number = 0;
contador = 5;
console.log(contador);
contador = 5;
console.log(contador);
contador++;
console.log(contador);
contador+=5;
console.log(contador);
contador=contador+3;
console.log(contador);
let alumno: string = "Roberto Rocha";
let caducado: boolean = false;
console.log(alumno);
console.log(caducado);


let equipo : string [] = ["PIKACHU", "CHARMANDER", "BULBASAUR"];
console.log(equipo);

let pokemonCapturado: string | null=null;
let pokemonInicial: string | undefined;

let experienciaAcumulada: bigint = 9872398745564688n;

// tipo symbol
let pokemon1: symbol = Symbol("Pikachu");
let pokemon2: symbol = Symbol("Pikachu");
console.log(pokemon2.toString());
console.log(pokemon1 === pokemon2);
console.log(pokemon1.description);


// tipo objeto
let pikachu: {
    nombre: string,
    nivel: number,
    vida: number,
    esLegendario: boolean;
}={
    nombre: "Pikachu",
    nivel: 5,
    vida: 100,
    esLegendario: false
}

console.log(pikachu);

