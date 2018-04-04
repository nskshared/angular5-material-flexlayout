import { browser, by, element } from 'protractor';

export class SurendraVisaTestPage {
  navigateTo() {
    return browser.get('/');
  }

  navigateToHolidayList() {
    return browser.get('/list');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
