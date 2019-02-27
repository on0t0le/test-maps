import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapGapiComponent } from './map-gapi.component';

describe('MapGapiComponent', () => {
  let component: MapGapiComponent;
  let fixture: ComponentFixture<MapGapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapGapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapGapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
