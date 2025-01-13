import { ApplicationConfig } from '@angular/core';
import { ActivatedRoute, provideRouter } from '@angular/router';

import { routeConfig } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routeConfig), provideClientHydration(), ActivatedRoute]
};