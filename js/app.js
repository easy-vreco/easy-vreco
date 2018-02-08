// Mapa
function initMap() {
  let coordinate = {lat: -12.1191427,
    lng: -77.0349046};
  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: coordinate
  });
  
  // Variable que encierra la dirección del marcador
  let iconBase = {
    url: 'http://www.mobipalma.mobi/wp-content/uploads/2016/03/iconos-14.png',
    scaledSize: new google.maps.Size(30, 32)
  };
  // Muestra la posicion segun las coordenadas mencionadas
  let marker = new google.maps.Marker({
    position: coordinate,
    map: map,
    icon: iconBase,
    animation: google.maps.Animation.BOUNCE
  });

  // Autocompletado
  let inputOrigin = document.getElementById('origin');
  let inputDestination = document.getElementById('destination');

  new google.maps.places.Autocomplete(inputOrigin);
  new google.maps.places.Autocomplete(inputDestination);

  // Trazar ruta
  /* Aqui va codigo-------- */
}