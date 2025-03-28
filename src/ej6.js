import { URL } from 'node:url';

let miUrl = null;
let miObjeto = null;
miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo'; 
miObjeto = parsearUrl(miUrl);
console.log(miObjeto);

function parsearUrl(laURL) {
    try {
        const esquemaValido = /^https?:\/\//i; 
        if (!esquemaValido.test(laURL)) {
            throw new Error('Invalid URL scheme (must be http or https)');
        }

        const myURL = new URL(laURL);
        
        const URLObject = {
            puerto: myURL.port || null,
            pathname: myURL.pathname || null,
            parameters: myURL.searchParams || null
        };

        return URLObject;
    } catch (error) {
        console.log('Error parsing URL:', error.message);
        
        return {
            puerto: null,
            pathname: null,
            parameters: null
        };
    }
}
