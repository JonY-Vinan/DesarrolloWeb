export class Alumno {
  constructor(dni, nombre, apellido, edad, curso) {
    this.dni = this.validarDni(dni);
    this.nombre = this.validarTexto(nombre);
    this.apellido = this.validarTexto(apellido);
    this.edad = this.validarEdad(edad);
    this.curso = curso;
  }

  static cursos() {
    return ["Informatica", "Medicina", "Fontanero", "Pintor", "Cocinero"];
  }

  validarDni(dni) {
    const regex = /^[0-9]{8}[A-Z]$/;
    if (!regex.test(dni)) {
      window.alert("DNI INCORRECTO");
      throw new Error("DNI INCORRECTO");
    } else {
      return dni;
    }
  }
  validarEdad(edad) {
    if (edad >= 18 && edad <= 120) {
      return edad;
    } else {
      throw new Error("Error en la edad");
    }
  }

  validarTexto(texto) {
    if (typeof texto !== "string") {
      throw new Error("Los campos nombre y apellido no debe contener numeros");
    } else {
      return texto;
    }
  }

  static resumen(dni, nombre, apellido, edad, curso) {
    return `El DNI: ${dni} del alumno ${nombre} ${apellido} de ${edad} años que ahora esta inscrito en el curso de ${curso}`;
  }

  static anadir(nombre, apellido, curso) {
    return `El alumno ${nombre} ${apellido} inscrito en el curso de ${curso}`;
  }
}
