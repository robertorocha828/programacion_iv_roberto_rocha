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
}