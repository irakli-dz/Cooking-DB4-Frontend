import { CousineModule } from './cousine.module';

describe('CousineModule', () => {
  let clientsModule: CousineModule;

  beforeEach(() => {
    clientsModule = new CousineModule();
  });

  it('should create an instance', () => {
    expect(CousineModule).toBeTruthy();
  });
});
