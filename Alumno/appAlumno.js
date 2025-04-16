import { Alumno } from "./Alumno.js";
let listadoAlumno = [];
let claveAlumno = {};
//PARA CREAR UN NUEVO USUARIO
document
  .getElementById("nuevo_alumno")
  .addEventListener("click", () => crearNuevoAlumno());

function crearNuevoAlumno() {
  let alumno = obtenerDatos();
  console.log(alumno);
  listadoAlumno.push(alumno);
  console.log(listadoAlumno);
  localStorage.setItem("alumnos", JSON.stringify(listadoAlumno));
  inicioTabla(listadoAlumno);
  anadirFila();
}

function obtenerDatos() {
  let dni = document.getElementById("dni").value;
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let edad = document.getElementById("edad").value;
  let curso = document.getElementById("cursos").value;
  let nuevoAlumno = new Alumno(dni, nombre, apellido, edad, curso);
  return nuevoAlumno;
}

function cargarCursos() {
  let selector = document.getElementById("cursos");
  let curso = Alumno.cursos();
  selector.innerHTML = "";
  for (let i = 0; i < curso.length; i++) {
    let opciones = document.createElement("option");
    opciones.innerText = curso[i];
    selector.appendChild(opciones);
  }
}
cargarCursos();

function anadirFila() {
  let tablaAlumnos = document.getElementById("tabla_alumnos");
  tablaAlumnos.innerHTML = "";
  for (let indice = 0; indice < listadoAlumno.length; indice++) {
    let fila = document.createElement("tr");
    let btn1 = document.createElement("td");
    let btn2 = document.createElement("td");

    let almn = listadoAlumno[indice];
    fila.innerHTML = "";
    btn1.innerHTML = "";
    btn2.innerHTML = "";
    fila.innerHTML = `<th scope="row">${listadoAlumno[indice].dni}</th>
      <td>${listadoAlumno[indice].nombre}</td>
      <td>${listadoAlumno[indice].apellido}</td>
      <td>${listadoAlumno[indice].edad}</td>
      <td>${listadoAlumno[indice].curso}</td>`;
    btn1.appendChild(botonResumen(almn));
    fila.appendChild(btn1);
    btn2.appendChild(botonBorrar(almn), indice);
    fila.appendChild(btn2);
    tablaAlumnos.appendChild(fila);
    listadoAlumno.push(listadoAlumno[indice]);
  }
}

function inicioTabla(listadoAlumno) {
  let tabla = document.getElementById("tabla");
  let inicio = document.getElementById("tabla_inicio");
  inicio.innerHTML = "";
  claveAlumno = listadoAlumno[0];
  let fila = document.createElement("tr");
  fila.id = "id_tr";
  fila.innerHTML = "";
  for (let clave in claveAlumno) {
    let fila1 = document.createElement("th");
    fila1.innerHTML = "";
    fila1.innerText = clave;
    fila.appendChild(fila1);
    // console.log(fila);
  }

  let resumen = document.createElement("th");
  resumen.innerText = `Ver resumen`;
  let borrar = document.createElement("th");
  borrar.innerText = `Borrar`;
  fila.appendChild(resumen);
  fila.appendChild(borrar);
  inicio.appendChild(fila);
  tabla.appendChild(inicio);
}

document
  .getElementById("cargar_alumnos")
  .addEventListener("click", () => cargarAlumnos());
function cargarAlumnos() {
  const datos = JSON.parse(localStorage.getItem("alumnos")) || [];
  listadoAlumno = datos.map(
    (a) => new Alumno(a.dni, a.nombre, a.apellido, a.edad, a.curso)
  );

  inicioTabla(listadoAlumno);
  anadirFila();
}

function botonResumen(listadoAlumno) {
  let btnResumen = document.createElement("button");
  btnResumen.innerHTML = "";
  btnResumen.textContent = "Resumen";
  btnResumen.addEventListener("click", function () {
    const div = document.getElementById("alumnoResumen");
    div.innerHTML = "";
    let resumen = Alumno.resumen(
      listadoAlumno.dni,
      listadoAlumno.nombre,
      listadoAlumno.apellido,
      listadoAlumno.edad,
      listadoAlumno.curso
    );
    console.log(resumen);
    div.append(resumen);
  });
  return btnResumen;
}

function botonBorrar(alumno, index) {
  let btnResumen = document.createElement("button");
  btnResumen.innerHTML = "";
  btnResumen.textContent = "Borrar";
  btnResumen.addEventListener("click", function () {
    if (
      confirm(
        `¿Estás seguro de querer borrar a ${alumno.nombre} ${alumno.apellido}?`
      )
    ) {
      // Eliminar el alumno del array
      listadoAlumno.splice(index, 1);

      // Actualizar la tabla
      anadirFila();

      // Opcional: Mostrar mensaje de éxito
      console.log("Alumno borrado correctamente");
    }
  });

  return btnResumen;
}
