// tslint:disable:import-spacing
import { Component, OnInit }  from '@angular/core';
import { Input }              from '@angular/core';
import { DashboardService }   from '../dashboard/dashboard.service';

@Component({
  selector: 'app-ride',
  templateUrl: './ride.component.html',
  styleUrls: ['./ride.component.css'],
  providers: [DashboardService]
})

 export class RideComponent implements OnInit {
  // tslint:disable-next-line:typedef-whitespace
  private user : any = {};
  private userLatitude: any;
  private userLongitude: any;

  private mymap: any = {};

  private markers: any = [];

  public stops : any = [
    {streetName: "435 Ridge Rd", lat : 41.0664322, lon : -74.1688673, packageCount: 10, stopNumber:1 },
    {streetName: "429 Ridge Rd", lat : 41.0667077, lon : -74.1687591, packageCount: 10, stopNumber:2 },
    {streetName: "Ridge Rd", lat : 41.0688464, lon : -74.1676738, packageCount: 10, stopNumber:3 },
    {streetName: "553 Holly Ct", lat : 41.0690594, lon : -74.1676639, packageCount: 10, stopNumber:4 },
    {streetName: "3689-4007 Mark Twain Way", lat : 41.0709473, lon : -74.1673167, packageCount: 10, stopNumber:5 },
    {streetName: "3689-4007 Mark Twain Way", lat : 41.0706156, lon : -74.1668869, packageCount: 10, stopNumber:6 },
    {streetName: "3689-4007 Mark Twain Way", lat : 41.0702085, lon : -74.1658508, packageCount: 10, stopNumber:7 },
    {streetName: "2901-3069 Mark Twain Way", lat : 41.0696127, lon : -74.1641013, packageCount: 10, stopNumber:8 },
    {streetName: "3703 Melville Ct", lat : 41.0690303, lon : -74.1638153, packageCount: 10, stopNumber:9 },
    {streetName: "2901 Mark Twain Way", lat : 41.0681626, lon : -74.1636822, packageCount: 10, stopNumber:10 },
    {streetName: "3509 Whittier Ct", lat : 41.0679238, lon : -74.163412, packageCount: 10, stopNumber: 11}
  ];

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

        var polylinePoints = [
        new window['L'].LatLng(this.userLatitude, this.userLongitude),
        new window['L'].LatLng(41.0664322,-74.1688673),
        new window['L'].LatLng(41.0667077,-74.1687591),
        new window['L'].LatLng(41.0688464,-74.1676738),
        new window['L'].LatLng(41.0690594,-74.1676639),
        new window['L'].LatLng(41.0709473,-74.1673167),
        new window['L'].LatLng(41.0706156,-74.1668869),
        new window['L'].LatLng(41.0702085,-74.1658508),
        new window['L'].LatLng(41.0696127,-74.1641013),
        new window['L'].LatLng(41.0690303,-74.1638153),
        new window['L'].LatLng(41.0681626,-74.1636822),
        new window['L'].LatLng(41.0679238,-74.163412)
      ];

      var polylineOptions = {
            color: 'blue',
            weight: 6,
            opacity: 0.9
          };

      var polyline = new window['L'].Polyline(polylinePoints, polylineOptions);

    this.mymap = window['L'].map('map').setView([this.userLatitude, this.userLongitude], 13);
      const string1 = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?';
      const string2 = 'access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

      window['L'].tileLayer(string1 + string2, {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
          '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
          'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'mapbox.streets'
      }).addTo(this.mymap);

      this.mymap.addLayer(polyline);

      // window['L'].marker([51.5, -0.09]).addTo(mymap)
      //   .bindPopup('<b>Hello world!</b><br />I am a popup.').openPopup();

      window['L'].circle([41.0706156,-74.1668869], 500, {
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
      .marker([stopInfo.lat, stopInfo.lon])
    );

    this.markers[0]
      .addTo(this.mymap)
      .bindPopup(`Stop #: ${stopInfo.stopNumber}, Street Name: ${stopInfo.streetName}`)
      .openPopup();

      this.mymap
      .panTo(new window['L'].LatLng(stopInfo.streetCoordinates.lat, stopInfo.streetCoordinates.lon))
  }

}
