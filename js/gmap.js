
function init() {
  var venueMap;

  var pinLocation = new google.maps.LatLng(53.1420265,-6.8285954);
  var myLatLng = pinLocation;

  var mapOptions = {
    zoom: 12,
    center: pinLocation,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    panControl: true,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL,
      position: google.maps.ControlPosition.TOP_RIGHT
    },

    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      position: google.maps.ControlPosition.TOP_LEFT
    },

    scaleControl: true,
    scaleControlOptions: {
      position: google.maps.ControlPosition.TOP_CENTER
    },
    streetViewControl: false,
    overviewMapControl: false,

    styles: [{"featureType":"administrative","elementType":"labels.text","stylers":[{"color":"#f84243"},{"weight":"0.25"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#f84243"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text","stylers":[{"hue":"#ff0000"}]},{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"},{"color":"#0d0000"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#6bb3a5"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#3986b8"},{"visibility":"on"}]}]

  };

  var venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: venueMap,
  });

  

}

function loadScript() {
  var script = document.createElement('script');
  script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
  document.body.appendChild(script);
}

window.onload = loadScript;