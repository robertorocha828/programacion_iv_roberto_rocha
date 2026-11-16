data class AspiranteNota(
    val nombre: String,
    val nota: Double // sobre 10
)
fun main() {
    var presupuestoTotal = 0.0
    println("Presupuesto de nivelación de Roberto Rocha")

    for (curso in 1..6) {
        val costoOriginal = curso * 25.0
        var descuento = 0.0

        if (costoOriginal >= 100.0) {
            descuento = costoOriginal * 0.20
        }

        val costoFinal = costoOriginal - descuento
        presupuestoTotal += costoFinal

        println("Curso $curso")
        println("Costo Original $costoOriginal USD")
        println("Descuento aplicado $descuento USD")
        println("Costo final $costoFinal USD")
    }

    println("Presupuesto total de nivelación %.2f USD".format(presupuestoTotal))


    val aspirantes = arrayOf(
        AspiranteNota("Camila Andrade", 9.5),
        AspiranteNota("Valeria Morocho", 8.5),
        AspiranteNota("Roberto Rocha", 8.0),
        AspiranteNota("Josué Ruiz", 6.5),
        AspiranteNota("Carlos Baños", 4.5),
        AspiranteNota("Mateo Pazmiño", 6.0)

    )

    val notaMinima = 7.0
    for (aspirante in aspirantes) {
        println("Aspirante: ${aspirante.nombre}")
        println("Nota: ${aspirante.nota} / 10")

        when {
            aspirante.nota < 5.0 -> {
                println("Estado: NO ADMITIDO")
                println("No puede continuar con la matrícula")
            }
            aspirante.nota < 7.0 -> {
                println("Estado: Lista de espera")
            }
            aspirante.nota < 9.0 -> {
                println("Estado: Admitido")
            }
            else -> {
                println("Estado: BECA DE EXCELENCIA")
            }
        }

        if (aspirante.nota >= notaMinima) {
            val sobreElMinimo = aspirante.nota - notaMinima
            println("Matrícula autorizada")
            println("Puntos sobre el mínimo $sobreElMinimo")
        }
    }


}