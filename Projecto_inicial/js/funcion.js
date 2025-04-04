function alerta(mensaje) {
  alert(mensaje);
  console.log(mensaje);
}

function cambiarTable() {
  var tabla = document.getElementById("tabla1");
  var tabla2 = document.getElementById("tabla2");
  var btnText = document.getElementById("btn");
  if (tabla.style.display === "inline-table") {
    tabla.style.display = "none";
    tabla2.style.display = "inline-table";
    btnText.innerHTML = "Tabla 1";
  } else {
    tabla2.style.display = "none";
    tabla.style.display = "inline-table";
    btnText.innerHTML = "Tabla 2";
  }
}
