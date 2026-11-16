fun main(){
    val portal = 2
    when(portal){
        1 -> println("Destino: Tierra")
        2 -> println("Destino: Marte")
        3 -> println("Destino: Saturno")
        else -> println("Portal No disponible")
    }

    println("Incluye el dia (1-7)")
    val dia = readLine()!!.toInt()
    when(dia){
        1,2,3,4,5 -> println("Dia de experimentos")
        6,7 -> println("Dia de descanso")
        else -> println("Dia invalido")
    }

    println("Ingrese la energia del portal")
    val energia = readLine()!!.toInt()
    when(energia){
        in 0..39 -> println("Energia baja")
        in 40..79 -> println("Energia media")
        in 80..100 -> println("Energia alta")
        else -> println("Energia invalido")
    }

    val energiaNuclear = 80
    val motorActivo = true
    val costoViaje = 40
    /*
    Trabajo con condicionales y comentarios
    con when
    */

    when{
        energiaNuclear >= costoViaje&&motorActivo -> {
            val restante = energiaNuclear-costoViaje
            println("Viaje autorizado")
            println("energia restante $restante")
        }
        energiaNuclear<costoViaje&&motorActivo -> {
            println("Energia Insuficientes")
        }
        !motorActivo -> {
            println("El motor esta apagado")
        }
    }
}
