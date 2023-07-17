function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

function name() {
    let nombre = prompt("What is your name?");
    let edad = prompt("How old are you?");
    alert("Welcome " + nombre + ". Your age is " + edad + ".");
    return new Persona(nombre, edad);
}

function jugar(opcionUsuario) {
    const opciones = ['piedra', 'papel', 'tijeras'];


    const opcionesValidas = opciones.filter((opcion) => opcion === opcionUsuario.toLowerCase());

    if (opcionesValidas.length === 0) {
        console.log('Opción inválida. Inténtalo de nuevo.');
        return null;
    }
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
    let persona = name();
    let puntos = 0;
    let puntosMaquina = 0;
    let opcionUsuario;

    while (opcionUsuario !== '4') {
        opcionUsuario = prompt("Elige una opción:\n1. Jugar\n2. Ver puntos\n3. Reiniciar puntos\n4. Salir");

        switch (opcionUsuario) {
            case '1':
                let continuar = true;

                while (continuar) {
                    let opcion = prompt("Elige una opción (piedra, papel o tijeras):");
                    let resultado = jugar(opcion, persona);

                    if (resultado === 1) {
                        alert(persona.nombre + " wins");
                        puntos++;
                    } else if (resultado === -1) {
                        alert("defeat");
                        puntosMaquina++;
                    } else if (resultado === 0) {
                        alert("tie");
                    } else {
                        alert("ingresa un dato correcto...")
                    }

                    let respuesta = prompt("¿Quieres jugar otra ronda? (s/n)");
                    if (respuesta.toLowerCase() !== "s") {
                        continuar = false;
                    }
                }
                break;
            case '2':
                alert(persona.nombre + ": " + puntos + " puntos\nMáquina: " + puntosMaquina + " puntos");
                break;
            case '3':
                puntos = 0;
                puntosMaquina = 0;
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
