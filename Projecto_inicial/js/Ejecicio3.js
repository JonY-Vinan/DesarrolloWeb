// //Ejercicio Lista tareas simples
var listaTarea = []; // Declarar fuera para mantener las tareas

const bttn = document.getElementById("anadir");
bttn.addEventListener("click", anadirTarea);
function anadirTarea() {
  var tarea = document.getElementById("texto").value;
  var fecha = document.getElementById("fecha").value;
  var lista = document.getElementById("lista");
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
