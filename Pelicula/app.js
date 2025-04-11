import { Pelicula } from "./Pelicula.js";

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
    opcion.value = p[i];
    origen.appendChild(opcion);

    console.log(opcion);
  }
}
seleccionarPais();

const boton = document.getElementById("btn");
boton.addEventListener("click", añadirPelicula);
// const peli = new Pelicula("holaaaa", "alex", 2025, "ecuador", "terror", 8);

function ejecutar() {
  console.log(peli);
  console.table(peli);
  console.log(Pelicula.pais());
}

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

  // let resultado = document.getElementById("resultado");
  // resultado.textContent = nPelicula;
  console.log(nPelicula);
}
