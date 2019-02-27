import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { MapAgmComponent } from './map-agm/map-agm.component';
import { MapGapiComponent } from './map-gapi/map-gapi.component';

const routes: Routes = [
  { path: '', redirectTo: '/agm', pathMatch: 'full' },
  { path: 'agm', component: MapAgmComponent },
  { path: 'gapi', component: MapGapiComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
