mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [106.660172, 10.762622],
    zoom: 10
});
map.addControl(new mapboxgl.NavigationControl());

new mapboxgl.Marker()
    .setLngLat([106.660172, 10.762622])
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(
                `<h3>ITD Group</h3><p>Ho Chi Minh City, Vietnam</p>`
            )
    )
    .addTo(map)