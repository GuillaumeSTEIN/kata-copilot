import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
// import { TranslateModule } from '@ngx-translate/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes)
    // TranslateModule.forRoot() retiré, car géré dans AppModule
  ]
};
