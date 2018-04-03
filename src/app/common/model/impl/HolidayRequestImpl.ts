import { HolidayRequest } from "../HolidayRequest";
import * as moment from "moment";

export class HolidayRequestImpl implements HolidayRequest {
    country: string;
    year: Number;
    month: Number;

    constructor() {
        this.country = 'US';
        this.year = 2015;
        // this.year = moment().year();
        this.month = moment().month();
    }
}