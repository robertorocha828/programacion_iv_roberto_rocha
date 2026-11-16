fun main(){
    println("Inputs en terminal ReadLine")
    println("¿Cómo te llamas?")
    val nombre = readLine()
    println("Bienvenido a las admisiones del Instituto Central Técnico: $nombre")
    println("Puntos del examen de Roberto Rocha (máximo 6):")
    val puntosExamen = readLine()!!.toInt()
    println("Puntos de la entrevista de Roberto Rocha (máximo 4):")
    val puntosEntrevista = readLine()!!.toInt()
    val total = puntosExamen+puntosEntrevista
    println("Total de puntos de Roberto Rocha (sobre 10): $total")
    println("Calculadora de Cupos")
    println("Cupos iniciales de Desarrollo de Software:")
    val cuposIniciales = readLine()!!.toInt()
    println("Cupos asignados:")
    val cuposAsignados = readLine()!!.toInt()
    val cuposRestantes = cuposIniciales-cuposAsignados
    println("Cupos restantes: $cuposRestantes")
}