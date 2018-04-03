import { InjectionToken } from "@angular/core";

// export enum URLs {
//     HOLIDAY_BASE_URL = 'https://holidayapi.com/v1/holidays'
// }

interface AppConfig {
    HOLIDAY_BASE_URL: string,
    HOLIDAY_API_KEY: string,

}

const appConfig: AppConfig = {
    HOLIDAY_BASE_URL: 'https://holidayapi.com/v1/holidays',
    HOLIDAY_API_KEY: 'b7276b43-3a98-4368-a550-d508c9192de7',

}

export class AppConst {
    appConfig: AppConfig
}

export const APP_CONST_VALUES: AppConst = {
    appConfig
}

export let APP_CONST = new InjectionToken<AppConst>('app.const');
