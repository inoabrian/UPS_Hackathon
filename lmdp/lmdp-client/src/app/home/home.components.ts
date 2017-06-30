// tslint:disable:import-spacing
import { Component, OnInit }  from '@angular/core';
import { Input }              from '@angular/core';
// import { DashboardService }   from './dashboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
//   providers: [DashboardService]
})

 export class HomeComponent implements OnInit {

    constructor() {

    }

    ngOnInit() {
        this.setupHomeMap();
        this.setupChart();
    }

    getDashHeader() {
        return window['moment']().format('MM/DD/YYYY');
    }

    setupHomeMap() {
        var mymap = window['L'].map('mapid').setView([41.0677516, -74.1727943], 13);

        var polylinePoints = [
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

         mymap.addLayer(polyline);                        

         // zoom the map to the polyline
         mymap.fitBounds(polyline.getBounds());



        window['L'].tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="http://mapbox.com">Mapbox</a>',
            id: 'mapbox.streets'
        }).addTo(mymap);

        // window['L'].marker([51.5, -0.09]).addTo(mymap)
        //     .bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();

        window['L'].circle([41.0677516, -74.1727943], 700, {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5
        }).addTo(mymap).bindPopup("UPS Mahwah.");

        // window['L'].polygon([
        //     [51.509, -0.08],
        //     [51.503, -0.06],
        //     [51.51, -0.047]
        // ]).addTo(mymap).bindPopup("I am a polygon.");


        var popup = window['L'].popup();

        function onMapClick(e) {
            popup
                .setLatLng(e.latlng)
                .setContent("You clicked the map at " + e.latlng.toString())
                .openOn(mymap);
        }

        mymap.on('click', onMapClick);

    }

    setupChart() {
        var element = <HTMLCanvasElement>document.getElementById("myChart");
        var ctx = element.getContext('2d');
        var myChart = new window['Chart'](ctx, {
            type: 'bar',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
    }
}
