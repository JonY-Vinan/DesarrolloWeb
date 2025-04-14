const consulta = function (callback) {
  let listado = JSON.parse(localStorage.getItem("peliculas")) || [];
  callback(listado); // Ejecutamos el callback con los resultados
};
export const baseDatos = function (renderizarHTML) {
  console.log("Petición recibida");
  setTimeout(() => {
    consulta((listado) => {
      console.log("Consulta completada:", listado);
      renderizarHTML(listado); // Pasamos los resultados al callback
    });
  }, 3000);
};
