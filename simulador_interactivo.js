function name() {
    let nombre = prompt("What is your name?");
    alert("Welcome " + nombre);
}

function jugar(opcionUsuario) {
    const opciones = ['piedra', 'papel', 'tijeras'];
    const opcionComputadora = opciones[Math.floor(Math.random() * opciones.length)];

    console.log('Usuario:', opcionUsuario);
    console.log('Computadora:', opcionComputadora);

    if (opcionUsuario === opcionComputadora) {
        console.log('Empate');
        return 0;
    } else if (
        (opcionUsuario === 'piedra' && opcionComputadora === 'tijeras') ||
        (opcionUsuario === 'papel' && opcionComputadora === 'piedra') ||
        (opcionUsuario === 'tijeras' && opcionComputadora === 'papel')
    ) {
        console.log('Ganaste');
        return 1;
    } else {
        console.log('Perdiste');
        return -1;
    }
}

function iniciar_juego() {
    name();
    let puntos = 0;
    let opcionUsuario;

    while (opcionUsuario !== '4') {
        opcionUsuario = prompt("Elige una opción:\n1. Jugar\n2. Ver puntos\n3. Reiniciar puntos\n4. Salir");

        switch (opcionUsuario) {
            case '1':
                let continuar = true;

                while (continuar) {
                    let opcion = prompt("Elige una opción (piedra, papel o tijeras):");
                    let resultado = jugar(opcion);
                    puntos += resultado;

                    if (resultado === 1) {
                        alert("¡Ganaste esta ronda!");
                    } else if (resultado === -1) {
                        alert("Perdiste esta ronda");
                    } else {
                        alert("Empate en esta ronda");
                    }

                    let respuesta = prompt("¿Quieres jugar otra ronda? (s/n)");
                    if (respuesta.toLowerCase() !== "s") {
                        continuar = false;
                    }
                }
                break;
            case '2':
                alert("Puntos: " + puntos);
                break;
            case '3':
                puntos = 0;
                alert("Puntos reiniciados.");
                break;
            case '4':
                alert("¡Hasta luego!");
                break;
            default:
                alert("Opción inválida. Inténtalo de nuevo.");
                break;
        }
    }
}

iniciar_juego();
