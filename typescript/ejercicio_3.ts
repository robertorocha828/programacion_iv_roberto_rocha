
class Guerrero {
    atacar(): void {
        console.log("El guerrero realiza un ataque básico")
    }
}

class Goku extends Guerrero{
    override atacar(): void{
        console.log("Goku lanza un poderoso Kamehameha")
    }
}

class Vegeta extends Guerrero{
    override atacar(): void{
        console.log("Vegeta utiliza su poderoso Final Flash")
    }
}



const guerreros: Guerrero[]=[
    new Goku(),
    new Vegeta()
]
guerreros.forEach(guerrero=>guerrero.atacar());
