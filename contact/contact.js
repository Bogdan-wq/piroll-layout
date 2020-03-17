$(document).ready(function() {
   $('#logo-and-menu').load('../snippets(footer-menu-work)/menu/menu.html');

});



function initMap() {
   let coordinates = {
      lat: 46.470024,
      lng: 30.707708
   }


   let map = new google.maps.Map(document.getElementById('google-map'),{
      center: coordinates,
      zoom: 18,
      mapTypeId: 'roadmap'
   });

   let marker = new google.maps.Marker({
      position:coordinates,
      map:map
   })
}

