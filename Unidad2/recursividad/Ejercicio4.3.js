function factorialCola(n, acumulador = 1) {

    // CASO BASE:
    // Cuando n llega a 0 o 1, el acumulador ya contiene el resultado final.
    if (n <= 1) {
        return acumulador;
    }

    // CASO RECURSIVO:
    // Guardamos el producto parcial dentro del acumulador y seguimos.
    return factorialCola(
        n - 1,
        acumulador * n
    );
}


// Impresiones
console.log(factorialCola(5));
console.log(factorialCola(7));


// Verificaciones
console.assert(factorialCola(5) === 120);
console.assert(factorialCola(7) === 5040);
