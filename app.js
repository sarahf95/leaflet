'use strict'

var mymap = L.map('mapid').setView([47.6062, -122.3321], 12);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'sarahf95.29p713kp',
    accessToken: 'pk.eyJ1Ijoic2FyYWhmOTUiLCJhIjoiY2l3YndsZTB5MDRvOTJ0bGtvazZvdGZsYiJ9.gBaTfDLpBwuLDxMfsBBxjw'
}).addTo(mymap);


// 47.6553° N, 122.3035° W UW coordinates!

var marker = L.marker([47.6553, -122.3035]).addTo(mymap);

// 47.6503° N, 122.3016° W

var circle = L.circle([47.6503, -122.3016], {
    color: 'purple',
    fillColor: 'purple',
    fillOpacity: 0.5,
    radius: 100
}).addTo(mymap);

// 47.6493° N, 122.3067° W UW Medical Center!

var polygon = L.polygon([
    [47.6503, -122.3016],
    [47.6553, -122.3035],
    [47.6493, -122.3067]],{
        color: 'purple',
        fillOpacity: .1,
        fillColor: 'yellow'
    }).addTo(mymap);