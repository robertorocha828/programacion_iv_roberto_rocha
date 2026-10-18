// Encapsulamiento
class CupoCarrera {
    private cuposDisponibles: number = 40;

    asignarCupos(cantidad: number): void {
        if (cantidad>0){
            this.cuposDisponibles = Math.max(0, this.cuposDisponibles-cantidad);
        }
    }
    consultarCupos(): number{
        return this.cuposDisponibles;
    }
}

const cuposDesarrolloSoftware = new CupoCarrera();
cuposDesarrolloSoftware.asignarCupos(15);
console.log(cuposDesarrolloSoftware.consultarCupos())
cuposDesarrolloSoftware.asignarCupos(10);
console.log(cuposDesarrolloSoftware.consultarCupos())