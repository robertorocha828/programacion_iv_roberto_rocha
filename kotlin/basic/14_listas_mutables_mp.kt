fun main() {
    val aspirantes = mutableListOf("Roberto Rocha", "Hernán Varas", "Christian Cañar")

    var option: Int?
    do {
        println("\nSistema de Admisión - Autor: Roberto Rocha")
        println("1. Agregar Aspirante")
        println("2. Mostrar Aspirantes")
        println("3. Modificar Aspirante")
        println("4. Eliminar Aspirante")
        println("5. Salir")
        print("Seleccione una opción: ")
        option = readLine()?.toIntOrNull()

        when (option) {
            1 -> {
                print("Nombre del nuevo aspirante: ")
                val nombre = readLine() ?: ""
                if (nombre.isNotBlank()) {
                    aspirantes.add(nombre)
                    println("Aspirante incluido")
                } else {
                    println("El nombre no puede estar vacío")
                }
            }
            2 -> {
                println("Aspirantes:")
                for ((i, aspirante) in aspirantes.withIndex()) {
                    println("[$i] Aspirante: $aspirante")
                }
            }
            3 -> {
                println("Actualizar")
                print("Índice a modificar: ")
                val indice = readLine()?.toIntOrNull()
                if (indice != null && indice in aspirantes.indices) {
                    print("Nuevo nombre: ")
                    val nuevoNombre = readLine() ?: ""
                    if (nuevoNombre.isNotBlank()) {
                        aspirantes[indice] = nuevoNombre
                        println("Aspirante Actualizado")
                    } else {
                        println("Nombre no válido")
                    }
                } else {
                    println("Índice no válido")
                }
            }
            4 -> {
                println("Eliminar")
                print("Índice a eliminar: ")
                val indice = readLine()?.toIntOrNull()
                if (indice != null && indice in aspirantes.indices) {
                    aspirantes.removeAt(indice)
                    println("Aspirante Eliminado")
                } else {
                    println("Índice no válido")
                }
            }
            5 -> println("Saliendo...")
            else -> println("Opción no válida")
        }
    } while (option != 5)
}