import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

 export class DashboardComponent implements OnInit {

   constructor() {

   }

   ngOnInit() {

      const mymap = window['L'].map('map').setView([51.505, -0.09], 13);
      const string1 = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?';
      const string2 = 'access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

      window['L'].tileLayer(string1 + string2, {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
          '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
          'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'mapbox.streets'
      }).addTo(mymap);

      window['L'].marker([51.5, -0.09]).addTo(mymap)
        .bindPopup('<b>Hello world!</b><br />I am a popup.').openPopup();

      window['L'].circle([51.508, -0.11], 500, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5
      }).addTo(mymap).bindPopup('I am a circle.');

      window['L'].polygon([
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047]
      ]).addTo(mymap).bindPopup('I am a polygon.');


      const popup = window['L'].popup();

      function onMapClick(e) {
        popup
          .setLatLng(e.latlng)
          .setContent('You clicked the map at ' + e.latlng.toString())
          .openOn(mymap);
      }

      mymap.on('click', onMapClick);
   }

}