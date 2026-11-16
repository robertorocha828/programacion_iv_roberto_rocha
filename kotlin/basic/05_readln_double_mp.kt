
fun main(){
    println("Pago de trámites de admisión - Autor: Roberto Rocha")
    println("¿Nombre del aspirante?")
    val nombre = readLine()
    println("Cantidad de certificados:")
    val certificados =readLine()!!.toInt()
    println("Costo por certificado (USD):")
    val costo = readLine()!!.toDouble()
    println("Dinero disponible (USD):")
    val dinero = readLine()!!.toDouble()
    val costoTotal = certificados * costo
    val saldo = dinero - costoTotal
    println("Reporte")
    println("Aspirante: $nombre")
    println("Costo total: $costoTotal USD")
    println("Saldo: $saldo USD")
}
 