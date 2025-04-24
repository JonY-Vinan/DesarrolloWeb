let tareas = [];

class Tarea {
  constructor(fecha, texto, importancia) {
    if (!fecha.valueOf()) {
      fecha = new Date();
    }
    this.fecha = fecha;
    this.texto = texto;
    this.importancia = importancia;
    this.hecha = false;
  }

  creaFila(indice) {
    let filaTarea = document.createElement("tr");
    filaTarea.innerHTML = `<th scope="row" class="casilla_fecha">${this.fecha.toLocaleString()}</th>
      <td class="casilla_texto">${this.texto}</td>
      <td class="casilla_borrar"></td>
      <td class="casilla_ejecutar"></td>`;

    let itemBoton = document.createElement("button");
    itemBoton.classList.add("boton_borrar");
    itemBoton.innerText = "Borrar";
    itemBoton.addEventListener("click", () => borrarItem(indice));
    filaTarea.querySelector(".casilla_borrar").appendChild(itemBoton);

    let ejecBoton = document.createElement("button");
    ejecBoton.classList.add("boton_ejecutar");
    ejecBoton.innerText = "Ejecutada";
    ejecBoton.disabled = this.hecha;
    ejecBoton.addEventListener("click", () => ejecutarItem(indice));
    filaTarea.querySelector(".casilla_ejecutar").appendChild(ejecBoton);

    filaTarea.setAttribute("importancia", this.importancia);
    if (this.hecha) {
      filaTarea.classList.add("finalizada");
    }

    return filaTarea;
  }
}

const has_borrado = function (tarea) {
  const notificacion = document.createElement("div");
  notificacion.classList.add("notificacion_borrado");
  notificacion.innerText = `Has borrado la tarea: ${
    tarea.texto
  } de la fecha ${tarea.fecha.toLocaleString()}`;
  document.body.appendChild(notificacion);

  setTimeout(() => {
    notificacion.classList.add("fade-out");
    setTimeout(() => {
      document.body.removeChild(notificacion);
    }, 500);
  }, 5000);
};

const borrarItem = function (indice) {
  if (
    confirm(
      `¿Quieres eliminar la tarea ${tareas[indice].texto} de la fecha ${tareas[indice].fecha}?`
    )
  ) {
    let tareaBorrada = tareas[indice];
    tareas.splice(indice, 1);
    has_borrado(tareaBorrada);
    renderizarListado();
  }
};

const ejecutarItem = function (indice) {
  if (
    confirm(
      `¿Quieres marcar como ejecutada la tarea ${tareas[indice].texto} de la fecha ${tareas[indice].fecha}?`
    )
  ) {
    tareas[indice].hecha = !tareas[indice].hecha;
    renderizarListado();
  }
};

const renderizarListado = function () {
  let tablaTareas = document.getElementById("tabla_tareas");
  tablaTareas.innerHTML = "";
  tareas.forEach((tarea, indice) => {
    let filaTarea = tarea.creaFila(indice);
    tablaTareas.appendChild(filaTarea);
  });
};

const has_aniadido = function (tareaNueva) {
  let notificacion = document.createElement("div");
  notificacion.classList.add("notificacion_aniadido");
  notificacion.innerText = `Has añadido la tarea ${
    tareaNueva.texto
  }, ${tareaNueva.fecha.toLocaleString()}`;
  document.body.appendChild(notificacion);
  setTimeout(() => {
    notificacion.classList.add("fade-out");
    setTimeout(() => {
      document.body.removeChild(notificacion);
    }, 500);
  }, 5000);
};

const aniadirTarea = function () {
  let input_tarea = document.getElementById("tarea_nueva");
  let input_momento = document.getElementById("momento");
  let input_importancia = document.getElementById("selector_prioridades");

  let tareaNueva = new Tarea(
    new Date(input_momento.value),
    input_tarea.value,
    input_importancia.value
  );

  if (tareaNueva.texto === "") {
    alert("La tarea no puede estar vacía");
  } else {
    input_tarea.value = "";
    input_momento.value = "";
    input_importancia.value = "";
    tareas.unshift(tareaNueva);
    has_aniadido(tareaNueva);
    renderizarListado();
  }
};

document
  .getElementById("aniadir_tarea")
  .addEventListener("click", aniadirTarea);
