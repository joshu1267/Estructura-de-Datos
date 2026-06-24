class NodoArbol {
    constructor(valor) {
        this.valor = valor;
        this.izquierdo = null;
        this.derecho = null;
    }
}


function recorridoInorden(raiz) {

    // CASO BASE:
    // Si el nodo actual es null,significa que llegamos al final de una rama y devolvemos un arreglo vacío.
    if (raiz === null) {
        return [];
    }

    // CASO RECURSIVO:
    // 1. Recorrer subárbol izquierdo
    // 2. Guardar valor de la raíz
    // 3. Recorrer subárbol derecho
    return recorridoInorden(raiz.izquierdo)
        .concat([raiz.valor])
        .concat(recorridoInorden(raiz.derecho));
}


function recorridoPreorden(raiz) {

    // CASO BASE:
    // Si el nodo no existe, terminamos esta rama.
    if (raiz === null) {
        return [];
    }

    // CASO RECURSIVO:
    // 1. Procesar raíz
    // 2. Recorrer izquierdo
    // 3. Recorrer derecho
    return [raiz.valor]
        .concat(recorridoPreorden(raiz.izquierdo))
        .concat(recorridoPreorden(raiz.derecho));
}


function recorridoPostorden(raiz) {

    // CASO BASE:
    // Si el nodo es null, devolvemos arreglo vacío.
    if (raiz === null) {
        return [];
    }

    // CASO RECURSIVO:
    // 1. Recorrer izquierdo
    // 2. Recorrer derecho
    // 3. Procesar raíz
    return recorridoPostorden(raiz.izquierdo)
        .concat(recorridoPostorden(raiz.derecho))
        .concat([raiz.valor]);
}

//Arbol:

const raiz = new NodoArbol(10);

raiz.izquierdo = new NodoArbol(5);
raiz.derecho = new NodoArbol(20);

raiz.izquierdo.izquierdo = new NodoArbol(2);
raiz.izquierdo.derecho = new NodoArbol(8);

raiz.derecho.derecho = new NodoArbol(30);


// Impresiones
console.log("Inorden:", recorridoInorden(raiz));

console.log("Preorden:", recorridoPreorden(raiz));

console.log("Postorden:", recorridoPostorden(raiz));


// Verificaciones
console.assert(
    JSON.stringify(recorridoInorden(raiz)) ===
    JSON.stringify([2, 5, 8, 10, 20, 30])
);

console.assert(
    JSON.stringify(recorridoPreorden(raiz)) ===
    JSON.stringify([10, 5, 2, 8, 20, 30])
);

console.assert(
    JSON.stringify(recorridoPostorden(raiz)) ===
    JSON.stringify([2, 8, 5, 30, 20, 10])
);

console.log("Ejercicio 3.1 superado.");