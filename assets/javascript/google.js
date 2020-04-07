function initMap() {
    let coordinates = {
        lat: 46.470024,
        lng: 30.707708
    }


    let map = new google.maps.Map(document.getElementById('googleJS'),{
        center: coordinates,
        zoom: 18,
        mapTypeId: 'roadmap'
    });

    let marker = new google.maps.Marker({
        position:coordinates,
        map:map
    })
}
