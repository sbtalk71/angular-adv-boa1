import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AuthGuard2 } from './guards/auth2.guard';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { JwtInterceptor} from './jwt.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),AuthGuard2, provideClientHydration(withEventReplay()),
    provideHttpClient(withInterceptorsFromDi()),{provide:HTTP_INTERCEPTORS,useClass:JwtInterceptor,multi:true}
  ]
};
