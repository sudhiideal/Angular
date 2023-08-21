import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilityModule } from 'src/utility/utility.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppContainerComponent } from './components/app-container/app-container.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeadersInterceptor } from './interceptors/headers.interceptor';

@NgModule({
  declarations: [AppComponent, NavbarComponent, AppContainerComponent],
  imports: [BrowserModule, AppRoutingModule, UtilityModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
