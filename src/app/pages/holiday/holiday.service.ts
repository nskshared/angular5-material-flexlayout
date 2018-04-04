import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import { Injectable } from "@angular/core";
import { Request, RequestOptions, Response, Headers, RequestMethod } from '@angular/http';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { AppConst, APP_CONST } from "../../app.const";
import { HolidayRequestImpl } from "../../common/model/impl/HolidayRequestImpl";
import { HolidayResponse } from "../../common/model/HolidayResponse";
import { HolidayResponseImpl } from "../../common/model/impl/HolidayResponseImpl";
import { ServiceLocator } from "../../common/util/ServiceLocator";

@Injectable()
export class HolidayService {
    private trendItems: Observable<string[]>;
    headers: Headers;
    appConst: AppConst;
    http: HttpClient;

    constructor() {
        this.appConst = ServiceLocator.injector.get(APP_CONST);
        this.http = ServiceLocator.injector.get(HttpClient);
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    getHolidayList(holidayRequest?): Observable<HolidayResponse> {
        if (!holidayRequest) {
            holidayRequest = new HolidayRequestImpl();
        }
        // const requestOptions = new RequestOptions({
        //     method: 'GET',
        //     url: this.appConst.appConfig.HOLIDAY_BASE_URL + '?key=' + this.appConst.appConfig.HOLIDAY_API_KEY + this.getHolidayQueryString(holidayRequest),
        //     headers: this.headers
        // });

        return Observable.create(observer => {
            this.http.get(this.appConst.appConfig.HOLIDAY_BASE_URL + '?key=' + this.appConst.appConfig.HOLIDAY_API_KEY + this.getHolidayQueryString(holidayRequest),)
                .map(this.extractHolidayResponseData)
                .subscribe((data) => {
                    observer.next(data);
                    observer.complete();
                });
        });
    }

    getHolidayQueryString(holidayRequest) {
        let qs = '';
        if (holidayRequest && holidayRequest.country) {
            qs += '&country=' +  holidayRequest.country;
        }
        if (holidayRequest && holidayRequest.year) {
            qs += '&year=' +  holidayRequest.year;
        }
        if (holidayRequest && holidayRequest.month) {
            qs += '&month=' +  holidayRequest.month;
        }
        return qs;
    }

    private extractHolidayResponseData(res: HttpResponse<HolidayResponse>) {
        if (res) {
            return res;
        } else {
            return new HolidayResponseImpl();
        }
    }
}
