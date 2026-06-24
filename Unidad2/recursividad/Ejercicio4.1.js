function fibonacciConArbol(n, nivel = 0) {

    // Dibujar indentación
    let espacios = " ".repeat(nivel * 4);

    console.log(espacios + `fibonacci(${n})`);

    // CASO BASE:
    // Cuando n es 0 o 1 termina la rama.
    if (n <= 1) {
        return n;
    }

    // CASO RECURSIVO:
    // Dibujar llamadas izquierda y derecha.
    return (
        fibonacciConArbol(n - 1, nivel + 1) +
        fibonacciConArbol(n - 2, nivel + 1)
    );
}


// Ejecutar
console.log("Resultado:", fibonacciConArbol(4));