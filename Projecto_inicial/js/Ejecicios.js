//Ejercicio contador de click
let cont = 0;
function contadorClick() {
  cont++;
  return (document.getElementById(
    "contador"
  ).textContent = `Haz hecho click ${cont} veces`);
}
function contadorCero() {
  cont = 0;
  return (document.getElementById("contador").textContent = cont);
}

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

  //   if (selector.value == "celsius") {
  //     resultado = (num * 9) / 5 + 35;
  //     document.getElementById(
  //       "resultado"
  //     ).innerText = `Resultado Cº: ${resultado}`;
  //   } else {
  //     resultado = ((num - 32) * 9) / 5;
  //     document.getElementById(
  //       "resultado"
  //     ).innerText = `Resultado Fº: ${resultado}`;
  //   }
}

// //Ejercicio Lista tareas simples
var listaTarea = []; // Declarar fuera para mantener las tareas

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

//Ejecicio de calculador
let respuesta = 0;
var Calculadora = {
  sumar: function (num1, num2) {
    respuesta = num1 + num2;
    return respuesta;
  },
  restar: function (num1, num2) {
    respuesta = num1 - num2;
    return respuesta;
  },
  multiplicar: function (num1, num2) {
    respuesta = num1 * num2;
    return respuesta;
  },
  dividir(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      return "No se puede dividir por cero";
    }
  },
};
const ejecutar = function () {
  let num1 = parseFloat(document.getElementById("numero1").value);
  let num2 = parseFloat(document.getElementById("numero2").value);
  let opcion = document.getElementById("operador").value;
  let resp = document.getElementById("respuesta");
  let r = 0;

  // Ejecutamos la operación correspondiente dependiendo de la opción seleccionada
  r = Calculadora[opcion](num1, num2);

  // Crear un div para mostrar el resultado
  const div = document.createElement("div");
  div.textContent = `Resultado ${opcion}: ${r}`;
  resp.appendChild(div);
};

//Calcualdora con una tabla

function mostrarCalcularor() {
  let tabla = document.getElementById("tablaC");
  let col = 3;
  let lineas = 3;
  const colum = document.createElement("tr");
  const fila = document.createElement("tb");

  for (let index = 0; index < col; index++) {
    const element = array[index];
  }

  col.forEach((c, col) => {
    colum.textContent = col;
    tabla.appendChild(colum);
  });
}
// const ejecutar = function (){
//     let opcion = document.getElementById("operador").value;
//     respuesta =
// }
