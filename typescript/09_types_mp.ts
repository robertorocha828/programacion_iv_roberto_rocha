type IdInscripcion = string | number;
type apellidoAspirante = string;
type Coordenadas = [number, number];
type Ubicacion = {
    latitud: number;
    longitud: number;

}

const centroQuito: Ubicacion = {latitud: -0.1807, longitud: -78.4678};
const coordenadasQuito: Coordenadas = [-0.1807, -78.4678];
const idInscripcion: IdInscripcion = 42;
const idInscripcion2: IdInscripcion = "INS-2026-0001"

type UbicacionConAltitud = Ubicacion & {
    altitud: number;
}

const institutoQuito: UbicacionConAltitud = {...centroQuito, altitud: 2850};
console.log(coordenadasQuito);
console.log(institutoQuito);
console.log(idInscripcion, idInscripcion2);

interface CuentaAspirante {
    readonly id: number;
    nombre: string;
    email: string;
    foto?: string;
}

interface CuentaFuncionario extends CuentaAspirante{
    cargo: string;
}

const cuentaCamila: CuentaAspirante = {
    id: 1,
    nombre: "Camila Andrade",
    email: "camila.andrade@example.com"
}

const cuentaMateo: CuentaAspirante = {
    id: 2,
    nombre: "Mateo Pazmiño",
    email: "mateo.pazmino@example.com",
    foto: "mateo.png"
}

console.log(cuentaCamila);
console.log(cuentaMateo);

const secretariaAdmision:CuentaFuncionario = {
    id: 3,
    nombre: "Verónica Tipán",
    email: "veronica.tipan@example.com",
    cargo: "secretaria de admisiones"
}
console.log(secretariaAdmision);