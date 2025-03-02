import { main } from './';

describe('main', () => {
  it('should have a primary entry function', async () => {
    expect(typeof main).toBe('function');
  });
});
