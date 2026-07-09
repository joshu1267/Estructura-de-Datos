
// TAREA 2: Implementación de la Estructura TDA Trie


class NodoTrie {
    constructor() {
        this.hijos = new Map();
        this.esFinDePalabra = false;
    }
}

class MotorAutocompletado {
    constructor() {
        this.raiz = new NodoTrie();
    }

    insertarTermino(termino) {
        let actual = this.raiz;
        const palabra = termino.toLowerCase();

        for (const caracter of palabra) {
            if (!actual.hijos.has(caracter)) {
                actual.hijos.set(caracter, new NodoTrie());
            }

            actual = actual.hijos.get(caracter);
        }

        actual.esFinDePalabra = true;
    }

    buscarNodoPrefijo(prefijo) {
        let actual = this.raiz;
        const prefijoNormalizado = prefijo.toLowerCase();

        for (const caracter of prefijoNormalizado) {
            if (!actual.hijos.has(caracter)) {
                return null;
            }

            actual = actual.hijos.get(caracter);
        }

        return actual;
    }

    obtenerSugerencias(prefijo) {
        const resultados = [];
        const prefijoNormalizado = prefijo.toLowerCase();
        const nodoInicial = this.buscarNodoPrefijo(prefijoNormalizado);

        if (nodoInicial !== null) {
            this.dfsExtraerPalabras(
                nodoInicial,
                prefijoNormalizado,
                resultados
            );
        }

        return resultados;
    }

    dfsExtraerPalabras(nodo, palabraActual, resultados) {
        if (nodo.esFinDePalabra) {
            resultados.push(palabraActual);
        }

        for (const [caracter, hijo] of nodo.hijos) {
            this.dfsExtraerPalabras(
                hijo,
                palabraActual + caracter,
                resultados
            );
        }
    }
}

// TAREA 3: Simulador de Barra de Búsqueda de Paquetería


// 1. Inicialización y carga del diccionario

const motor = new MotorAutocompletado();

const diccionario = [
    "paquete_express",
    "postal_nacional",
    "prioritario",
    "estandar",
    "perecedero"
];

diccionario.forEach((termino) => {
    motor.insertarTermino(termino);
});

console.log("Diccionario de paquetería cargado exitosamente.");

// 2. Opción A: Llamadas individuales

console.log(
    "Sugerencias para 'p':",
    motor.obtenerSugerencias("p")
);

console.log(
    "Sugerencias para 'pa':",
    motor.obtenerSugerencias("pa")
);

console.log(
    "Sugerencias para 'pos':",
    motor.obtenerSugerencias("pos")
);

// 3. Opción B: Simulación de entrada de usuario

const prefijosPrueba = ["p", "pa", "pos", "e", "pe"];

console.log("\n--- Simulación de Bucle de Búsqueda ---");

prefijosPrueba.forEach((prefijo) => {
    console.log(
        `Buscando '${prefijo}':`,
        motor.obtenerSugerencias(prefijo)
    );
});