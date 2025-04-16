const apiKey =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlY3VhLndhcnpvbmVAZ21haWwuY29tIiwianRpIjoiMjQ3MTRiMjMtY2MyMi00NjBmLTgwNTctNjg5N2NhNDY3NjNjIiwiaXNzIjoiQUVNRVQiLCJpYXQiOjE3NDQ3ODY0MzcsInVzZXJJZCI6IjI0NzE0YjIzLWNjMjItNDYwZi04MDU3LTY4OTdjYTQ2NzYzYyIsInJvbGUiOiIifQ.WBQupsIaeqCHtOPXuWgyStfeN_9knC1fBhke0vQL3xE";
export async function recogerDatos() {
  let url = `https://opendata.aemet.es/opendata/api/valores/climatologicos/inventarioestaciones/todasestaciones/?api_key=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error en la respuesta: " + response.status);
    }

    const data = await response.json();
    console.log("Datos recibidos de la API:", data);

    // Supongamos que 'data.datos' es otra URL
    const estacionesResponse = await fetch(data.datos);
    if (!estacionesResponse.ok) {
      throw new Error(
        "Error al obtener las estaciones: " + estacionesResponse.status
      );
    }

    const estaciones = await estacionesResponse.json();

    console.log("Estaciones:", estaciones);
    return estaciones;
  } catch (error) {
    console.error("Hubo un error en la petición:", error);
    return null;
  }
}
