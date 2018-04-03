import { HolidayResponse } from "../HolidayResponse";
import { Holiday } from "../Holiday";

export class HolidayResponseImpl implements HolidayResponse {
    status: number;
    holidays: Holiday[]
}