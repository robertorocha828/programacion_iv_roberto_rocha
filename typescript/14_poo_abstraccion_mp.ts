abstract class ProcesoMatricula{
    abstract verificarRequisitos(): void;
    confirmarInscripcion(): void{
        console.log("El aspirante confirma su inscripción")
    }
}

class MatriculaCentralTecnico extends ProcesoMatricula{
    verificarRequisitos(): void {
        console.log("Central Técnico verifica la copia de cédula y el título de bachiller")
    }
}

class MatriculaRuminahui extends ProcesoMatricula{
    verificarRequisitos():void{
        console.log("Rumiñahui verifica el certificado de notas y la foto tamaño carné")
    }
}

const matriculas: ProcesoMatricula[]=[
    new MatriculaCentralTecnico(),
    new MatriculaRuminahui()
]
matriculas.forEach(matricula=>matricula.verificarRequisitos());