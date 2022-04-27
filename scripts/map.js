jQuery(document).ready(function ($) {

    let bounds = [
        [0, 0], // padding
        [4096, 4096], // image dimensions
    ];

    // L.CRS.Simple
    //  A simple CRS that maps longitude and latitude into `x` and `y` directly.
    // May be used for maps of flat surfaces (e.g. game maps).
    let map = L.map("map", {
        crs: L.CRS.Simple,
        minZoom: -2,
        maxZoom: 0,
        maxBounds: bounds,
        maxBoundsViscosity: 1.0
    });

    // Used to load and display a single image over
    // specific bounds of the map. Extends `Layer`.
    L.imageOverlay("images/map/map_asha.jpg", bounds).addTo(map);

    // method fitBounds sets a map view
    // that contains the given geographical bounds with the
    // maximum zoom level possible.
    map.fitBounds(bounds);
    map.setZoom(-1); // -1 initial

    // // coordinate array with popup text
    // const points = [
    //     {
    //         lat: 3000,
    //         lng: 2000,
    //         title: "Waypoint",
    //         image: "images/map/omniumtower.png",
    //     }
    // ];

    // // we create an array of markers
    // // each marker has a unique title
    // // of course this could be another parameter
    // for (let i = 0; i < points.length; i++) {
    //     const { lat, lng, title, image } = points[i];

    //     // create specific icon
    //     const myIcon = L.icon({
    //         iconUrl: image,
    //         className: "image-icon",
    //         iconSize: [32, 32],
    //         iconAnchor: [32, 32],
    //         popupAnchor: [0, -32],
    //     });

    //     // create marker and add to map
    //     let marker = L.marker([lat, lng], { icon: myIcon }).addTo(map);

    //     const idMarker = marker._leaflet_id;

    //     // add to marker popup
    //     marker.bindPopup(`
    //     <div style="text-align: center;">
    //       <div style="text-transform: uppercase; font-weight: bold;">${title} id: ${idMarker}<div>
    //     </div>
    //   `);

    // }
    // coordinate array with popup text
//    let points = [
//        [2000, 2000, "point 1"],
//        [3000, 3000, "point 2"]
//      ];
//
//    // loop that adds many markers to the map
//    for (let i = 0; i < points.length; i++) {
//        const [lat, lng, popupText] = points[i];
//
//        marker = new L.marker([lat, lng]).bindPopup(popupText).addTo(map);
//    }
    var omniumTower = L.icon({
        iconUrl: 'images/map/omniumtower.png',
        shadowUrl: '',

        iconSize:     [48, 48], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [16, 16], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    L.marker([2000, 2000], {icon: omniumTower}).bindPopup("Omnium Tower").addTo(map);
    
    
    var ruins = L.icon({
        iconUrl: 'images/map/ruins.png',
        shadowUrl: '',

        iconSize:     [48, 48], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [16, 16], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    L.marker([2400, 2400], {icon: ruins}).addTo(map);
    
    
    var cooking = L.icon({
        iconUrl: 'images/map/cooking.png',
        shadowUrl: '',

        iconSize:     [48, 48], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [16, 16], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    L.marker([1900, 1900], {icon: cooking}).addTo(map);
    
    
    var supplypod = L.icon({
        iconUrl: 'images/map/supplypod.png',
        shadowUrl: '',

        iconSize:     [32, 32], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [16, 16], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    L.marker([2800, 2800], {icon: supplypod}).addTo(map);
    
    
    var wbApohpis = L.icon({
        iconUrl: 'images/map/wb_apophis.png',
        shadowUrl: '',

        iconSize:     [64, 64], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [16, 16], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    L.marker([1400, 1400], {icon: wbApohpis}).addTo(map);
});
