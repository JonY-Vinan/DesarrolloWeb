//Ejercicio de conversor de temperatura
const buton = document.getElementById("comprobar");
buton.addEventListener("click", calcularTemperatura);
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
