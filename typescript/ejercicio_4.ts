abstract class Saiyajin{
    abstract transformarse(): void;
    detectarki(): void{
        console.log("Detectando el nivel de energia del enemigo....")
    }
}

class Goku extends Saiyajin{
    detectarki(): void {
        console.log("Goku se transforma en Super Saiyajin Blue")
    }
}

class Vegeta extends Saiyajin{
    detectarki():void{
        console.log("")
    }
}

const boxeadores: Boxeador[]=[
    new Rocky(),
    new Apollo
]
boxeadores.forEach(boxeador=>boxeador.atacar());
