import { calculadora } from "./calculadora.js";

//Ejecicio de Calculadora
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
    : num2 == 0 && r === undefined
    ? `Resultado  ${opcion}: no de puede dividi en 0`
    : r === false || r === undefined
    ? window.alert("Los campos no deben estar vacios")
    : `Resultado  ${opcion}: ${r}`;
  resp.appendChild(div);
});
