class ProcesoAdmision{
    evaluar(): void{
        console.log("Evaluación básica del aspirante")
    }
}

class AdmisionCentralTecnico extends ProcesoAdmision{
    override evaluar(): void {
        console.log("Central Técnico evalúa con el puntaje del examen de acceso")
    }
}

class AdmisionJapon extends ProcesoAdmision{
    override evaluar(): void {
        console.log("Japón evalúa con el promedio de bachillerato")
    }
}

const procesos: ProcesoAdmision[]=[
    new AdmisionCentralTecnico(),
    new AdmisionJapon(),
    new AdmisionJapon()
]
procesos.forEach(proceso=>proceso.evaluar());