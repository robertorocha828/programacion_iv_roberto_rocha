const val NOTA_MINIMA = 7
fun main(){
    var cupos = 100
    println(cupos)
    println("Autor: Roberto Rocha")
    cupos = 80
    println("Cupos disponibles")
    println(cupos)
    println("Tipos de Variables en kotlin")
    println("Tipo Integer o Entero")
    var edad : Int = 18
    var cuposCarrera : Int = 40
    println("edad: $edad")
    println("cupos de la carrera: $cuposCarrera")
    println("Tipo Long")
    var numeroSolicitud : Long = 202610110009876L
    println("Número de solicitud: $numeroSolicitud")
    println("Tipo Float")
    var notaExamen : Float = 9.5f
    println("Nota del examen: $notaExamen / 10")
    println("Tipo Double")
    var valorInscripcion : Double = 25.50
    println("Valor de la inscripción: $valorInscripcion USD")
    println("Tipo Char un Caracter")
    var paralelo : Char = 'A'
    println("Paralelo: $paralelo")
    println("Tipo String")
    var nombre : String = "Roberto Rocha"
    var carrera : String = "Desarrollo de Software"
    println("Nombre: $nombre, carrera: $carrera")
    println("Tipo Boolean")
    var inscripcionAbierta : Boolean = true
    println("Inscripción abierta: $inscripcionAbierta")

    println("VAL CONST VAR")
    val aspirante = "Hernán Varas"
    val certificadosDisponibles=5
    println("Nombre del aspirante: $aspirante")
    println("Certificados disponibles: $certificadosDisponibles")
    println("Constante nota mínima: $NOTA_MINIMA")


}