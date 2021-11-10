import { FiorentTemplatePage } from './app.po';

describe('Fiorent App', function() {
  let page: FiorentTemplatePage;

  beforeEach(() => {
    page = new FiorentTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
