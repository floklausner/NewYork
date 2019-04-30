'use strict';

$(document).ready(function (){
    $('#arrow').click(function (){
        $('html, body').animate({
            scrollTop: $('#content').offset().top
        }, 80);
    });
});

window.addEventListener('load', () => {
  let navbar = document.getElementById('navbar');
  let maxHeight = navbar.clientHeight;

  navbar.style.display = 'none';

  document.getElementById('menu').addEventListener('click', () => {
    if (navbar.style.display === 'none') {
        navbar.style.display = 'block';
   } else {
     navbar.style.display = 'none';
   }
  });
});

(function () {
  function uhrzeit() {
    let jetzt = new Date(),
        h = jetzt.getHours(),
        m = jetzt.getMinutes(),
        s = jetzt.getSeconds();
    m = fuehrendeNull(m);
    s = fuehrendeNull(s);
    document.getElementById('uhr').innerHTML = (h - 6) + ':' + m + ':' + s;
    setTimeout(uhrzeit, 500);
  }

  function fuehrendeNull(zahl) {
    zahl = (zahl < 10 ? '0' : '' )+ zahl;
    return zahl;
  }

  document.addEventListener('DOMContentLoaded',uhrzeit);
}());

function goLeft() {
  let images = document.getElementsByClassName('pictures');
  let rack = images[8].src;

  images[8].src = images[7].src;
  images[7].src = images[6].src;
  images[6].src = images[5].src;
  images[5].src = images[4].src;
  images[4].src = images[3].src;
  images[3].src = images[2].src;
  images[2].src = images[1].src;
  images[1].src = images[0].src;
  images[0].src = rack;
}

function goRight() {
  let images = document.getElementsByClassName('pictures');
  let rack = images[0].src;

  images[0].src = images[1].src;
  images[1].src = images[2].src;
  images[2].src = images[3].src;
  images[3].src = images[4].src;
  images[4].src = images[5].src;
  images[5].src = images[6].src;
  images[6].src = images[7].src;
  images[7].src = images[8].src;
  images[8].src = rack;
}

/*var latlng = new google.maps.LatLng(-34.397, 150.644);
var myOptions = {
zoom: 8,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
};
var map = new google.maps.Map(document.getElementById("googleMap"), myOptions);*/

//40.712784
//-74.005941
