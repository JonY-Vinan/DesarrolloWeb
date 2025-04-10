const crear_encabezado = function () {
  let tabla = `<table><thead><th scope="col">Iterador</th><th scope="col">Numero</th><th scope="col">Resultado</th></thead>
    <tbody id="cuerpo_tabla"></tbody>
    </table>`;
  let contenedor_tabla = document.getElementById("para_tabla");
  contenedor_tabla.innerHTML = tabla;
};

const boton = document.getElementById("ejecutar");
boton.addEventListener("click", crear_tabla);
function crear_tabla() {
  let numero = document.getElementById("num");
  numero = parseInt(numero.value);
  crear_encabezado();
  let cuerpoTabla = document.getElementById("cuerpo_tabla");

  for (let i = 0; i <= 10; i++) {
    let fila = document.createElement("tr");
    console.log([i, numero, i * numero]);
    let contenido = `<td>${i}</td><td>${numero}</td><td>${i * numero}</td>`;
    fila.innerHTML = contenido;
    cuerpoTabla.appendChild(fila);
  }
}
