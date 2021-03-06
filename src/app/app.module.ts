import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

import { VehicleListService } from './services/vehicle-list.service';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { VehiclesCompareComponent } from './components/vehicles-compare/vehicles-compare.component';
import { AboutComponent } from './components/about/about.component';
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'vehicle/:id', component: VehicleComponent},
  {path: 'compare', component: VehiclesCompareComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    VehicleComponent,
    VehiclesCompareComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ VehicleListService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
