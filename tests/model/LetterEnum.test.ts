import LetterEnum, { toLetterEnum } from '../../src/model/LetterEnum';

describe('Test LetterEnum.ts - toLetterEnum', () => {
  test('should be A', () => {
    expect(toLetterEnum('A')).toBe(LetterEnum.A);
  });

  test('should be E', () => {
    expect(toLetterEnum('E')).toBe(LetterEnum.E);
  });

  test('should be F', () => {
    expect(toLetterEnum('F')).toBe(LetterEnum.F);
  });

  test('should be UNKNOW', () => {
    expect(toLetterEnum('G')).toBe(LetterEnum.UNKNOW);
  });
});
