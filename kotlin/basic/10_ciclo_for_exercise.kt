data class Portal(
    val nombre: String,
    val energia: Int
)
fun main() {
    var presupuestoTotal = 0.0
    println("Presupuesto De Expedicion")

    for (viaje in 1..6) {
        val costoOriginal = viaje * 25.0
        var descuento = 0.0

        if (costoOriginal >= 100.0) {
            descuento = costoOriginal * 0.20
        }

        val costoFinal = costoOriginal - descuento
        presupuestoTotal += costoFinal

        println("Viaje $viaje")
        println("Costo Original $costoOriginal")
        println("Descuento aplicado $descuento")
        println("Costo final $costoFinal")
    }

    println("Presupuesto total de la Expedicion %1f creditos".format(presupuestoTotal))


    val portales = arrayOf(
        Portal("Tierra", 30),
        Portal("Marte", 65),
        Portal("Saturno", 95),
        Portal("JUpiter", 130),
        Portal("Roberto", 80),
        Portal("Rocha", 79)

    )

    val costoViaje = 50
    for (portal in portales) {
        println("Portal: ${portal.nombre}")
        println("Energia: ${portal.energia}")

        when {
            portal.energia < 50 -> {
                println("Estado: INACTIVO")
                println("No se puede realizar el viaje")
            }
            portal.energia < 80 -> {
                println("Estado: Activo")
            }
            portal.energia < 120 -> {
                println("Estado: Estable")
            }
            else -> {
                println("Estado: ALTA CAPACIIDAD")
            }
        }

        if (portal.energia >= costoViaje) {
            val restante = portal.energia - costoViaje
            println("Viaje autorizado")
            println("Energia restante $restante")
        }
    }


}