import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Holiday } from '../../../common/model/Holiday';

@Component({
  selector: 'app-holiday-details',
  templateUrl: './holiday-details.component.html',
  styleUrls: ['./holiday-details.component.scss']
})
export class HolidayDetailsComponent implements OnInit {
  holiday: Holiday;
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.holiday = JSON.parse(params['holiday']) as Holiday;
    })
   }

  ngOnInit() {
  }

}
