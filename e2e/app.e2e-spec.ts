import { Angular2DebounceExamplesPage } from './app.po';

describe('angular2-debounce-examples App', () => {
  let page: Angular2DebounceExamplesPage;

  beforeEach(() => {
    page = new Angular2DebounceExamplesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
