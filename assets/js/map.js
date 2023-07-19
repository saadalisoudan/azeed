$(function () {
  "use strict";

  function markerMap() {
    var azeed = new google.maps.LatLng(21.3647887, 40.0496704);
    var map = new google.maps.Map(document.getElementById("mapMarker"), {
      zoom: 10,
      center: azeed,
    });

    var contentString =
      '<div id="content">' +
      '<h4 id="infoTitle" class="info-title">azeed</h4>' +
      "</div>";

    var infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    const icon = {
      url: "../assets/img/marker.png", // url
      scaledSize: new google.maps.Size(50, 50), // scaled size
      origin: new google.maps.Point(0, 0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };

    var marker = new google.maps.Marker({
      position: azeed,
      map: map,
      icon: icon,
    });


    infowindow.open(map, marker);
    marker.addListener("click", function () {
      infowindow.open(map, marker);
    });
  }

  if (document.getElementById("google-map")) {
    markerMap();
  }
});
