// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

class Funciones {
  constructor(cadena) {
    this.cadena = cadena;
  }
  //valida la entrada
  isString = function (cadena) {
    return typeof cadena === "string" ? true : false;
  };

  cuentaCaracteres = function (cadena) {
    let result = this.isString(cadena) 
        ? cadena.length 
        : "Introduce una cadena";

    return result;
  };

  recortaCadena = function (cadena, corte) {
    let result = this.isString(cadena)
      ? cadena.slice(0, corte)
      : "Introduce una cadena";

    return result;
  };

  divideCadena = function (cadena, separador) {
    let result = this.isString(cadena) ? cadena.split(separador) : "Error";

    return result;
  };

  multiplicaCadena = function (cadena, multiplo) {
    let result =
      this.isString(cadena) && !isNaN(multiplo)
        ? cadena.repeat(multiplo)
        : "Error";

    return result;
  };
}

let misFunciones = new Funciones();

console.log(misFunciones.cuentaCaracteres("Hola"));
console.log(misFunciones.recortaCadena("Hola Mundo", 3));
console.log(misFunciones.divideCadena("Hola Mundo", " "));
console.log(misFunciones.multiplicaCadena("Hola Mundo", 5));
