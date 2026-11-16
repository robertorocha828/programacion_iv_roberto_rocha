fun iniciarProcesoAdmision(){
    println("Iniciando proceso de admisión")
    println("Conteo regresivo")
    println("3")
    println("2")
    println("1")
    println("Roberto Rocha inició el proceso de admisión")
}

fun solicitarCertificados(carrera: String, cantidad: Int, valorUnitario: Int){
    println("Solicitando certificados para $carrera")
    val total = cantidad*valorUnitario
    println("costo total: $total USD")
}

// return especificar tipo de dato
fun calcularDescuento(arancel:Double): Double{
    var descuento: Double = 0.0
    if (arancel >= 100){
        descuento = arancel *0.15
    }
    return descuento
}

fun calcularPromedio(notas: Array<Double>): Double {
    var total = 0.0
    for (nota in notas){
        total += nota
        if (nota >= 9.0){
            println("Nota sobresaliente $nota")
        }
    }
    return total / notas.size
}

fun main(){
    iniciarProcesoAdmision()
    iniciarProcesoAdmision()
    solicitarCertificados("Desarrollo de Software",5 ,4)
    solicitarCertificados("Mecánica Automotriz",4 ,7)
    val descuentoAspirante = calcularDescuento(123.5)
    println("El aspirante Roberto Rocha tiene este descuento: $descuentoAspirante USD")
    val notas=arrayOf(6.0,7.5,9.0,8.0,6.5)
    val promedio = calcularPromedio(notas)
    println("Promedio de Roberto Rocha (sobre 10): $promedio")
}