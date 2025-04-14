import { Pelicula } from "./Pelicula.js";
import { baseDatos } from "./baseDatos.js";
let listaPeliculas = [];

let misPeliculas = JSON.parse(localStorage.getItem("peliculas")) || [];
function cargarMisPeliculas() {
  const tabla = document.getElementById("tabla_peliculas");
  tabla.innerHTML = ""; // Limpiar tabla

  misPeliculas.forEach((peli) => {
    const row = document.createElement("tr");
    console.log(peli);

    // Asegúrate de que las propiedades coincidan con tu clase Pelicula
    row.innerHTML = `<td>${peli.id}</td>
            <td>${peli.titulo}</td>
            <td>${peli.director}</td>
            <td>${peli.anioEstreno}</td>
            <td>${peli.paisOrigen}</td>
            <td>${peli.genero}</td>
            <td>${peli.calificacion}</td>
        `;

    tabla.appendChild(row);
  });
}

// Llamar a mostrarPeliculas al cargar la página
document.getElementById("actualizar_tabla").addEventListener("click", () => {
  baseDatos(cargarMisPeliculas);
  console.log("no carga nada");
});

function seleccionarPais() {
  let p = Pelicula.verificarPaisYGenero();

  console.log(p);
  const origen = document.getElementById("pais");
  const genero = document.getElementById("genero");
  origen.innerHTML = "";
  genero.innerHTML = "";
  for (let i = 0; i < p.length; i++) {
    const opcion = document.createElement("option");
    const opciong = document.createElement("option");
    opcion.innerText = p[i].pais;
    for (let j = 0; j < p[i].generos.length; j++) {
      opciong.innerText = p[i].generos[i];
      // opciong.value = p[i].generos;
      genero.appendChild(opciong);
    }

    origen.appendChild(opcion);

    console.log(opcion);
  }
}
seleccionarPais();

const boton = document.getElementById("btn");
boton.addEventListener("click", añadirPelicula);

function añadirPelicula() {
  const titulo = document.getElementById("titulo").value;
  const director = document.getElementById("director").value;
  const anioEstreno = document.getElementById("anioEstreno").value;
  const paisOrigen = document.getElementById("pais").value;
  const genero = document.getElementById("genero").value;
  const calificacion = document.getElementById("calificacion").value;
  let nPelicula = new Pelicula(
    titulo,
    director,
    anioEstreno,
    paisOrigen,
    genero,
    calificacion
  );

  listaPeliculas.push(nPelicula);
  localStorage.setItem("peliculas", JSON.stringify(listaPeliculas));
  console.log(listaPeliculas);
  creaFila();
  // let resultado = document.getElementById("resultado");
  // resultado.textContent = nPelicula;
  console.log(nPelicula);
}

function creaFila(pelicula) {
  let tablaPelicula = document.getElementById("tabla_peliculas");
  tablaPelicula.innerHTML = "";
  for (let indice = 0; indice < listaPeliculas.length; indice++) {
    let fila = document.createElement("tr");

    fila.innerHTML = `<th scope="row">${listaPeliculas[indice].id}</th>
    <td>${listaPeliculas[indice].titulo}</td>
    <td>${listaPeliculas[indice].director}</td>
    <td>${listaPeliculas[indice].anioEstreno}</td>
    <td>${listaPeliculas[indice].paisOrigen}</td>
    <td>${listaPeliculas[indice].genero}</td>
    <td>${listaPeliculas[indice].calificacion}</td>`;

    console.log(fila);
    tablaPelicula.appendChild(fila);
  }
}
