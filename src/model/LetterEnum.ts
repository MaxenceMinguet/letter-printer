enum LetterEnum {
  A,
  E,
  F,
  UNKNOW,
}

export const toLetterEnum = (letter: string): LetterEnum => {
  switch (letter) {
    case 'A':
      return LetterEnum.A;
    case 'E':
      return LetterEnum.E;
    case 'F':
      return LetterEnum.F;
    default:
      return LetterEnum.UNKNOW;
  }
};

export default LetterEnum;
