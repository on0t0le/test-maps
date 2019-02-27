import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-gapi',
  templateUrl: './map-gapi.component.html',
  styleUrls: ['./map-gapi.component.css']
})
export class MapGapiComponent implements OnInit {

  map: google.maps.Map;

  constructor() { }

  ngOnInit() {

    this.map = new google.maps.Map(document.getElementById('gmap'), {
      center: new google.maps.LatLng(56, 46),
      zoom: 10
    });

  }

}
