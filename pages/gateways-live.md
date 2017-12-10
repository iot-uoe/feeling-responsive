---
layout: page-fullwidth
title: "LoRaWAN Gateway Locations"
header: no
permalink: "/gateways-live/"
---

<!-- background-color: "#022b3a" -->

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css" integrity="sha512-M2wvCLH6DSRazYeZRIm1JnYyh22purTM+FDB5CsyxtQJYeKq83arPe5wgbNmcFXGqiSH2XR8dT/fJISVA1r/zQ==" crossorigin=""/>
 
<link href='https://mapbox.com/base/latest/base.css' rel='stylesheet' />

<link rel="stylesheet" type="text/css" href="{{ site.url }}{{ site.baseurl }}/assets/css/map.css" />

<script src="https://unpkg.com/leaflet@1.2.0/dist/leaflet.js" integrity="sha512-lInM/apFSqyy1o6s89K4iQUKg6ppXEgsVxT35HbzUupEVRh2Eu9Wdl4tHj7dZO0s1uvplcYGmt3498TtHq+log==" crossorigin=""></script>

<div class="t30">
<h3>
Radius of gateway reception has been set to 2km. Click on a circle for name of gateway location.
</h3>
<p>
<div id="map" class="map leaflet-container" class="t30"></div>
</p>
</div>

<script language="javascript">

    var map = L.map('map').setView([55.939971,-3.199425], 12);

    
    //[55.953, -3.188]

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYmxldGhlcmVyIiwiYSI6ImNqYWdsbW9kdDFkbXQycXBsbWhpMXM3ZWMifQ.quwSOSS-tfYWJ1jEP0Voqg', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
            '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'mapbox.streets',
        zoomControl: false
    }).addTo(map);

    // name, lat, lng, altitude
    var gateways = [
        ["New College", 55.94970, -3.19552, 111],
        ["Easter Bush", 55.86593, -3.20132, 204],
        ["Kings Buildings", 55.92302, -3.17503, 90],
        ["Western General Hospital", 55.96232, -3.23191, 69],
        ["Charterisland", 55.95024, -3.18084, 76],
        ["UoE Library Annex", 55.930618, -3.301648, 0],
        ["Nine, Edinburgh BioQuarter", 55.920, -3.12931, 94]
    ];

    //Loop through the gateways array
    for (var i = 0; i < gateways.length; i++) {

        var lon = gateways[i][2];
        var lat = gateways[i][1];
        var popupText = gateways[i][0];

        var markerLocation = new L.LatLng(lat, lon);
        //var marker = new L.Marker(markerLocation);
        var marker = new L.circle(markerLocation, {
            stroke: false,
            //color: 'red',
            fillColor: '#1f7a80',
            fillOpacity: 0.5,
            radius: 5000
        });

        map.addLayer(marker);

        marker.bindPopup(popupText);
    }

</script>


   
         
 