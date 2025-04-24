const apiKey =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlY3VhLndhcnpvbmVAZ21haWwuY29tIiwianRpIjoiODBmZTU5Y2EtZDA1OS00YWRmLThmYjktOTI5ZGQ1MTgwODExIiwiaXNzIjoiQUVNRVQiLCJpYXQiOjE3NDUzMDM0OTIsInVzZXJJZCI6IjgwZmU1OWNhLWQwNTktNGFkZi04ZmI5LTkyOWRkNTE4MDgxMSIsInJvbGUiOiIifQ.N93p0J-nFJaXlv3A_TUvycLzinnBsVg27lrMDkBuwag";
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
