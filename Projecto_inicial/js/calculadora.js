//Ejecicio de calculador
let respuesta = 0;
var bien = false;
export const calculadora = {
  sumar: function (num1, num2) {
    if (this.comprobar_num(num1) && this.comprobar_num(num2)) {
      respuesta = num1 + num2;
      return respuesta;
    } else {
      return (bien = false);
    }
  },
  restar: function (num1, num2) {
    if (this.comprobar_num(num1) && this.comprobar_num(num2)) {
      respuesta = num1 - num2;
      return respuesta;
    } else {
      return (bien = false);
    }
  },
  multiplicar: function (num1, num2) {
    if (this.comprobar_num(num1) && this.comprobar_num(num2)) {
      respuesta = num1 * num2;
      return respuesta;
    } else {
      return (bien = false);
    }
  },
  dividir(num1, num2) {
    return comprobarNumero(num1, num2);

    // if (this.comprobar_num(num1) && this.comprobar_num(num2)) {
    //   if (num2 !== 0) {
    //     return num1 / num2;
    //   } else {
    //     return "No se puede dividir por cero";
    //   }
    // } else {
    //   return (bien = false);
    // }
  },
  modulo(num1, num2) {
    if (this.comprobar_num(num1) && this.comprobar_num(num2)) {
      return num1 % num2;
    } else {
      return (bien = false);
    }
  },
  comprobar_num(num) {
    if (isNaN(num) || !isFinite(num)) {
      bien = false;
    } else {
      return (bien = true);
    }
  },
};

function comprobarNumero(a, b) {
  try {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("El tipo debe ser numerico");
    }

    if (b === 0) {
      throw new Error("La divicion por cero no esta permitida");
    }
    const resultado = a / b;
    if (!isFinite(resultado)) {
      throw new Error("Resultado no es un numero infinito");
    }
    if (b === 0) {
      resultado = 0;
    } else {
      return resultado;
    }
  } catch (error) {
    console.error(`"Ocurrio un error: ${error.message}`);
  }
}
