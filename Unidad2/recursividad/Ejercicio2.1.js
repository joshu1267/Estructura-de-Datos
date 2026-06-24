function invertirArreglo(arr, inicio, fin) {

    // CASO BASE:
    // Cuando los índices se encuentran o se cruzan.
    if (inicio >= fin) {
        return;
    }

    // CASO RECURSIVO:
    // Intercambiar extremos.
    let temporal = arr[inicio];
    arr[inicio] = arr[fin];
    arr[fin] = temporal;

    invertirArreglo(arr, inicio + 1, fin - 1);
}


// Prueba
let miLista = [10, 20, 30, 40, 50];

console.log("Antes:", miLista);

invertirArreglo(miLista, 0, miLista.length - 1);

console.log("Después:", miLista);

// Verificación
console.assert(
    JSON.stringify(miLista) ===
    JSON.stringify([50, 40, 30, 20, 10])
);

console.log("Ejercicio 2.1 superado.");