
//Ejercicio 7
function Ejercicio7(){
// Inicializacion de variables 
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    let intentos = 5;
    let eleccion;
    let direccion;

/* Esto sirve para probar el funcionamiento del programa desplegando el numero aleatorio en la consola.
    console.log(numeroAleatorio); */

// Pregunta inicial
    eleccion = prompt("¿Cual es el numero aleatorio?");
    intentos -= 1;

    // Preguntas posteriores y retroalimentacion
    while (intentos > 0) {
        //Si aciertan se ejecuta esta parte.
        if (numeroAleatorio == eleccion){
            alert("Felicidades, lo lograste.");
            break;
        }
        //De lo contrario, se les da una pista de si es mayor o menor que el numero aleatorio y se les resta un intento.
        else {
            if (eleccion > numeroAleatorio){
                direccion = "mayor";
            }
            else {
                direccion = "menor";
            }
            eleccion = prompt("El número secreto es " + direccion + " al número ingresado, te quedan " + intentos + " intento(s).");
            intentos -= 1;
        }
    }
    // Si los intentos se agotaron, se le muestra este mensaje.
    if (intentos == 0) {
        alert("Suerte para la próxima, el número secreto es " + numeroAleatorio + ".");
    }
}

//Ejercicio 8
function Ejercicio8() {
    //Se obtiene el valor original y se crea variable para almacenar elementos del numero decimal.
    let numeroDeci = parseInt(document.getElementById("txtNumDeci").value);
    let numeroBina = "";

    //Se convierte manualmente, se añaden los elementos al Binario mientras que se divide constantemente el numero original hasta que termine en 0.
    while (numeroDeci != 0){
        numeroBina = (numeroDeci % 2) + numeroBina;
        numeroDeci = Math.floor(numeroDeci / 2);
    }
    //Se inserta el numero Binario terminado en el elemento correspondiente de la pagina.
    document.getElementById("txtNumBina").value = numeroBina;
}

//Ejercicio 9
function Ejercicio9() {
    //Se declaran variables.
    let calificacion = "";
    let sumatoria = 0;
    let numero = 0;
    let promedio = 0;
    
    //Se preguntan las calificaciones, al insertar x el ciclo termina.
    while(calificacion.toUpperCase() != "X"){
        calificacion = prompt("Inserta una calificacion o escribe 'X' para terminar:");
        if (!isNaN(calificacion)){
            sumatoria = sumatoria + parseFloat(calificacion);
            numero++;
        }
    }

    // Se saca el promedio y se le comenta al usuario.
    promedio = sumatoria / numero;
    alert("Tu promedio de calificacion es: " + promedio);
}