import { URL } from 'node:url';

let miUrl = null;
let miObjeto = null;
miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
miObjeto = parsearUrl(miUrl);
console.log(miObjeto);

function parsearUrl(laURL) {
    const myURL = new URL(laURL);
    
    const URLObject = {
        puerto: myURL.port,
        pathname: myURL.pathname,
        parameters: myURL.searchParams
    };

    return URLObject;
}
