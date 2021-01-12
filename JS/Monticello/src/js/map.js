let map, infoWindow;

window.initMap = function () {
  const uluru = { lat: 40.678, lng: -73.902 };
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: uluru,
    styles: [
      {
        elementType: 'geometry',
        stylers: [
          {
            color: '#f5f5f5',
          },
        ],
      },
      {
        elementType: 'labels.icon',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#616161',
          },
        ],
      },
      {
        elementType: 'labels.text.stroke',
        stylers: [
          {
            color: '#f5f5f5',
          },
        ],
      },
      {
        featureType: 'landscape',
        elementType: 'geometry.fill',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'landscape.natural',
        elementType: 'geometry.fill',
        stylers: [
          {
            visibility: 'on',
          },
        ],
      },
      {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [
          {
            color: '#eeeeee',
          },
        ],
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#757575',
          },
        ],
      },
      {
        featureType: 'poi.business',
        elementType: 'labels.icon',
        stylers: [
          {
            color: '#a4a2a2',
          },
          {
            visibility: 'simplified',
          },
        ],
      },
      {
        featureType: 'poi.government',
        elementType: 'labels.icon',
        stylers: [
          {
            color: '#a4a2a2',
          },
          {
            visibility: 'simplified',
          },
        ],
      },
      {
        featureType: 'poi.medical',
        elementType: 'labels.icon',
        stylers: [
          {
            color: '#a4a2a2',
          },
          {
            visibility: 'simplified',
          },
        ],
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [
          {
            color: '#e5e5e5',
          },
        ],
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.icon',
        stylers: [
          {
            color: '#a4a2a2',
          },
        ],
      },
      {
        featureType: 'poi.place_of_worship',
        elementType: 'labels.icon',
        stylers: [
          {
            color: '#a4a2a2',
          },
          {
            visibility: 'simplified',
          },
        ],
      },
      {
        featureType: 'poi.school',
        elementType: 'labels.icon',
        stylers: [
          {
            color: '#a4a2a2',
          },
          {
            visibility: 'simplified',
          },
        ],
      },
      {
        featureType: 'poi.sports_complex',
        elementType: 'labels.icon',
        stylers: [
          {
            color: '#a4a2a2',
          },
          {
            visibility: 'simplified',
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [
          {
            color: '#ffffff',
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'geometry.fill',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'labels.text',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [
          {
            color: '#dadada',
          },
        ],
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#616161',
          },
        ],
      },
      {
        featureType: 'road.local',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#9e9e9e',
          },
        ],
      },
      {
        featureType: 'transit.station.airport',
        elementType: 'labels.icon',
        stylers: [
          {
            color: '#a4a2a2',
          },
          {
            saturation: -10,
          },
          {
            lightness: -10,
          },
          {
            visibility: 'simplified',
          },
        ],
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
          {
            color: '#c9c9c9',
          },
        ],
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#9e9e9e',
          },
        ],
      },
    ],
  });

  // // var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
  var iconBase = src="https://maps.gstatic.com/mapfiles/"

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: iconBase + '../images/Pin.png'
  });

  infoWindow = new google.maps.InfoWindow();
  const locationButton = document.createElement('button');
  locationButton.textContent = 'Pan to Current Location';
  locationButton.classList.add('custom-map-control-button');
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener('click', () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          infoWindow.setPosition(pos);
          infoWindow.setContent('Location found.');
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        },
      );
    } else {
  
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
};

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? 'Error: The Geolocation service failed.'
      : "Error: Your browser doesn't support geolocation.",
  );
  infoWindow.open(map);
}
