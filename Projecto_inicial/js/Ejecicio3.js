// //Ejercicio Lista tareas simples
var listaTarea = []; // Declarar fuera para mantener las tareas
class Tarea {
  constructor(texto, fecha) {
    (this.texto = texto), (this.fecha = fecha);
  }
}

const bttn = document.getElementById("anadir");
bttn.addEventListener("click", anadirTarea);
function anadirTarea() {
  let tarea = document.getElementById("texto").value;
  let fecha = document.getElementById("fecha").value;
  let lista = document.getElementById("lista");
  if (tarea.trim() === "") {
    alert("No puedes añadir tarea vacía");
  } else {
    console.log(listaTarea);
    listaTarea.unshift(tarea);
  }
  console.log(listaTarea);
  // Limpiar la lista antes de agregar nuevas tareas
  lista.innerHTML = "";
  const ul = document.getElementById("lista");
  ul.textContent = "listado";
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
