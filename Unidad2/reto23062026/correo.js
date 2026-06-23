class ColaCorreos {
    constructor() {
        this.cola = [];
    }

    // Agregar correo a la cola
    agregarCorreo(correo) {
        this.cola.push(correo);
        console.log(`Correo agregado: ${correo}`);
    }

    // Procesar el siguiente correo
    enviarCorreo() {
        if (this.cola.length === 0) {
            console.log("No hay correos pendientes.");
            return;
        }

        const correo = this.cola.shift();
        console.log(`Enviando correo a: ${correo}`);
    }

    // Mostrar correos pendientes
    mostrarPendientes() {
        console.log("Correos pendientes:");
        console.log(this.cola);
    }
}

// Crear cola
const sistema = new ColaCorreos();

// Llegan correos
sistema.agregarCorreo("jorgeG@email.com");
sistema.agregarCorreo("ana@email.com");
sistema.agregarCorreo("luis@email.com");


// Mostrar pendientes
sistema.mostrarPendientes();

// Enviar correos
sistema.enviarCorreo();
sistema.enviarCorreo();

// Ver estado final
sistema.mostrarPendientes();