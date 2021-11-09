// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

class Funciones {
  constructor(cadena) {
    this.cadena = cadena;
  }
  //valida la entrada
  isString = (cadena) => typeof cadena === "string" ? true : false;

  cuentaCaracteres = (cadena) => {
    return this.isString(cadena)
      ? cadena.length
      : "Debes introducir una cadena";
  };

  recortaCadena = (cadena, corte = undefined) => {
    if (!this.isString(cadena)) return "Debes introducir una cadena";

    if (this.isString(corte) || corte === undefined)
      return "Debes introducir un numero donde cortar la cadena";

    return cadena.slice(0, corte);
  };

  divideCadena = (cadena, separador = false) => {
    if (!this.isString(cadena) || cadena.length === 0)
      return "Debes introducir una cadena";

    if (!separador) return "Debes introducir un separador";

    return cadena.split(separador);
  };

  multiplicaCadena = (cadena, multiplo = 0) => {
    if (!this.isString(cadena)) return "Debes introducir una cadena";

    if (!multiplo) return "El multiplo no puede ser menor que 1";

    let salida = "";

    for (let i = 0; i < multiplo; i++) {
      salida += ` ${cadena}`;
    }

    return salida;
  };
}

let misFunciones = new Funciones();

console.log(misFunciones.cuentaCaracteres("Hola"));
console.log(misFunciones.recortaCadena("Hola Mundo", 4));
console.log(misFunciones.divideCadena("Hola mundo", " "));
console.log(misFunciones.multiplicaCadena("Hola Mundo", 5));
