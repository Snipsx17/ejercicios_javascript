// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

class misFunciones {

    invierteCadena = (cadena) => {
        
        if(typeof cadena != "string" || cadena === ""){ 
            console.info ("Debes introducir una cadena valida") 
            return false};

        let nuevaCadena = "";

        for (let i = cadena.length - 1 ; i >= 0 ; i--) {
             nuevaCadena += cadena[i];
            
        }
        console.log(nuevaCadena);
        return nuevaCadena;
    }

    ocurrencia = (cadena = false, ocurrencia = false) => {

        if (!cadena || typeof cadena != "string"){
            console.log("Introduce una cadena valida");
            return false;
        }

        if (!ocurrencia || typeof ocurrencia != "string"){
            console.log("Introduce una ocurrecia valida");
            return false;
        }

        cadena = cadena.toLowerCase().split(" ");
        ocurrencia = ocurrencia.toLowerCase().trim();
        let contador = 0;

        for (let i = 0; i < cadena.length; i++) {
            cadena[i] === ocurrencia ? contador += 1 : "";
            
        }
        console.log(contador);
        return true;;
    }

    esPalindromo = (cadena = false) => {

        if (!cadena || typeof cadena != "string") {
            console.log("Introduce una cadena valida")
            return false;
        };

        let cadenaInvertida = this.invierteCadena(cadena);
        
        cadenaInvertida === cadena ? console.log(true) : console.log(false);
    }

    eliminaPatron = (cadena=false, patron=false) =>{
        (!cadena)
        ? console.warn("Debes introducir una cadena")
        : (!patron)
            ? console.warn("Debes introducir un patron")
            : console.info(cadena.replace(new RegExp(patron, "ig"), ""))
            //reemplaza el patrin con una cadena vacia
    }
}

const Funciones = new misFunciones;

Funciones.invierteCadena("Hola");
Funciones.ocurrencia("HOla mundo mucho mundo hau para decir hola", "mundo");
Funciones.esPalindromo("bob");
Funciones.eliminaPatron("xyz1, xyz2, xyz3", "xyz");