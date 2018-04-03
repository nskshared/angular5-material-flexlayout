import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { HolidayListComponent } from './pages/holiday/holiday-list/holiday-list.component';
import { AppRoutingModule } from './app-routing.module';
import { APP_CONST, APP_CONST_VALUES } from './app.const';
import { ServiceLocator } from './common/util/ServiceLocator';
import { HolidayService } from './pages/holiday/holiday.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,

    AppRoutingModule,
  ],
  providers: [
    {
      provide: APP_CONST, useValue: APP_CONST_VALUES
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
