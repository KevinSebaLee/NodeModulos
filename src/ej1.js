let textoEntrada01 = "Escuela", textoEntrada02 = "ORT";
let textoSalida = "";
textoSalida = concatInvert(textoEntrada01, textoEntrada02);
console.clear(); 
console.log(`Textos de Entrada: "${textoEntrada01}" y "${textoEntrada02}"`);
console.log(`Texto de Salida: "${textoSalida}"`);

function concatInvert (texto1, texto2){
    let NuevaPalabra
    NuevaPalabra = texto1.concat(texto2)
    let ArrayPalabra = NuevaPalabra.split("")
    let ArrayInv = ArrayPalabra.reverse()
    let PalabraString = ArrayInv.join("")
    let returnValue = PalabraString;

    return returnValue;
}