class InstitutoEducativo {
    admitir(): void{
        console.log("Admisión estándar")
    }
}

class InstitutoCentralTecnico extends InstitutoEducativo{
    admisionPorExamen(): void{
        console.log("El Central Técnico de Quito admite según el puntaje del examen")
    }
}

class InstitutoJapon extends InstitutoEducativo{
    admisionPorEntrevista(): void{
        console.log("El Instituto Japón de Quito realiza una entrevista personal")
    }
}

const centralTecnico=new InstitutoCentralTecnico();
centralTecnico.admitir();
centralTecnico.admisionPorExamen();
const institutoJapon = new InstitutoJapon();
institutoJapon.admitir();
institutoJapon.admisionPorEntrevista();