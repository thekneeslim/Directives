import { ClassSessionDirectivesPage } from './app.po';

describe('class-session-directives App', function() {
  let page: ClassSessionDirectivesPage;

  beforeEach(() => {
    page = new ClassSessionDirectivesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
