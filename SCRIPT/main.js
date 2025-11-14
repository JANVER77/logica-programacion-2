import prompt from "prompt-sync";

const input = prompt();

let temCelsius = parseInt(input("Ingrese la temperatura en celsius "))


function convertirFahrenheit(tc){
    let f = (tc * 9/5) + 32;
    return f;
}

function convertirKelvin(tc){
    let k = tc + 273.15;
    return k;
}

console.log("Grados Kelvin : ", convertirKelvin(temCelsius));

console.log("Grados Fahrenheit : ", convertirFahrenheit(temCelsius));


