import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  title = 'test-maps';
  map: any;
  uluru = { lat: 24.886, lng: -70.268 };
  triangleCoords = [
    { lat: 25.774, lng: -80.190 },
    { lat: 18.466, lng: -66.118 },
    { lat: 32.321, lng: -64.757 },
    { lat: 25.774, lng: -80.190 }
  ];

  
  ngOnInit() {
    this.map = new google.maps.Map(
      document.getElementById('map'), { zoom: 4, center: this.uluru });
      this.createTriangle();
  }

  createTriangle(){
    var bermudaTriangle = new google.maps.Polygon({
      paths: this.triangleCoords,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35
    }).setMap(this.map);

    return bermudaTriangle;  
  }
}
