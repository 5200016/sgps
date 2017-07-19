import { SgpsPage } from './app.po';

describe('sgps App', () => {
  let page: SgpsPage;

  beforeEach(() => {
    page = new SgpsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
