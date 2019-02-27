import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-agm',
  templateUrl: './map-agm.component.html',
  styleUrls: ['./map-agm.component.css']
})
export class MapAgmComponent implements OnInit {

  cLat: number = 56;
  cLng: number = 46;
  zoom: number = 10;
  constructor() { }

  ngOnInit() {
  }

}
