import { Ng4FireAppPage } from './app.po';

describe('ng4-fire-app App', () => {
  let page: Ng4FireAppPage;

  beforeEach(() => {
    page = new Ng4FireAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
