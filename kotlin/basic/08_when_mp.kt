fun main(){
    val carreraElegida = 2
    when(carreraElegida){
        1 -> println("Roberto Rocha postula a: Desarrollo de Software")
        2 -> println("Roberto Rocha postula a: Mecánica Automotriz")
        3 -> println("Roberto Rocha postula a: Enfermería")
        else -> println("Carrera no disponible")
    }

    println("Incluye el día (1-7)")
    val dia = readLine()!!.toInt()
    when(dia){
        1,2,3,4,5 -> println("Día de atención en secretaría")
        6,7 -> println("Secretaría cerrada")
        else -> println("Día inválido")
    }

    println("Ingrese la nota del examen (entera, de 0 a 10)")
    val nota = readLine()!!.toInt()
    when(nota){
        in 0..6 -> println("Nota baja")
        in 7..8 -> println("Nota media")
        in 9..10 -> println("Nota alta")
        else -> println("Nota inválida")
    }

    val saldo = 80.0
    val documentosCompletos = true
    val costoMatricula = 40.0
    /*
    Trabajo con condicionales y comentarios
    con when
    */

    when{
        saldo >= costoMatricula&&documentosCompletos -> {
            val restante = saldo-costoMatricula
            println("Matrícula autorizada para Roberto Rocha")
            println("saldo restante $restante USD")
        }
        saldo<costoMatricula&&documentosCompletos -> {
            println("Saldo insuficiente")
        }
        !documentosCompletos -> {
            println("Faltan documentos")
        }
    }
}