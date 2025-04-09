import { calculadora } from "./calculadora.js";

//Ejercicio contador de click
let cont = 0;
const bt = document.getElementById("numero");
bt.addEventListener("click", contadorClick);
function contadorClick() {
  cont++;
  return (document.getElementById(
    "contador"
  ).textContent = `Haz hecho click ${cont} veces`);
}
const boton = document.getElementById("resett");
boton.addEventListener("click", contadorCero);
function contadorCero() {
  cont = 0;
  return (document.getElementById("contador").textContent = cont);
}
const buton = document.getElementById("comprobar");
buton.addEventListener("click", calcularTemperatura);
//Ejercicio de conversor de temperatura
function calcularTemperatura() {
  const numero = document.getElementById("numero").value;
  var selector = document.getElementById("opcion");
  var resultado = 0;

  if (isNaN(numero) || numero === Infinity || numero === -Infinity) {
    window.alert("Error de temperatura");
    document.getElementById(
      "resultado"
    ).innerText = `Resultado ${selector.value}: `;
  }

  switch (selector.value) {
    case "celsius_fahrenheit":
      resultado = (numero * 9) / 5 + 35;
      break;
    case "fahrenheit_celsius":
      resultado = ((numero - 32) * 9) / 5;
      break;
    case "Kelvin_celsius":
      resultado = numero + 273;
      break;
    case "celsius_Kelvin":
      resultado = numero - 273;
      break;
    default:
      break;
  }
  return (document.getElementById(
    "resultado"
  ).innerText = `Resultado ${selector.value}: ${resultado}`);
}

// //Ejercicio Lista tareas simples
var listaTarea = []; // Declarar fuera para mantener las tareas
const bttn = document.getElementById("anadir");
bttn.addEventListener("click", anadirTarea);
function anadirTarea() {
  var tarea = document.getElementById("texto").value;
  var lista = document.getElementById("lista");

  if (tarea.trim() === "") {
    alert("No puedes añadir tarea vacía");
  } else {
    listaTarea.push(tarea);
  }

  console.log(listaTarea);

  // Limpiar la lista antes de agregar nuevas tareas
  lista.innerHTML = "";

  // Recorrer el array de tareas y añadirlas al HTML
  listaTarea.forEach((element) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    li.textContent = element;
    btn.textContent = "borrar";
    btn.addEventListener("click", function () {
      listaTarea = listaTarea.slice(1, li.remove());
    });
    li.appendChild(btn);
    lista.appendChild(li);
  });
}
const btn = document.getElementById("calcular");
btn.addEventListener("click", function () {
  let num1 = parseFloat(document.getElementById("numero1").value);
  let num2 = parseFloat(document.getElementById("numero2").value);
  let opcion = document.getElementById("operador").value;
  let resp = document.getElementById("respuesta");

  let r = false;
  r = calculadora[opcion](num1, num2);
  const div = document.createElement("div");
  div.textContent = calculadora[opcion](num1, num2)
    ? `Resultado  ${opcion}: ${r}`
    : r === false
    ? ""
    : `Resultado  ${opcion}: ${r}`;
  resp.appendChild(div);
});

//Adivinanzá de números
let btn_numero = document.getElementById("encontrar");
btn_numero.addEventListener("click", adivinarNumero);
let miNumero = document.getElementById("miNumero");
const elNumero = Math.floor(Math.random() * (100 - 1 + 1) + 1);
console.log(elNumero);
function adivinarNumero() {
  ///if (comprobar_numero(miNumero)) {

  const d = document.getElementById("resp");
  if (parseInt(miNumero.value) === elNumero) {
    d.textContent = "Felicidades has adivinado el numero XD";
  } else {
    d.textContent = "Sigue intentandolo";
  }

  //}
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
