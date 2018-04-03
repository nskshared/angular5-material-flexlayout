import { Component, OnInit } from '@angular/core';
import { HolidayBaseComponent } from '../holiday-base.component';
import { HolidayResponse } from '../../../common/model/HolidayResponse';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-holiday-list',
  templateUrl: './holiday-list.component.html',
  styleUrls: ['./holiday-list.component.scss']
})
export class HolidayListComponent extends HolidayBaseComponent implements OnInit {
  holidayList: HolidayResponse;

  constructor( private route: Router) {super() }

  ngOnInit() {
    this.holidayService.getHolidayList().subscribe(holidayList => {
      this.holidayList = holidayList;
    });
  }

  onClickHoliday(holidayIndex) {
    // if ( this.holidayList &&  this.holidayList.holidays) {}
    const holiday = JSON.stringify(this.holidayList.holidays[holidayIndex]);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        holiday : holiday
      }
    };
    this.route.navigate(['details'], navigationExtras);
  }

}
