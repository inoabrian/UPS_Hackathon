// tslint:disable:import-spacing
import { Component, OnInit }  from '@angular/core';
import { Input }              from '@angular/core';
import { DashboardService }   from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService]
})

 export class DashboardComponent implements OnInit {

  // tslint:disable-next-line:typedef-whitespace
  private user : any = {};
  private userLatitude: any;
  private userLongitude: any;

  private mymap: any = {};

  private markers: any = [];

  constructor(private dashService: DashboardService) {

  }

   ngOnInit() {

     this.dashService.getUser()
     .subscribe((data) => {
        this.user = data;
       console.log(this.user)
        this.requestGPS();
     });

   }

  // success(position) {
  //   this.userLatitude  = position.coords.latitude;
  //   this.userLongitude = position.coords.longitude;
    
  //   this.setupMap()
  //   // output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

  //   // const img = new Image();
  //   // img.src = 'https://maps.googleapis.com/maps/api/staticmap?center=' + latitude + ',' + longitude + '&zoom=13&size=300x300&sensor=false';

  //   // output.appendChild(img);
  // }

   setupMap() {
      this.mymap = window['L'].map('map').setView([this.userLatitude, this.userLongitude], 13);

      var polylinePoints = [
        new window['L'].LatLng(this.userLatitude, this.userLongitude),
        new window['L'].LatLng(41.0674681,-74.1754413),
        new window['L'].LatLng(41.0675896,-74.1744839),
        new window['L'].LatLng(41.0687822,-74.1727037),
        new window['L'].LatLng(41.0792658,-74.1603194),
        new window['L'].LatLng(41.082689,-74.1501626),
        new window['L'].LatLng(41.0823288,-74.1504008),
        new window['L'].LatLng(41.08299,-74.150441)
      ];

      var polylineOptions = {
            color: 'blue',
            weight: 6,
            opacity: 0.9
          };

      var polyline = new window['L'].Polyline(polylinePoints, polylineOptions);


      const string1 = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?';
      const string2 = 'access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

      window['L'].tileLayer(string1 + string2, {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
          '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
          'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'mapbox.streets'
      }).addTo(this.mymap);

      // window['L'].marker([51.5, -0.09]).addTo(mymap)
      //   .bindPopup('<b>Hello world!</b><br />I am a popup.').openPopup();
      this.mymap.addLayer(polyline);

      window['L'].circle([this.userLatitude, this.userLongitude], 500, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5
      }).addTo(this.mymap).bindPopup(`@Lat:${this.userLatitude}, Long:${this.userLongitude}`);

      // window['L'].polygon([
      //   [51.509, -0.08],
      //   [51.503, -0.06],
      //   [51.51, -0.047]
      // ]).addTo(mymap).bindPopup('I am a polygon.');

      // const popup = window['L'].popup();

      // function onMapClick(e) {
      //   popup
      //     .setLatLng(e.latlng)
      //     .setContent('You clicked the map at ' + e.latlng.toString())
      //     .openOn(mymap);
      // }

      // mymap.on('click', onMapClick);
   }

   requestGPS() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.userLatitude  = position.coords.latitude;
      this.userLongitude = position.coords.longitude;

      this.setupMap();
    }, () => {
      console.error('ERROR');
    });
   }

  error() {
    // output.innerHTML = "Unable to retrieve your location";
  }

  rowClick(stopInfo) {
    if(this.markers.length > 0) {
      const marker = this.markers.pop();
      this.mymap.removeLayer(marker);
    }

    this.markers.push(
      window['L']
      .marker([stopInfo.streetCoordinates.lat, stopInfo.streetCoordinates.lon])
    );

    this.markers[0]
      .addTo(this.mymap)
      .bindPopup(`Stop #: ${stopInfo.stopNumber}, Street Name: ${stopInfo.streetName}`)
      .openPopup();

      this.mymap
      .panTo(new window['L'].LatLng(stopInfo.streetCoordinates.lat, stopInfo.streetCoordinates.lon))
  }

}
