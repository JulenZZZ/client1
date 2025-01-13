import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EventsComponent } from './servicios/events/events.component';
import {ModuleWithProviders} from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ClassesComponent } from './servicios/classes/classes.component';
import { DanceComponent } from './servicios/dance/dance.component';

export const routeConfig: Routes = [
    
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
  { path: 'event', component: EventsComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'dance', component: DanceComponent },
  { path: '**', redirectTo: '' } 
   
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routeConfig);


