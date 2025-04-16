import { recogerDatos } from "./servidorMap.js";
let provincias = [];
let listaProvincias = [];
async function pargarProvincias() {
  provincias = await recogerDatos();
  console.log(provincias);
}
pargarProvincias();

document
  .getElementById("btnResultado")
  .addEventListener("click", cargarProvincias);

function postrarProvincias() {
  let numPoblacion = parseInt(document.getElementById("provincias").value);
  let min = numPoblacion - 100;
  let cont = 0;
  for (let index = 0; index < provincias.length; index++) {
    const element = provincias[index].num_hab;

    if (min < element && element < numPoblacion) {
      cont++;
    }
  }
  console.log("hay un total de " + cont + " de provincias");
}

function cargarCantidad() {
  let selector = document.getElementById("provincias");
  selector.innerHTML = "";
  let cont = 0;
  for (let index = 1; index <= 10; index++) {
    let opcion = document.createElement("option");
    let calculo = index * 100;
    let calculo2 = cont;
    opcion.innerText = `${calculo2} a ${calculo}`;
    opcion.value = calculo;

    selector.appendChild(opcion);
    cont = index * 100;
  }
}
//cargarCantidad();

function cargarProvincias() {
  let selector = document.getElementById("provincias");
  let existe = false;
  selector.innerHTML = "";
  existe = false;
  provincias.sort((a, b) => a.provincia.localeCompare(b.provincia));
  for (let index = 0; index <= provincias.length; index++) {
    for (let j = index + 1; j < provincias.length; j++) {
      if (provincias[index].provincia == provincias[j].provincia) {
        existe = false;
        break;
      } else {
        if (provincias[index].provincia == "A CORU�A") {
          provincias[index].provincia = "A CORUÑA";
        }
        listaProvincias.push(provincias[index].provincia);
        existe = true;
        break;
      }
    }
  }

  listaProvincias.forEach((element) => {
    let opc = document.createElement("option");
    opc.innerHTML = "";
    opc.value = element;
    opc.id = element;
    opc.className = "opcion";
    opc.innerText = element;
    selector.appendChild(opc);
  });
  // console.log(listaProvincias);
}

document.getElementById("provincias").addEventListener("click", cargarNombre);

function cargarNombre() {
  // console.log("entro");
  const p = document.getElementById("provincias").value;
  console.log(p);
  let nombre = document.getElementById("nombre");
  nombre.innerHTML = "";
  let opc2 = document.createElement("option");
  opc2.innerHTML = "";
  opc2.innerText = "";
  for (let i = 0; i < listaProvincias.length; i++) {
    for (let j = 0; j < provincias.length; j++) {
      if (provincias[j].provincia === p) {
        opc2 = document.createElement("option");
        opc2.innerText = provincias[j].nombre;
        nombre.appendChild(opc2);
      }
    }
  }
}
