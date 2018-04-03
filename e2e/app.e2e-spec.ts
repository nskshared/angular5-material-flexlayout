import { SurendraVisaTestPage } from './app.po';

describe('surendra-visa-test App', () => {
  let page: SurendraVisaTestPage;

  beforeEach(() => {
    page = new SurendraVisaTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
