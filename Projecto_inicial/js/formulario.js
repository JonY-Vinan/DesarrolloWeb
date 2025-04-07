function getDatos() {
  var nombre = document.getElementById("nombre");
  var edad = document.getElementById("edad");
  var telefono = document.getElementById("telefono");
  var correo = document.getElementById("email");
}

function manejarRadioButtons(formId) {
  const form = document.getElementById(formId);
  const radios = form.querySelectorAll('input[type="radio"]');

  radios.forEach((radio) => {
    radio.addEventListener("change", (event) => {
      radios.forEach((btn) => {
        if (btn !== event.target) {
          btn.checked = false; // Deselecciona los demás botones
        }
      });
    });
  });
}

// Llamamos a la función y pasamos el ID del formulario
manejarRadioButtons("radioForm");
