class Funcionario {
    atender(): void {
        console.log("El funcionario realiza una atención básica")
    }
}

class VeronicaTipan extends Funcionario{
    recibirDocumentos(): void{
        console.log("Verónica Tipán recibe la copia de cédula y el título de bachiller")
    }
}

class LuisCevallos extends Funcionario{
    entrevistarAspirante(): void{
        console.log("Luis Cevallos entrevista al aspirante de Mecánica Automotriz")
    }
}

const veronica=new VeronicaTipan();
veronica.atender();
veronica.recibirDocumentos();
const luis = new LuisCevallos();
luis.atender();
luis.entrevistarAspirante();