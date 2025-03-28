import fs from 'fs';
const ARCHIVO_ENTRADA = "./src/archivosTXT/archivo-entrada.txt";
const ARCHIVO_SALIDA = "./src/archivosTXT/archivo-salida.txt";
console.clear();
copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);

function copiar(origen, destino){
    fs.copyFile(origen, destino, (err) => {
        if (err) {
            console.log("Error Found:", err);
        }
        else {
            getCurrentFilenames();
            console.log("\nFile Contents of copied_file:",
                fs.readFileSync(`${destino}`, "utf8"));
        }
    });
}

function getCurrentFilenames() {
    console.log("\nCurrent filenames:");
    fs.readdirSync(__dirname).forEach(file => {
        console.log(file);
    });
}