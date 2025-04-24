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
    let almn = listadoAlumno[indice];

    let fila = document.createElement("tr");
    fila.className = almn.curso; // Aplica la clase del curso al <tr>

    fila.innerHTML = `
      <th scope="row">${almn.dni}</th>
      <td>${almn.nombre}</td>
      <td>${almn.apellido}</td>
      <td>${almn.edad}</td>
      <td>${almn.curso}</td>
    `;

    let btn1 = document.createElement("td");
    let btn2 = document.createElement("td");
    let btn3 = document.createElement("td");
    btn1.appendChild(botonResumen(almn));
    btn2.appendChild(botonBorrar(almn)); // Eliminar "indice" aquí, no es necesario
    btn3.appendChild(botonAnadirCurso(almn));
    fila.appendChild(btn1);
    fila.appendChild(btn2);
    fila.appendChild(btn3);
    tablaAlumnos.appendChild(fila);
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
  let anadir = document.createElement("th");
  anadir.innerText = `Añadir`;
  fila.appendChild(resumen);
  fila.appendChild(borrar);
  fila.appendChild(anadir);
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

function botonAnadirCurso(alumno) {
  let btnAnadir = document.createElement("button");
  btnAnadir.innerHTML = "";
  btnAnadir.id = "anadir";
  btnAnadir.textContent = "Añadir";
  btnAnadir.addEventListener("click", function () {
    // let fila = document.getElementById("tabla_alumnos");
    let filaAlumno = document.getElementsByClassName(alumno.curso);

    for (let fila of filaAlumno) {
      fila.setAttribute("inscrito", "success"); // Clase que aplicará line-through, etc.
    }

    const div = document.getElementById("alumnoResumen");
    div.innerHTML = "";
    let resumen = Alumno.anadir(alumno.nombre, alumno.apellido, alumno.curso);
    console.log(resumen);
    div.append(resumen);
  });

  return btnAnadir;
}

function botonBorrar(alumno, index) {
  let btnBorrar = document.createElement("button");
  btnBorrar.innerHTML = "";
  btnBorrar.id = "borrar";
  btnBorrar.textContent = "Borrar";
  btnBorrar.addEventListener("click", function () {
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

  return btnBorrar;
}
