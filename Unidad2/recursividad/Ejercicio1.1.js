function sumaDigitos(n) {

    // CASO BASE:
    // Si el número tiene un solo dígito (0–9), entonces se devuelve ese mismo número.
    if (n < 10) {
        return n;
    }

    // CASO RECURSIVO:
    // Tomamos el último dígito usando % 10
    // y lo sumamos al resultado de llamar nuevamente
    // a la función con el resto del número
    // (quitando el último dígito con Math.floor(n / 10)).
    return (n % 10) + sumaDigitos(Math.floor(n / 10));
}
// Impresiones
console.log(sumaDigitos(1243));
console.log(sumaDigitos(0));
console.log(sumaDigitos(9));

// Casos de prueba para validación
console.assert(sumaDigitos(1243) === 10, "Error en sumaDigitos(1243)");
console.assert(sumaDigitos(0) === 0, "Error en sumaDigitos(0)");
console.assert(sumaDigitos(9) === 9, "Error en sumaDigitos(9)");

console.log("Ejercicio 1.1 superado.");