//Adivinanzá de números
let btn_numero = document.getElementById("encontrar");
btn_numero.addEventListener("click", adivinarNumero);
let miNumero = document.getElementById("miNumero");
var elNumero = Math.floor(Math.random() * (100 - 1 + 1) + 1);
let numeroanterior = elNumero;
console.log(elNumero);
let cont = 1;
const d = document.getElementById("resp");
const intentos = document.getElementById("intentos");
function adivinarNumero() {
  ///if (comprobar_numero(miNumero)) {
  const d = document.getElementById("resp");
  const intentos = document.getElementById("intentos");
  const miNumero = document.getElementById("miNumero");
  if (parseInt(miNumero.value) > 0 && parseInt(miNumero.value) < 100) {
    if (parseInt(miNumero.value) === elNumero) {
      d.textContent = "Felicidades has adivinado el numero XD";
      miNumero.value = "";
    } else if (parseInt(miNumero.value) > elNumero) {
      d.textContent = "El numero es menor";
    } else {
      d.textContent = "El numero es mayor";
    }
    intentos.textContent = `Intentos ${cont++}`;
  } else {
    d.textContent = "El numero no esta en el rango del 1 al 100";
  }

  //}
}

const boton = document.getElementById("otronumero");
boton.addEventListener("click", otroNumeroAletario);
function otroNumeroAletario() {
  cont = 1;
  const miNumeror = document.getElementById("miNumero");

  const dr = document.getElementById("resp");
  const intentosr = document.getElementById("intentos");
  elNumero = Math.floor(Math.random() * (100 - 1 + 1) + 1);
  intentosr.textContent = "Intentos 0";
  dr.textContent = "";
  miNumeror.value = "";
  console.log(elNumero);
  //return elNumero;
}

// function comprobar_numero(numero) {
//   let correcto = false;
//   if (isNaN(numero) || !isFinite(numero)) {
//     window.alert("El campo no puede estar vacio");
//   } else if (numero < 0 || numero > 101) {
//     window.alert("Escribe un numero que este entre el 1 o 100");
//   } else {
//     return (correcto = true);
//   }
// }
