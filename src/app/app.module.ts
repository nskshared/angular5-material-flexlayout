import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HolidayListComponent } from './pages/holiday/holiday-list/holiday-list.component';
import { AppRoutingModule } from './app-routing.module';
import { APP_CONST, APP_CONST_VALUES } from './app.const';
import { ServiceLocator } from './common/util/ServiceLocator';
import { HolidayService } from './pages/holiday/holiday.service';
import { HttpModule } from '@angular/http';
import { AppHttpInterceptor } from './common/interceptors/http.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,

    AppRoutingModule,
  ],
  providers: [
    {
      provide: APP_CONST, useValue: APP_CONST_VALUES
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptor,
      multi: true
    },
    HolidayService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {    // Create global Service Injector.
    ServiceLocator.injector = this.injector;
  }
}
