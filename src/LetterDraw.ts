import AxisEnum from './model/AxeEnum';
import LetterEnum from './model/LetterEnum';

interface DrawLetterPropertie {
  numberStar: number;
  ink: string;
  index?: number;
  emptyLine: string;
  endingChar: string;
}

class LetterDraw {
  public static draw = (
    letters: LetterEnum[],
    numberStar: number,
    axis: AxisEnum = AxisEnum.Horizontal,
    ink: string = '*'
  ): string => {
    const sizeEachSide: number = (numberStar - 5) / 2 + 2;
    const sizeLine: number = numberStar + sizeEachSide * 2;
    const emptyLineA: string = LetterDraw.drawHorizontalEmptyLine(sizeLine, ' ');
    const emptyLine: string = LetterDraw.drawHorizontalEmptyLine(numberStar, ' ');
    const endingChar: string = axis === AxisEnum.Horizontal ? ' ' : '\n';

    if (axis === AxisEnum.Vertical) {
      return letters
        .map((letter: LetterEnum) => {
          switch (letter) {
            case LetterEnum.A:
              return LetterDraw.drawVertically(
                { numberStar, ink, emptyLine: emptyLineA, endingChar },
                LetterDraw.drawA
              );
            case LetterEnum.E:
              return LetterDraw.drawVertically(
                { numberStar, ink, emptyLine, endingChar },
                LetterDraw.drawE
              );
            case LetterEnum.F:
              return LetterDraw.drawVertically(
                { numberStar, ink, emptyLine, endingChar },
                LetterDraw.drawF
              );
          }
        })
        .join('\n');
    }

    let draw = '';
    for (let index = 0; index < numberStar; index++) {
      draw += letters
        .map((letter: LetterEnum) => {
          switch (letter) {
            case LetterEnum.A:
              return LetterDraw.drawA({
                numberStar,
                ink,
                index,
                emptyLine: emptyLineA,
                endingChar,
              });
            case LetterEnum.E:
              return LetterDraw.drawE({ numberStar, ink, index, emptyLine, endingChar });
            case LetterEnum.F:
              return LetterDraw.drawF({ numberStar, ink, index, emptyLine, endingChar });
          }
        })
        .join('')
        .concat('\n');
    }

    return draw;
  };

  private static drawVertically = (
    propertie: DrawLetterPropertie,
    cb: (propertieCB: DrawLetterPropertie) => string
  ): string => {
    let line = '';
    for (let index = 0; index < propertie.numberStar; index++) {
      line += cb({ ...propertie, index });
    }

    return line;
  };

  private static drawA = (propertie: DrawLetterPropertie): string => {
    const { numberStar, ink, index, emptyLine, endingChar } = propertie;
    if (index === 0) {
      return LetterDraw.replaceAt(emptyLine, numberStar - 1, ink).concat(endingChar);
    } else if ((numberStar + 1) / 2 === index + 1) {
      return LetterDraw.replaceAt(
        emptyLine,
        numberStar - (index + 1),
        ink.repeat(numberStar)
      ).concat(endingChar);
    } else {
      return LetterDraw.replaceAt(
        LetterDraw.replaceAt(emptyLine, numberStar - (index + 1), ink),
        numberStar + index - 1,
        ink
      ).concat(endingChar);
    }
  };

  private static drawE = (propertie: DrawLetterPropertie): string => {
    const { numberStar, ink, index, emptyLine, endingChar } = propertie;
    if (index === 0) {
      return LetterDraw.drawHorizontalLine(numberStar, ink, endingChar);
    } else if ((numberStar + 1) / 2 === index + 1) {
      return LetterDraw.drawHorizontalLine(numberStar, ink, endingChar);
    } else if (numberStar <= index + 1) {
      return LetterDraw.drawHorizontalLine(numberStar, ink, endingChar);
    } else {
      return LetterDraw.replaceAt(emptyLine, 0, ink).concat(endingChar);
    }
  };

  private static drawF = (propertie: DrawLetterPropertie): string => {
    const { numberStar, ink, index, emptyLine, endingChar } = propertie;
    if (index === 0) {
      return LetterDraw.drawHorizontalLine(numberStar, ink, endingChar);
    } else if ((numberStar + 1) / 2 === index + 1) {
      return LetterDraw.drawHorizontalLine(numberStar, ink, endingChar);
    } else {
      return LetterDraw.replaceAt(emptyLine, 0, ink).concat(endingChar);
    }
  };

  private static drawHorizontalLine = (
    numberStar: number,
    ink: string,
    endingChar: string
  ): string => {
    return ink.repeat(numberStar).concat(endingChar);
  };

  private static drawHorizontalEmptyLine = (numberStar: number, ink: string): string => {
    return ink.repeat(numberStar);
  };

  private static replaceAt = (str: string, index: number, replacement: string = '*') => {
    return str.substring(0, index) + replacement + str.substring(index + replacement.length);
  };
}

export default LetterDraw;
