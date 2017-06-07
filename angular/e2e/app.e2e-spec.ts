import { JWTPage } from './app.po';

describe('jwt App', () => {
  let page: JWTPage;

  beforeEach(() => {
    page = new JWTPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
