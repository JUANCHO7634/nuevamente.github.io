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
    // Tomamos el valor directo del input del HTML
    let numero = parseInt(document.getElementById("factorialInput").value);

    // Validamos basado en los límites de tu HTML (0 a 20)
    if (isNaN(numero) || numero < 0 || numero > 20) {
        document.getElementById("factorialResult").innerHTML =
            "Introduce un número válido entre 0 y 20.";
        return;
    }

    let resultado = factorial(numero);
    document.getElementById("factorialResult").innerHTML =
        "Resultado: " + resultado;
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
    // Tomamos el valor directo del input del HTML
    let numero = parseInt(document.getElementById("fibonacciInput").value);

    // Validamos basado en los límites de tu HTML (0 a 30)
    if (isNaN(numero) || numero < 0 || numero > 30) {
        document.getElementById("fibonacciResult").innerHTML =
            "Introduce un número entre 0 y 30.";
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
        movimientos.push(origen + " → " + destino);
        return;
    }
    hanoi(n - 1, origen, destino, auxiliar, movimientos);
    movimientos.push(origen + " → " + destino);
    hanoi(n - 1, auxiliar, origen, destino, movimientos);
}

function jugarHanoi() {
    // Leemos la cantidad de discos del input
    let discos = parseInt(document.getElementById("hanoiInput").value);

    if (isNaN(discos) || discos < 1 || discos > 6) {
        document.getElementById("hanoiResult").innerHTML =
            "Introduce un número entre 1 y 6.";
        return;
    }

    let movimientos = [];
    hanoi(discos, "A", "B", "C", movimientos);

    document.getElementById("hanoiResult").innerHTML =
        "Movimientos para " + discos + " discos:<br><br>" +
        movimientos.join("<br>");
}

/* =========================
   FRACTAL
========================= */
function dibujarFractal() {
    const canvas = document.getElementById("fractalCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = 430;
    canvas.height = 300;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#45d4d4";
    ctx.lineWidth = 2;

    function arbol(x, y, longitud, angulo, nivel) {
        if (nivel === 0) {
            return;
        }

        let x2 = x + Math.cos(angulo) * longitud;
        let y2 = y + Math.sin(angulo) * longitud;

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        arbol(x2, y2, longitud * 0.7, angulo - Math.PI / 5, nivel - 1);
        arbol(x2, y2, longitud * 0.7, angulo + Math.PI / 5, nivel - 1);
    }

    // Obtenemos el nivel del fractal desde el input
    let nivel = parseInt(document.getElementById("nivelFractal").value);
    
    // Si el usuario borra el número, usamos 8 por defecto
    if (isNaN(nivel) || nivel < 1 || nivel > 10) {
        nivel = 8;
    }

    arbol(215, 285, 80, -Math.PI / 2, nivel);
}

/* =========================
   FRACTAL AUTOMÁTICO AL CARGAR LA PÁGINA
========================= */
window.onload = function() {
    dibujarFractal();
};
