import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-map-agm',
  templateUrl: './map-agm.component.html',
  styleUrls: ['./map-agm.component.css']
})
export class MapAgmComponent implements OnInit {

  cLat: number = 63.03;
  cLng: number = -29.917;
  zoom: number = 5;
  map: any;

  constructor() { }

  ngOnInit() {
  }

  onMapReady(map) {
    console.log('Map ready: ', map);
    this.map = map;
    this.initDrawingManager(map);
  }

  initDrawingManager(map: any) {
    
    const drawingManager = new google.maps.drawing.DrawingManager({
      drawingMode: google.maps.drawing.OverlayType.POLYGON,
      drawingControl: true,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: [google.maps.drawing.OverlayType.POLYGON]
      }
    });
    drawingManager.setMap(map);
  }

}
