
fun main(){
    println("Condicional If")
    println("Condicional Simple o un camino")
    var nota = 8.5 // sobre 10
    if (nota>=7.0){
        println("Roberto Rocha puede continuar con la admisión")
    }
    println("Condicional if-else o dos caminos")
    nota = 5.5
    if (nota>=7.0){
        println("Roberto Rocha puede continuar con la admisión")
    } else {
        println("Nota insuficiente")
    }
 
    println("Condicional múltiple")
    nota = 8.0
    if (nota>=9.5){
        println("Roberto Rocha obtiene la beca de excelencia")
    } else if (nota >= 7.0){
        println("Nota suficiente")
    } else {
        println("Nota insuficiente")
    }
 
    println("Condicional enlazada")
    nota = 8.0
    val documentosCompletos = true
    if (nota>=9.5){
        println("Roberto Rocha obtiene la beca de excelencia")
        if (documentosCompletos){
            println("puede matricularse")
        }
    } else if (nota >= 7.0){
        println("Nota suficiente")
        if (documentosCompletos){
            println("puede matricularse")
        }
    } else {
        println("Nota insuficiente")
    }
}
 