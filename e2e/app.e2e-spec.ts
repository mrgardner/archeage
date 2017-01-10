import { ArcheagePage } from './app.po';

describe('archeage App', function() {
  let page: ArcheagePage;

  beforeEach(() => {
    page = new ArcheagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
