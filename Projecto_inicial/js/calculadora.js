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
    if (this.comprobar_num(num1) && this.comprobar_num(num2)) {
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        return "No se puede dividir por cero";
      }
    } else {
      return (bien = false);
    }
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
      window.alert("introduce correctamente un numero");
      bien = false;
    } else {
      return (bien = true);
    }
  },
};
