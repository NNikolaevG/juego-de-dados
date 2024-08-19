"use strict";



// Función para generar un número aleatorio entre 1 y 6 (para simular el lanzamiento de un dado)
function lanzarDado() {
    return Math.floor(Math.random() * 6) + 1;
}


// Función principal que se ejecuta al hacer clic en el botón "Tirar"
function jugar() {
    // Generar los resultados de los lanzamientos de los tres jugadores
    var resultadoJugador1 = lanzarDado();
    var resultadoJugador2 = lanzarDado();
    var resultadoJugador3 = lanzarDado();

    // Mostrar los resultados de los dados en las imágenes
    document.getElementById('dado1').innerHTML = '<img src="img/d' + resultadoJugador1 + '.png" />';
    document.getElementById('dado2').innerHTML = '<img src="img/d' + resultadoJugador2 + '.png" />';
    document.getElementById('dado3').innerHTML = '<img src="img/d' + resultadoJugador3 + '.png" />';

    // Calcular el jugador ganador
    var ganador = 0;
    var segundo = 0;
    var tercero = 0;

    // Verificar quién ha sacado el número más alto
    //Si gana el jugador 1
    if (resultadoJugador1 > resultadoJugador2 && resultadoJugador1 > resultadoJugador3) {
        ganador = 1;
        //En ese caso quien queda segundo
        if (resultadoJugador2 > resultadoJugador3) {
            segundo = 2;
            tercero = 3;
        } else if (resultadoJugador3 > resultadoJugador2) {
            segundo = 3;
            tercero = 2;
        } else {
            //en este caso empatan 2 y 3
            segundo = "2 y 3";
            tercero = "";
        }

        //Gana jugador 2
    } else if (resultadoJugador2 > resultadoJugador1 && resultadoJugador2 > resultadoJugador3) {
        ganador = 2;
        if (resultadoJugador1 > resultadoJugador3) {
            segundo = 1;
            tercero = 3;
        } else if (resultadoJugador3 > resultadoJugador1) {
            segundo = 3;
            tercero = 1;
        } else {
            segundo = "1 y 3";
            tercero = "";
        }

       //Gana jugador 3 
    } else if (resultadoJugador3 > resultadoJugador1 && resultadoJugador3 > resultadoJugador2) {
        ganador = 3;
        if (resultadoJugador1 > resultadoJugador2) {
            segundo = 1;
            tercero = 2;
        } else if (resultadoJugador2 > resultadoJugador1) {
            segundo = 2;
            tercero = 1;
        } else {
            segundo = "1 y 2";
            tercero = "";
        }
    } else {
        // Si hay un triple empate empate
        if (resultadoJugador1 === resultadoJugador2 && resultadoJugador2 === resultadoJugador3) {
            document.getElementById('texto-ganador').innerHTML = 'Empate entre todos los jugadores';

            //Doble empate
        } else if (resultadoJugador1 === resultadoJugador2) {
            document.getElementById('texto-ganador').innerHTML = 'Empate entre Jugador 1 y Jugador 2';
            segundo = 1;
            tercero = 2;
        } else if (resultadoJugador1 === resultadoJugador3) {
            document.getElementById('texto-ganador').innerHTML = 'Empate entre Jugador 1 y Jugador 3';
            segundo = 1;
            tercero = 3;
        } else if (resultadoJugador2 === resultadoJugador3) {
            document.getElementById('texto-ganador').innerHTML = 'Empate entre Jugador 2 y Jugador 3';
            segundo = 2;
            tercero = 3;
        }
        return;
    }

    // Mostrar quién ha ganado y quién ha quedado segundo y tercero
    document.getElementById('texto-ganador').innerHTML = 'Ha ganado Jugador ' + ganador + ', segundo Jugador ' + segundo + ', tercero Jugador ' + tercero;
}
