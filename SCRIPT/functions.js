import prompt from "prompt-sync";

const input = prompt();

function convertirFahrenheit(tc) {
    let f = (tc * 9 / 5) + 32;
    return f;
}

function convertirKelvin(tc) {
    let k = tc + 273.15;
    return k;
}

export function verificarTemp(){
    let n;
    do {
        n = parseInt(input("Ingrese la temperatura en celsius "));
    } while(isNaN(n));

    console.log("Grados Kelvin: ", convertirKelvin(n));
    console.log("Grados Fahrenheit: ", convertirFahrenheit(n));
}

