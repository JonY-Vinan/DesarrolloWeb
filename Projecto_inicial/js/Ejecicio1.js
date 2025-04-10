//Ejercicio contador de click
let cont = 0;
const bt = document.getElementById("numero");
bt.addEventListener("click", contadorClick);
function contadorClick() {
  cont++;
  return (document.getElementById(
    "contador"
  ).textContent = `Haz hecho click ${cont} veces`);
}
const boton = document.getElementById("resett");
boton.addEventListener("click", contadorCero);
function contadorCero() {
  cont = 0;
  return (document.getElementById("contador").textContent = cont);
}
