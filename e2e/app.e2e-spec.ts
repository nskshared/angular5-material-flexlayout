import { browser, by, element } from 'protractor';
import { SurendraVisaTestPage } from './app.po';

describe('surendra-visa-test App', () => {
  let page: SurendraVisaTestPage;

  beforeEach(() => {
    page = new SurendraVisaTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to Surendra Visa test!');
  });

  it('should get holiday list', () => {
    page.navigateToHolidayList();
    browser.waitForAngular();
    browser.wait(function(){
      return element(by.cssContainingText('[id="Palm Sunday"]', 'Palm Sunday'));
    }, 5000);
    
    expect(element(by.cssContainingText('[id="Palm Sunday"]', 'Palm Sunday')).isPresent()).toBe(true);
  });

  it('should be able to navigate to holiday details', () => {
    page.navigateToHolidayList();
    browser.waitForAngular();
    browser.wait(function(){
      return element(by.cssContainingText('[id="Palm Sunday"]', 'Palm Sunday'));
    }, 5000);
    
    element(by.cssContainingText('[id="Palm Sunday"]', 'Palm Sunday')).click();
    expect(element(by.css('[id="holiday-observed-date"]')).isPresent()).toBe(true);
    expect(element(by.css('[id="holiday-observed-date"]')).getText()).toEqual('ObservedOn : 2015-03-29');
  });

  it('should go back to holiday list', () => {
    page.navigateToHolidayList();
    browser.waitForAngular();
    browser.wait(function(){
      return element(by.cssContainingText('[id="Palm Sunday"]', 'Palm Sunday'));
    }, 5000);
    
    element(by.cssContainingText('[id="Palm Sunday"]', 'Palm Sunday')).click();
    element(by.css('[id="back-to-list"]')).click();
    expect(element(by.css('[id="St. Patrick\'s Day"]')).isPresent()).toBe(true);
  });
});
