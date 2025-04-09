//while

var cont = 10;

console.log("while con brak");
while (cont > 0) {
  console.log(cont);
  if (cont == 5) {
    console.log("termino en el 5");
    break;
  }
  cont--;
}
console.log("while con continue");
while (cont > 0) {
  console.log(cont);
  if (cont == 2) {
    console.log("termino en el 2");
  }
  cont--;
}

console.log("do-while");
do {
  console.log(cont);
  cont++;
} while (cont < 10);

console.log("for");
for (let index = 1; index <= cont; index++) {
  console.log(`numero ${index}`);
}

let Persona = {
  nombre: "maira",
  edad: "22",
  email: "maira@hotmail.com",
};

for (let c in Persona) {
  console.log(Persona[c]);
}
