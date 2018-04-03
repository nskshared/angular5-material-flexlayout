import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

import { HolidayDetailsComponent } from './holiday-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

const holidayDetailsRoute = [
  {
    path: '',
    component: HolidayDetailsComponent,
  }
]
@NgModule({
  declarations: [
    HolidayDetailsComponent
  ],
  imports: [ 
    RouterModule.forChild(holidayDetailsRoute),

    MatButtonModule,
    MatCardModule,
    MatListModule
  ],
  exports: [
    
  ],
  providers: [],
  bootstrap: []
})
export class HolidayDetailsModule { }
