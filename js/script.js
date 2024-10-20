let display = document.getElementById('display');
let valorAnterior = '';
let operador = '';

function agregarNumero(num) {
    display.value += num;
}

function operacion(op) {
    if (display.value === '') return;
    valorAnterior = display.value;
    operador = op;
    display.value = '';
}

function calcular() {
    if (display.value === '' || valorAnterior === '') return;
    let resultado;
    let valorActual = display.value;

    switch (operador) {
        case '+':
            resultado = parseFloat(valorAnterior) + parseFloat(valorActual);
            break;
        case '-':
            resultado = parseFloat(valorAnterior) - parseFloat(valorActual);
            break;
        case '*':
            resultado = parseFloat(valorAnterior) * parseFloat(valorActual);
            break;
        case '/':
            resultado = parseFloat(valorAnterior) / parseFloat(valorActual);
            break;
        default:
            return;
    }

    display.value = resultado;
    valorAnterior = '';
    operador = '';
}

function limpiar() {
    display.value = '';
    valorAnterior = '';
    operador = '';
}
