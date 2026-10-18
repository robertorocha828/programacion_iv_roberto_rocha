// Ciclo for
for (let i = 2; i < 50; i+=5) {
    console.log(`Entenamiento jedi ${i}`);
}


for (let i = 40; i > 0; i-=5) {
    console.log(`Entenamiento jedi ${i}`);
    if (i === 20) {
        console.log("El entramiento ha terminado");
        break;
    }
    if (i === 30) {
        console.log("El entrenamiento ha sido interrumpido");
        continue;
    }
    console.log(`El entrenamiento continua ${i}`);

}

const personajes: string[] = ["Luke Skywalker", "Darth Vader", "Leia Organa", "Han Solo", "Yoda"];
for (let i = 0; i < personajes.length; i++) {
    console.log(`Personaje ${personajes[i]}`);
}

for (const personaje of personajes) {
    console.log(`Personaje ${personaje}`);
}

const cineMovies: string[] = ["Star Wars: A New Hope"];
for (const letra of cineMovies) {
    console.log(`Letra ${letra}`);
}  

interface Jedi {
    nombre: string;
    nivelFuerza: number;
    tieneSalud: boolean;
}

const jedis: Jedi[] = [
    { nombre: "Luke Skywalker", nivelFuerza: 100, tieneSalud: true },
    { nombre: "Darth Vader", nivelFuerza: 90, tieneSalud: false },
    { nombre: "Leia Organa", nivelFuerza: 80, tieneSalud: true },
    { nombre: "Han Solo", nivelFuerza: 70, tieneSalud: true },
    { nombre: "Yoda", nivelFuerza: 100, tieneSalud: true }
];

for (const jedi of jedis) {
    console.log(`Jedi ${jedi.nombre} con nivel de fuerza ${jedi.nivelFuerza} y salud ${jedi.tieneSalud}`);
}

interface Nave {
    nombre: string;
    tipo: string;
    velocidad: number;
}
const naves: Nave[] = [
    { nombre: "X-wing", tipo: "Caza", velocidad: 1000 },
    { nombre: "Y-wing", tipo: "Caza", velocidad: 800 },
    { nombre: "Millennium Falcon", tipo: "Carga", velocidad: 1200 }
];
for (const nave of naves) {
    console.log(`Nave ${nave.nombre} de tipo ${nave.tipo} con velocidad ${nave.velocidad}`);
}

const planetas: Record<string, number> = {
    "Tatooine": 1000,
    "Hoth": 500,
    "Endor": 800
}

for (const planeta in planetas) {
    console.log(`Planeta ${planeta} con población ${planetas[planeta]}`);
}


const criaturasStarWars: string[] = ["Wampa", "Tauntaun", "Rancor", "Sarlacc", "Wicket"];
criaturasStarWars.forEach((criatura, index) => {
    console.log(`Criatura ${index + 1}: ${criatura}`);
});

criaturasStarWars.map((criatura, index) => {
    console.log(`Criatura ${index + 1}: ${criatura}`);
});



