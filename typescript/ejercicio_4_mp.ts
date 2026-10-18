abstract class EvaluadorAdmision{
    abstract calificarAspirante(): void;
    revisarDocumentos(): void{
        console.log("Revisando los documentos del aspirante....")
    }
}

class SofiaMolina extends EvaluadorAdmision{
    calificarAspirante(): void {
        console.log("Sofía Molina califica la entrevista con 9 sobre 10")
    }
}

class AndresVillacis extends EvaluadorAdmision{
    calificarAspirante():void{
        console.log("Andrés Villacís califica la entrevista con 8.5 sobre 10")
    }
}

const evaluadores: EvaluadorAdmision[]=[
    new SofiaMolina(),
    new AndresVillacis()
]
evaluadores.forEach(evaluador=>{
    evaluador.revisarDocumentos();
    evaluador.calificarAspirante();
});