import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { HolidayListComponent } from './holiday-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
const holidayListRoute = [
  {
    path: '',
    component: HolidayListComponent,
  }
]

@NgModule({
  declarations: [
    HolidayListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    RouterModule.forChild(holidayListRoute),

    MatListModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    HolidayListComponent
  ],
  providers: [],
  bootstrap: []
})
export class HolidayListModule { }
