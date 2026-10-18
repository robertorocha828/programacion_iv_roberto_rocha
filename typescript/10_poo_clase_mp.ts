class Postulante {
    constructor (
        public nombre: string,
        public notaExamen: number,
        public oportunidades: number,
    ){
        this.nombre = nombre;
        this.notaExamen = notaExamen;
        this.oportunidades = oportunidades;

    }
    rendirExamen(): void{
        this.oportunidades-=1;
        console.log(`${this.nombre} rinde el examen de admisión`)
    }

    estudiar(): void{
        this.notaExamen = Math.min(10, this.notaExamen + 0.5);
        console.log(`${this.nombre} ha estudiado`)
    }
}

const camila = new Postulante("Camila Andrade", 7.5, 3);
const mateo = new Postulante("Mateo Pazmiño", 8, 3);

camila.rendirExamen();
console.log(mateo.notaExamen);
mateo.estudiar();
mateo.estudiar();
console.log(mateo.notaExamen);
mateo.rendirExamen();
console.log(mateo.oportunidades)