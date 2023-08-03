let persona;
let puntosJugador = 0;
let puntosMaquina = 0;

function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

function name() {
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    return new Persona(nombre, edad);
}

function guardarDatos() {
    const datos = {
        nombre: persona.nombre,
        edad: persona.edad,
        puntosJugador: puntosJugador,
        puntosMaquina: puntosMaquina
    };

    const datosJSON = JSON.stringify(datos);

    localStorage.setItem("datosJuego", datosJSON);
}

function cargarDatos() {
    const datosJSON = localStorage.getItem("datosJuego");

    if (datosJSON) {
        const datos = JSON.parse(datosJSON);
        nombre = datos.nombre;
        edad = datos.edad;
        puntosJugador = datos.puntosJugador;
        puntosMaquina = datos.puntosMaquina;

        document.getElementById("puntos").textContent = persona.nombre + ": " + puntosJugador + " puntos | Máquina: " + puntosMaquina + " puntos";
    }
}

function jugar(opcionUsuario) {
    const opciones = ['piedra', 'papel', 'tijeras'];

    const opcionesValidas = opciones.filter((opcion) => opcion === opcionUsuario.toLowerCase());

    if (opcionesValidas.length === 0) {
        console.log('Opción inválida. Inténtalo de nuevo...');
        return null;
    }

    const opcionComputadora = opciones[Math.floor(Math.random() * opciones.length)];

    console.log('Usuario:', opcionUsuario);
    console.log('Computadora:', opcionComputadora);

    let resultado = document.getElementById("resultado");

    if (opcionUsuario === opcionComputadora) {
        resultado.textContent = 'Empate';
    } else if (
        (opcionUsuario === 'piedra' && opcionComputadora === 'tijeras') ||
        (opcionUsuario === 'papel' && opcionComputadora === 'piedra') ||
        (opcionUsuario === 'tijeras' && opcionComputadora === 'papel')
    ) {
        resultado.textContent = 'Ganaste';
        puntosJugador++;
    } else {
        resultado.textContent = 'Perdiste';
        puntosMaquina++;
    }

    guardarDatos();

    document.getElementById("puntos").textContent = persona.nombre + ": " + puntosJugador + " puntos | Máquina: " + puntosMaquina + " puntos";
}

function iniciar_juego() {
    persona = name();
    if (persona === null) {
        return;
    }

    cargarDatos();
    document.getElementById("juego").style.display = "block";
}

function reiniciarPuntos() {
    puntosJugador = 0;
    puntosMaquina = 0;
    guardarDatos(); 
    document.getElementById("puntos").textContent = persona.nombre + ": 0 puntos | Máquina: 0 puntos";
}

function salir() {
    document.getElementById("juego").style.display = "none";
}

document.getElementById("comenzar").addEventListener("click", iniciar_juego);
document.getElementById("piedra").addEventListener("click", function() {
    jugar('piedra');
});
document.getElementById("papel").addEventListener("click", function() {
    jugar('papel');
});
document.getElementById("tijeras").addEventListener("click", function() {
    jugar('tijeras');
});
document.getElementById("reiniciarPuntos").addEventListener("click", reiniciarPuntos);
document.getElementById("salir").addEventListener("click", salir);

cargarDatos();