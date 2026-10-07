/* =========================
   FACTORIAL
========================= */

function factorial(n) {

    if (n === 0) {
        return 1;
    }

    return n * factorial(n - 1);
}


function calcularFactorial() {

    let numero = prompt("Escribe un número entre 0 y 10:");

    numero = parseInt(numero);

    if (isNaN(numero) || numero < 0 || numero > 10) {

        document.getElementById("factorialResult").innerHTML =
            "Introduce un número válido entre 0 y 10.";

        return;
    }

    let resultado = factorial(numero);

    document.getElementById("factorialResult").innerHTML =
        numero + "! = " + resultado;
}


/* =========================
   FIBONACCI
========================= */

function fibonacci(n) {

    if (n <= 1) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}


function calcularFibonacci() {

    let numero = prompt("Escribe la posición de Fibonacci (0-20):");

    numero = parseInt(numero);

    if (isNaN(numero) || numero < 0 || numero > 20) {

        document.getElementById("fibonacciResult").innerHTML =
            "Introduce un número entre 0 y 20.";

        return;
    }

    let resultado = fibonacci(numero);

    document.getElementById("fibonacciResult").innerHTML =
        "Fibonacci(" + numero + ") = " + resultado;
}


/* =========================
   TORRES DE HANOI
========================= */

function hanoi(n, origen, auxiliar, destino, movimientos) {

    if (n === 1) {

        movimientos.push(
            origen + " → " + destino
        );

        return;
    }

    hanoi(
        n - 1,
        origen,
        destino,
        auxiliar,
        movimientos
    );

    movimientos.push(
        origen + " → " + destino
    );

    hanoi(
        n - 1,
        auxiliar,
        origen,
        destino,
        movimientos
    );
}


function jugarHanoi() {

    let movimientos = [];

    hanoi(
        3,
        "A",
        "B",
        "C",
        movimientos
    );

    document.getElementById("hanoiResult").innerHTML =
        "Movimientos para 3 discos:<br><br>" +
        movimientos.join("<br>");
}


/* =========================
   FRACTAL
========================= */

function dibujarFractal() {

    const canvas =
        document.getElementById("fractalCanvas");

    const ctx = canvas.getContext("2d");

    canvas.width = 430;
    canvas.height = 300;

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    ctx.strokeStyle = "#45d4d4";

    ctx.lineWidth = 2;

    function arbol(x, y, longitud, angulo, nivel) {

        if (nivel === 0) {
            return;
        }

        let x2 =
            x + Math.cos(angulo) * longitud;

        let y2 =
            y + Math.sin(angulo) * longitud;

        ctx.beginPath();

        ctx.moveTo(x, y);

        ctx.lineTo(x2, y2);

        ctx.stroke();

        arbol(
            x2,
            y2,
            longitud * 0.7,
            angulo - Math.PI / 5,
            nivel - 1
        );

        arbol(
            x2,
            y2,
            longitud * 0.7,
            angulo + Math.PI / 5,
            nivel - 1
        );
    }

    arbol(
        215,
        285,
        80,
        -Math.PI / 2,
        8
    );
}


/* =========================
   FRACTAL AUTOMÁTICO
========================= */

window.onload = function() {

    dibujarFractal();

};