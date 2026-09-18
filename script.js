let primeiroNumero = "";
let operador = "";
let segundoNumero = "";

const display = document.getElementById("current-operation");
const historico = document.getElementById("previous-operation");

function mostrar(valor) {
    display.textContent = valor || "0";
}



function appendNumber(numero) {

    if (numero === "." && primeiroNumero.includes(".")) {
        return;
    }

    primeiroNumero += numero;

    mostrar(primeiroNumero);
}



function chooseOperator(op) {

    if (primeiroNumero === "") {
        return;
    }

    operador = op;

    segundoNumero = primeiroNumero;
    primeiroNumero = "";

    historico.textContent =
        segundoNumero + " " + op;
}



function calculate() {

    if (
        segundoNumero === "" ||
        primeiroNumero === "" ||
        operador === ""
    ) {
        return;
    }

    let numero1 = Number(segundoNumero);
    let numero2 = Number(primeiroNumero);

    let resultado;


    if (operador === "+") {
        resultado = numero1 + numero2;
    }

    else if (operador === "-") {
        resultado = numero1 - numero2;
    }

    else if (operador === "*") {
        resultado = numero1 * numero2;
    }

    else if (operador === "/") {

        if (numero2 === 0) {
            display.textContent = "ERRO";
            return;
        }

        resultado = numero1 / numero2;
    }

    else if (operador === "%") {
        resultado = numero1 % numero2;
    }


    mostrar(resultado);

    historico.textContent =
        segundoNumero + " " +
        operador + " " +
        primeiroNumero + " =";

    primeiroNumero = String(resultado);
    segundoNumero = "";
    operador = "";
}


function clearDisplay() {

    primeiroNumero = "";
    segundoNumero = "";
    operador = "";

    historico.textContent = "";

    mostrar("0");
}


function deleteLast() {

    primeiroNumero =
        primeiroNumero.slice(0, -1);

    mostrar(primeiroNumero);
}