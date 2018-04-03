import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HolidayDetailsComponent } from './holiday-details/holiday-details.component';
import { RouterModule } from '@angular/router';
import { HolidayComponent } from './holiday.component';
import { HolidayService } from './holiday.service';

const holidayRoute = [
  {
    path: '',
    component: HolidayComponent,
    children: [
      {
        path: '', redirectTo: 'list', pathMatch: 'full',
      },
      {
        path: 'list',  loadChildren: './holiday-list/holiday-list.module#HolidayListModule'
      },
      {
        path: 'details',  loadChildren: './holiday-details/holiday-details.module#HolidayDetailsModule'
      },
    ]
  },
]

@NgModule({
  declarations: [
    HolidayComponent
  ],
  imports: [ 
    RouterModule.forChild(holidayRoute),

    FlexLayoutModule
  ],
  providers: [
    
  ],
  bootstrap: []
})
export class HolidayModule { }
