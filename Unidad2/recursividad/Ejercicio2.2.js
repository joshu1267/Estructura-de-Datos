function busquedaBinariaRecursiva(arr, objetivo, bajo, alto) {

    // CASO BASE 1:
    // No hay más rango para buscar.
    if (bajo > alto) {
        return -1;
    }

    // Punto medio
    const medio = Math.floor((bajo + alto) / 2);

    // CASO BASE 2:
    // Encontrado.
    if (arr[medio] === objetivo) {
        return medio;
    }

    // CASO RECURSIVO:
    // Buscar izquierda o derecha.
    if (objetivo < arr[medio]) {
        return busquedaBinariaRecursiva(
            arr,
            objetivo,
            bajo,
            medio - 1
        );
    }

    return busquedaBinariaRecursiva(
        arr,
        objetivo,
        medio + 1,
        alto
    );
}


// Prueba
const datosOrdenados = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];

console.log(busquedaBinariaRecursiva(datosOrdenados, 23, 0, 9));
console.log(busquedaBinariaRecursiva(datosOrdenados, 100, 0, 9));

// Verificación
console.assert(
    busquedaBinariaRecursiva(datosOrdenados, 23, 0, 9) === 5
);

console.assert(
    busquedaBinariaRecursiva(datosOrdenados, 100, 0, 9) === -1
);

console.log("Ejercicio 2.2 superado.");