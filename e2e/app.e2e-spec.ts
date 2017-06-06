import { ProjectBasicPage } from './app.po';

describe('project-basic App', () => {
  let page: ProjectBasicPage;

  beforeEach(() => {
    page = new ProjectBasicPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
