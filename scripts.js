

var startTime = 0;

window.onload = function() {
  if ("geolocation" in navigator) {
    /* geolocation is available */
    
  } else {
    alert("Geolocation not available!");
  }
}

function changePage(activePage) {

  var elems = document.getElementsByClassName("page");
  for (var i = 0; i < elems.length; i++) {
    elems.item(i).classList.add("hidden");
  }

  document.getElementById(activePage).classList.remove("hidden");
}




function testGeolocation() {

  startTime = (new Date()).getTime();

  changePage("geolocation-page");

  if ( navigator.geolocation ) {
    navigator.geolocation.getCurrentPosition(setCurrentPosition, positionError, {
      enableHighAccuracy: true,
      timeout: 15000, maximumAge: 0
    });
  }
}

function setCurrentPosition(position) {

  var timeTook = (new Date()).getTime() - startTime;

  document.getElementById("gps-text").innerHTML =
    "Fetching Geolocation took: " + timeTook + " ms<br>" +
    "Coordinates: " + position.coords.latitude + ", " + position.coords.longitude + "<br>" +
    "Accuracy: " + position.coords.accuracy;
}

function positionError(error) {
  alert(error);
}












