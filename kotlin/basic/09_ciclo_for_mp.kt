fun main() {
    for (i in 1..5) {
        println("Roberto Rocha responde la pregunta $i")
    }

    for (i in 10 downTo(5)){
        println("Quedan $i turnos de atención")
    }

    for (i in 1..20 step(2)){
        println("Atendiendo el turno $i")
    }

    for (i in 1..10){
        val resultado = 5*i
        println("Certificados $i x 5 USD = $resultado USD")
        println("Certificados $i x 5 USD = ${i*5} USD")
    }
}