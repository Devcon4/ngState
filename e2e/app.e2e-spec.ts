import { NgStatePage } from './app.po';

describe('ng-state App', () => {
  let page: NgStatePage;

  beforeEach(() => {
    page = new NgStatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
