fun calcularTotal(costos: List<Int>): Int {
    var total = 0
    for (costo in costos){
        total += costo
        if (costo > 150){
            println("Herramienta cosotsa")
        }
    }
    return total
}

fun main(){
    val destinos = listOf("Tierra", "Marte", "Saturno") // solo lectura 
    val interacion : Int = 1
    for (destino in destinos){
        println("Destinos $interacion : $destino")
    }

    val costos = listOf(100,150,200,80,120)
    val total = calcularTotal(costos)
    println("Costo total de herrramienta de Roberto Rocha: $total")



}