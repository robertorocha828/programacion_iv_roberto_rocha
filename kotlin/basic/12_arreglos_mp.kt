fun main(){
    println("Notas de Roberto Rocha por materia")
    val notas = arrayOf(6.0,7.5,8.0,9.0,7.0)
    println(notas[0])
    println(notas[2])
    println(notas[4])
    notas[4]=9.5 //modifica segun su indice en ejecucion
    println(notas[4])
    for (nota in notas){
        println("Nota")
        val notaConBono = minOf(10.0, nota + 1.0)
        println("Nota con bono $notaConBono")
        if (notaConBono >= 9.0){
            val notaAjustada = notaConBono - 0.5
            println("Nota ajustada: $notaAjustada")

        }
    }
}