let memoriaDroide = 1024;
let memoriaDroideMaxima = 2048;
while (memoriaDroide < memoriaDroideMaxima) {
    console.log(`Memoria del droide: ${memoriaDroide}`);
    memoriaDroide += 256;
}

let nivel = 1;
while (nivel <= 10) {
    console.log(`Nivel del droide: ${nivel}`);
    nivel++;
}

let disparosNave = 0;
let aciertosNave = 0;
while (disparosNave < 10) {
    disparosNave++;
    let acierto = Math.random() < 0.5;
    if (acierto) {
        aciertosNave++;
        console.log(`Disparo ${disparosNave}: ¡Acierto! Total de aciertos: ${aciertosNave}`);
    } else {
        console.log(`Disparo ${disparosNave}: Fallo. Total de aciertos: ${aciertosNave}`);
    }
}

let guerras = 0;
do {
    guerras++;
    console.log(`Guerra número: ${guerras}`);
} while (guerras < 5);


interface Nave {
    nombre: string;
    tipo: string;
    velocidad: number;
}
const navesEscanedas: Nave[] = [
    { nombre: "Star Destroyer", tipo: "Carguero ligero", velocidad: 1800 },
    { nombre: "X-wing", tipo: "Caza estelar", velocidad: 1000 },
    { nombre: "TIE Fighter", tipo: "Caza estelar", velocidad: 1200 },
    { nombre: "Millennium Falcon", tipo: "Carguero ligero", velocidad: 900 },
    { nombre: "Star Destroyer", tipo: "Carguero ligero", velocidad: 800 }

];

let indice = 0;
while (indice < navesEscanedas.length) {
    const nave = navesEscanedas[indice];
    if (nave?.tipo === "Caza estelar") {
        indice++;
        continue;
    }
    if (nave?.velocidad < 1000) {
        break;
    }

console.log(`Nombre: ${nave?.nombre}, Tipo: ${nave?.tipo}, Velocidad: ${nave?.velocidad}`);
indice++;

}


