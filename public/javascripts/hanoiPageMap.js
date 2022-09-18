mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [105.804817, 21.028511],
    zoom: 10
});
map.addControl(new mapboxgl.NavigationControl());

new mapboxgl.Marker()
    .setLngLat([105.804817, 21.028511])
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(
                `<h3>My Hometown</h3><p>Hanoi, Vietnam</p>`
            )
    )
    .addTo(map)