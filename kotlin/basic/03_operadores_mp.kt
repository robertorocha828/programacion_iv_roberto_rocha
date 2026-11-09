fun main() {
    println("Operadores - Autor: Roberto Rocha")
    println("Operadores Aritméticos")

    var costoCertificado: Double = 10.50
    var costoCopia: Double = 5.50
    var suma: Double = costoCertificado + costoCopia

    println("Suma + : $costoCertificado + $costoCopia = ${costoCertificado + costoCopia}")
    println("Suma + : $costoCertificado + $costoCopia = $suma")
    println("Resta - : $costoCertificado - $costoCopia = ${costoCertificado - costoCopia}")
    println("Multiplicación * : $costoCertificado * $costoCopia = ${costoCertificado * costoCopia}")
    println("División / : $costoCertificado / $costoCopia = ${costoCertificado / costoCopia}")
    println("Prioridades de los operadores aritméticos")
    println("1 ()")
    println("2 *,/,%")
    println("3 +,-")
    val puntosAdmision = 10+3*5+5
    println("Puntos de admisión $puntosAdmision")
    val cuposPorComision = 15/5*5
    println("Cupos por comisión $cuposPorComision")
    val valorTotal = 100+20/4*3-10%3
    println("Valor total $valorTotal")

    println("Operadores de Comparación")
    val notaMinima = 7.0
    val notaRoberto = 9.5
    val notaHernan = 6.5
    println("Nota mínima: $notaMinima | Roberto Rocha: $notaRoberto | Hernán Varas: $notaHernan")
    println("Igual a == ${notaMinima==7.0}")
    println("Igual a == ${notaHernan==notaMinima}")
    println("Diferente de != ${notaHernan!=notaMinima}")
    println("Diferente de != ${notaMinima!=7.0}")
    println("Mayor que > ${notaRoberto>notaMinima}" )
    println("Mayor que > ${notaHernan>notaMinima}" )
    println("Menor que < ${notaHernan<notaMinima}" )
    println("Menor que < ${notaRoberto<notaMinima}" )
    println("Mayor igual >= ${notaMinima>=7.0}" )
    println("Mayor igual >= ${notaRoberto>=notaMinima}" )
    println("Mayor igual >= ${notaHernan>=notaMinima}" )
    println("Menor igual <= ${notaMinima<=7.0}" )
    println("Menor igual <= ${notaRoberto<=notaMinima}" )
    println("Menor igual <= ${notaHernan<=notaMinima}" )
}