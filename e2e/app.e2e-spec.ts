import { CiudadanoDigitalV2Page } from './app.po';

describe('ciudadano-digital-v2 App', () => {
  let page: CiudadanoDigitalV2Page;

  beforeEach(() => {
    page = new CiudadanoDigitalV2Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
