import { AppConst, APP_CONST } from "../../app.const";
import { ServiceLocator } from "../../common/util/ServiceLocator";
import { HolidayService } from "./holiday.service";


export abstract class HolidayBaseComponent {
    protected appConst: AppConst;
    protected holidayService: HolidayService
    
    constructor() {
        this.appConst = ServiceLocator.injector.get(APP_CONST);
        this.holidayService = ServiceLocator.injector.get(HolidayService);
    }
}