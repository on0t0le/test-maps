import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'test-maps';
  map: any;
  uluru = {lat: -25.344, lng: 131.036};
  
      ngOnInit() {
       this.map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: this.uluru});  
      }
}
