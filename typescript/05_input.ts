let personaje = prompt("Ingrese el nombre del personaje (Luke, Vader, Leia, Han, Yoda) ");
let edad = Number(prompt("Ingrese la edad del personaje: "));
let fuerza = Number(prompt("Ingrese el nivel de fuerza del personaje (1-100): "));

if(personaje === "Luke" || personaje === "Vader" || personaje === "Leia" || personaje === "Han" || personaje === "Yoda") {
    if(edad >= 0 && edad <= 100) {
        if(fuerza >= 1 && fuerza <= 100) {
            console.log(`El personaje ${personaje} tiene ${edad} años y un nivel de fuerza de ${fuerza}.`);
        } else {
            console.log("El nivel de fuerza debe estar entre 1 y 100.");
        }
    } else {
        console.log("Edad invalida. Debe estar entre 0 y 100.");
    }
} else {
    console.log("Personaje desconocido. Igrese un peerosnaje valido");
}