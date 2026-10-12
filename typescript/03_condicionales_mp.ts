// condicionales
let puntajeExamen: number = 8.5; 
if (puntajeExamen >= 7) {
    console.log("Camila Andrade alcanzó el puntaje mínimo para postular a Desarrollo de Software");
}

// condicionales dobles o dos caminos
if (puntajeExamen >= 7) {
    console.log("Camila Andrade fue admitida en Desarrollo de Software");
} else {
    console.log("Camila Andrade no fue admitida en Desarrollo de Software");
}


// condicionales multiples o varios caminos
if (puntajeExamen >= 9) {
    console.log("Camila Andrade fue admitida con beca de excelencia");
} else if (puntajeExamen >= 7) {
    console.log("Camila Andrade fue admitida sin beca");
} else {
    console.log("Camila Andrade no fue admitida");
}


// condicional anidados
if (puntajeExamen >= 9) {
    console.log("Camila Andrade fue admitida con beca de excelencia");
} else {
    if (puntajeExamen >= 7) {
        console.log("Camila Andrade fue admitida sin beca");
    } else {
        console.log("Camila Andrade no fue admitida");
    }
}

// condicional if con operador logico AND
puntajeExamen = 7.8;
let promedioBachillerato: number = 9.2; // promedio sobre 10
if (puntajeExamen >= 7 && puntajeExamen < 9 && promedioBachillerato >= 9) {
    console.log("Camila Andrade accede a media beca");
} else if (puntajeExamen >= 9) {
    console.log("Camila Andrade accede a beca completa");
} else {
    console.log("Camila Andrade no accede a beca");
}


// condicional if con operador logico OR
puntajeExamen = 6.5;
promedioBachillerato = 9.6;

if (puntajeExamen >= 7 || promedioBachillerato >= 9.5) {
    console.log("Camila Andrade pasa a la entrevista de admisión");
} else if (puntajeExamen >= 6) {
    console.log("Camila Andrade queda en lista de espera");
} else {
    console.log("Camila Andrade no pasa a la entrevista de admisión");
}

/*

*/

type Modalidad = "Presencial" | "Semipresencial" | "En línea";

interface Aspirante {
  nombre: string;
  edad: number;
  provincia: string;
  promedioBachillerato: number;
  documentosCompletos: boolean;
}


interface Postulacion {
  carrera: string;
  modalidad: Modalidad;
  puntajeExamen: number;
  notaEntrevista: number;
  cuposDisponibles: number;
}


const aspirante: Aspirante = {
  nombre: "Joselyn Quishpe",
  edad: 18,
  provincia: "Pichincha",
  promedioBachillerato: 9.4,
  documentosCompletos: true
};


const postulacion: Postulacion = {
  carrera: "Desarrollo de Software",
  modalidad: "Presencial",
  puntajeExamen: 9.2,
  notaEntrevista: 9.2,
  cuposDisponibles: 25
};


// Primer IF: Validar aspirante
if (
  aspirante.promedioBachillerato >= 7 &&
  aspirante.edad >= 17 &&
  aspirante.documentosCompletos
) {
  console.log("Aspirante habilitado para postular");


  // Segundo IF: Validar postulación
  if (
    postulacion.puntajeExamen >= 7 &&
    postulacion.cuposDisponibles > 0 &&
    (
      postulacion.modalidad === "Presencial" ||
      postulacion.modalidad === "Semipresencial"
    )
  ) {
    console.log("Postulación válida");


    // Tercer IF: Clasificar admisión
    if (
      postulacion.puntajeExamen >= 9 &&
      postulacion.notaEntrevista >= 9 &&
      aspirante.promedioBachillerato >= 9
    ) {
      console.log("Admisión con beca de excelencia");


    } else if (
      postulacion.puntajeExamen >= 8 &&
      (
        postulacion.notaEntrevista >= 8 ||
        aspirante.promedioBachillerato >= 9
      )
    ) {
      console.log("Admisión con beca parcial");


    } else if (
      postulacion.puntajeExamen >= 7 &&
      postulacion.notaEntrevista >= 6 &&
      postulacion.cuposDisponibles > 0
    ) {
      console.log("Admisión regular");


    } else {
      console.log("Lista de espera");
    }


  } else {
    console.log("La postulación no cumple los requisitos");
  }


} else {
  console.log("Aspirante no habilitado para postular");
}