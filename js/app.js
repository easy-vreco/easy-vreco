// Mapa
function initMap() {
  let coordinate = {lat: -12.1191427,
    lng: -77.0349046};
  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: coordinate
  });
  
  // Muestra la posicion segun las coordenadas mencionadas
  let marker = new google.maps.Marker({
    position: coordinate,
    map: map
  });

  // Autocompletado
  let inputOrigin = document.getElementById('origin');
  let inputDestination = document.getElementById('destination');

  new google.maps.places.Autocomplete(inputOrigin);
  new google.maps.places.Autocomplete(inputDestination);

  // Trazar ruta
  /* Aqui va codigo-------- */
}