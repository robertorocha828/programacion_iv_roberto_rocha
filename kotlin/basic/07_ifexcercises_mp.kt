data class Solicitud(
    val nota : Double,
    val documentosCompletos : Boolean
)
data class Aspirante(
    val nombre: String,
    val nota: Double
)
data class Matricula(
    val aspirante: String,
    val nota : Double,
    val pagoRealizado : Boolean,
    val documentosCompletos: Boolean

)

fun main() {
    val solicitud = Solicitud(8.0, true)
    if (solicitud.nota >= 7.0 && solicitud.documentosCompletos) {
        println("Roberto Rocha puede matricularse")
    }

    val simulacros = arrayOf(6.0, 7.5, 9.0, 8.0, 6.5)
    if (simulacros[2] >= 8.5) {
        println("¡Excelente! Simulacro con nota alta")
    } else {
        println("Nota moderada en el simulacro")
    }

    val pruebas = arrayOf(8.0, 6.5, 9.0)
    val suma = pruebas[0] + pruebas[1] + pruebas[2]
    val promedio = suma / 3.0
    println("Promedio de Christian Cañar $promedio")
    if (promedio >= 7.0) {
        println("Aprobado")
    } else {
        println("Reprobado")
    }

    val aspirante= Aspirante("Hernán Varas", 7.5)
    if (aspirante.nota >= 9.0){
        println("Desempeño excelente")
    }else if (aspirante.nota>= 7.0){
        println("Desempeño bueno")
    }else if (aspirante.nota >=5.0){
        println("Desempeño regular")
    }else{
        println("Estado crítico")
    }

    val matricula = Matricula("Eduardo Pérez", 8.5, false, true)
    if(matricula.nota >= 7.0){
        if(matricula.pagoRealizado && matricula.documentosCompletos){
            println("Matrícula autorizada")
        }else if(!matricula.pagoRealizado){
            println("${matricula.aspirante} no ha realizado el pago")
        }else{
            println("Faltan documentos de ${matricula.aspirante}")
        }
    }else{
        println("Nota insuficiente")
    }
}