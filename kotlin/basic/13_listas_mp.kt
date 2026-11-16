fun calcularTotal(costos: List<Int>): Int {
    var total = 0
    for (costo in costos){
        total += costo
        if (costo > 150){
            println("Rubro costoso")
        }
    }
    return total
}

fun main(){
    val carreras = listOf("Desarrollo de Software", "Mecánica Automotriz", "Enfermería") // solo lectura
    var interaccion : Int = 1
    for (carrera in carreras){
        println("Carreras $interaccion : $carrera")
        interaccion++
    }

    val costos = listOf(100,150,200,80,120)
    val total = calcularTotal(costos)
    println("Costo total de matrícula de Roberto Rocha: $total USD")



}