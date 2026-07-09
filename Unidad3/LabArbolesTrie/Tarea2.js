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
        if (typeof termino !== "string" || termino.trim() === "") {
            return;
        }

        let actual = this.raiz;
        const palabra = termino.trim().toLowerCase();

        for (const caracter of palabra) {
            if (!actual.hijos.has(caracter)) {
                actual.hijos.set(caracter, new NodoTrie());
            }

            actual = actual.hijos.get(caracter);
        }

        actual.esFinDePalabra = true;
    }

    buscarNodoPrefijo(prefijo) {
        if (typeof prefijo !== "string") {
            return null;
        }

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
        if (typeof prefijo !== "string") {
            return [];
        }

        const prefijoNormalizado = prefijo.toLowerCase();
        const nodoInicial = this.buscarNodoPrefijo(prefijoNormalizado);

        if (nodoInicial === null) {
            return [];
        }

        return this.dfsExtraerPalabras(nodoInicial, prefijoNormalizado);
    }

    dfsExtraerPalabras(nodoInicial, palabraInicial) {
        const resultados = [];
        const pila = [
            {
                nodo: nodoInicial,
                palabra: palabraInicial
            }
        ];

        while (pila.length > 0) {
            const { nodo, palabra } = pila.pop();

            if (nodo.esFinDePalabra) {
                resultados.push(palabra);
            }

            const hijos = Array.from(nodo.hijos.entries());

            for (let i = hijos.length - 1; i >= 0; i--) {
                const [caracter, hijo] = hijos[i];

                pila.push({
                    nodo: hijo,
                    palabra: palabra + caracter
                });
            }
        }

        return resultados;
    }
}

module.exports = {
    NodoTrie,
    MotorAutocompletado
};