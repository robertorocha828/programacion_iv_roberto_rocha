class Boxeador {
    golpear(): void{
        console.log("Golpe básico")
    }
}

class Rocky extends Boxeador{
    golpeEspecial(): void{
        console.log("Rocky lanza un poderoso gancho")
    }
}

class Apollo extends Boxeador{
    golpeRapido(): void{
        console.log("Apollo lanza un jab veloz")
    }
}

const rocky=new Rocky();
rocky.golpear();
rocky.golpeEspecial();
const apolloCreek = new Apollo();
apolloCreek.golpear();
apolloCreek.golpeRapido();






