import ArgumentParsing from '../src/ArgumentParsing';
import Argument from '../src/model/Argument';
import LetterEnum from '../src/model/LetterEnum';

describe('Test ArgumentParsing.ts - isValidArgument', () => {
  test('should be true', () => {
    expect(isValid(['ts-node', `VerticalLetterGenerator.ts`, '{A, F, E}', '9'])).toBeTruthy();
  });

  test('should be true', () => {
    expect(isValid(['ts-node', `HorizontalLetterGenerator.ts`, `{A}`, '5'])).toBeTruthy();
  });

  test('should be true', () => {
    expect(isValid(['ts-node', `VerticalLetterGenerator.ts`, '15'])).toBeTruthy();
  });

  test('should be false', () => {
    expect(isValid(['ts-node', `TEST.ts`, `{A, F, E}`, '9'])).toBeFalsy();
  });

  test('should be false', () => {
    expect(isValid(['ts-node', `HorizontalLetterGenerator.ts`, `{A, G}`, '5'])).toBeFalsy();
  });

  test('should be false', () => {
    expect(isValid(['ts-node', `VerticalLetterGenerator.ts`, '2'])).toBeFalsy();
  });

  test('should be false', () => {
    expect(isValid(['ts-node', `VerticalLetterGenerator.ts`])).toBeFalsy();
  });

  test('should be false', () => {
    expect(isValid(['ts-node', `HorizontalLetterGenerator.ts`, `{A, G}`, '5', '6'])).toBeFalsy();
  });

  test('should be false', () => {
    expect(isValid(['ts-node', `VerticalLetterGenerator.ts`, '16'])).toBeFalsy();
  });

  test('should be false', () => {
    expect(isValid(['ts-node', `HorizontalLetterGenerator.ts`, `{}`, '5'])).toBeFalsy();
  });

  test('should be false', () => {
    expect(isValid(['ts-node', `HorizontalLetterGenerator.ts`, `e-ddd`, '5'])).toBeFalsy();
  });

  test('should be false', () => {
    expect(isValid(['ts-node', `HorizontalLetterGenerator.ts`, `{A, G}`, 'yryeye'])).toBeFalsy();
  });

  const isValid = (argv: string[]): boolean => {
    const argumentParsing: ArgumentParsing = new ArgumentParsing(argv);
    return argumentParsing.isValidArgument();
  };
});

describe('Test ArgumentParsing.ts - getArgument', () => {
  test('should be true', () => {
    const args: Argument = getArgument(['ts-node', `HorizontalLetterGenerator.ts`, '{A}', '5']);
    const argResult: Argument = {
      letters: [LetterEnum.A],
      letterSize: 5,
    };
    expect(args.toString()).toBe(argResult.toString());
  });

  test('should be true', () => {
    const args: Argument = getArgument(['ts-node', `VerticalLetterGenerator.ts`, '{A, F, E}', '9']);
    const argResult: Argument = {
      letters: [LetterEnum.A, LetterEnum.F, LetterEnum.E],
      letterSize: 9,
    };
    expect(args.toString()).toBe(argResult.toString());
  });

  test('should be true', () => {
    const args: Argument = getArgument(['ts-node', `VerticalLetterGenerator.ts`, '15']);
    const argResult: Argument = {
      letters: [LetterEnum.A, LetterEnum.E, LetterEnum.F],
      letterSize: 15,
    };
    expect(args.toString()).toBe(argResult.toString());
  });

  const getArgument = (argv: string[]): Argument => {
    const argumentParsing: ArgumentParsing = new ArgumentParsing(argv);
    if (argumentParsing.isValidArgument()) {
      return argumentParsing.getArgument();
    }
    return null;
  };
});
