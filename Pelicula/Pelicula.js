export class Pelicula {
  constructor(titulo, director, anioEstreno, paisOrigen, genero, calificacion) {
    this.titulo = this.verificar(titulo, "titulo");
    this.id = this.generarIdPelicula(titulo);
    this.validarId(this.id);
    this.director = this.verificar(director, "director");
    this.anioEstreno = this.verificar(anioEstreno, "anioEstreno");
    this.paisOrigen = paisOrigen;
    this.genero = genero;
    this.calificacion = this.verificar(calificacion, "calificacin");
  }

  static verificarPaisYGenero() {
    return [
      {
        pais: "Ecuador",
        generos: ["Terror", "Accion"],
      },
      {
        pais: "Francia",
        generos: ["Terror", "Accion", "Romance", "Comedia"],
      },
      {
        pais: "Alemania",
        generos: ["Terror", "Animacion", "Romance", "Ciencia Ficcion"],
      },
      {
        pais: "Japon",
        generos: [
          "Terror",
          "Accion",
          "Romance",
          "Comedia",
          "Animacion",
          "Ciencia",
        ],
      },
    ];
  }
  static pais() {
    return ["Ecuador", "Francia", "Alemania", "Japon"];
  }

  static genero() {
    return ["Terror", "Accion", "Romance", "Comedia", "Animacion", "Ciencia"];
  }

  generarIdPelicula(titulo) {
    let codigo = Math.floor(Math.random() * (9999999 - 1 + 1) + 1);
    let codigotitulo = titulo.slice(0, 2).toLowerCase();
    let codigoStr = codigo.toString().padStart(7, "0");
    let idPelicula = `${codigotitulo}${codigoStr}`;
    return idPelicula;
  }

  verificar(dato, tipo) {
    // Verificación del tipo de dato dependiendo de su tipo
    switch (tipo) {
      case "titulo":
        if (dato.length <= 100) {
          return dato;
        } else {
          throw new Error("El título supera los 100 caracteres.");
        }

      case "director":
        if (dato.length <= 50) {
          return dato;
        } else {
          throw new Error("El nombre del director supera los 50 caracteres.");
        }

      case "anioEstreno":
        if (dato.toString().length === 4) {
          if (dato > 1970 && dato < 2026) {
            return dato;
          } else {
            throw new Error("El año no esta entre 1970 y 2026");
          }
        } else {
          throw new Error("El año de estreno debe tener 4 dígitos.");
        }
      case "calificacion":
        if (dato.toString().length >= 0 && dato.toString().length <= 10) {
          return dato;
        } else {
          throw new Error("La calidicacion debe estar entre el 0 al 10.");
        }

      default:
        return dato;
    }
  }

  validarId(id) {
    const regex = new RegExp("^([a-zA-Z]{2}\\d{7})$");
    if (!regex.test(id)) {
      throw new Error(
        "El ID no es válido. Debe ser de dos letras seguidas de 7 dígitos."
      );
    }
  }
}
