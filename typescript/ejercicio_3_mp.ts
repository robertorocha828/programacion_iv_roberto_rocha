class TrabajadorAdmision {
    atender(): void {
        console.log("El trabajador realiza una atención básica")
    }
}

class MartaGuaman extends TrabajadorAdmision{
    override atender(): void{
        console.log("Marta Guamán atiende en ventanilla las inscripciones de Enfermería")
    }
}

class PabloEspinosa extends TrabajadorAdmision{
    override atender(): void{
        console.log("Pablo Espinosa atiende en línea las consultas de Desarrollo de Software")
    }
}



const trabajadores: TrabajadorAdmision[]=[
    new MartaGuaman(),
    new PabloEspinosa()
]
trabajadores.forEach(trabajador=>trabajador.atender());