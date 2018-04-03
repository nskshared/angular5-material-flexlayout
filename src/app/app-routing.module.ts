import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HolidayListComponent } from './pages/holiday/holiday-list/holiday-list.component';
import { HolidayComponent } from './pages/holiday/holiday.component';

export const appRoutes = [
  {
    path: '',
    loadChildren: './pages/holiday/holiday.module#HolidayModule'
  },
]

@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes, { enableTracing: false })
  ],
  declarations:[],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule {
}
