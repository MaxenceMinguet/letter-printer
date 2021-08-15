import Argument from './model/Argument';
import LetterEnum, { toLetterEnum } from './model/LetterEnum';

class ArgumentParsing {
  private static filenameHorizontal = 'HorizontalLetterGenerator.ts';
  private static filenameVertical = 'VerticalLetterGenerator.ts';
  private numberArg: number;
  private argv: string[];
  private lettersEnum: LetterEnum[] = [];

  constructor(argv: string[]) {
    // Remove 1 element, node exec
    this.numberArg = argv.length - 1;
    this.argv = argv.splice(1);
  }

  public isValidArgument = (): boolean => {
    if (this.numberArg <= 1) {
      console.log(`${this.noArgsError()}\n${this.getHelp()}`);
      return false;
    } else if (this.numberArg >= 4) {
      console.log(`${this.tooMuchArgsError()}\n${this.getHelp()}`);
      return false;
    } else if (!this.filenameExist(this.argv[0])) {
      console.log(`${this.filenameNotExistError(this.argv[0])}\n${this.getHelp()}`);
      return false;
    } else if (this.numberArg === 3 && !this.letterExist(this.argv[1])) {
      console.log(`\n${this.getHelp()}`);
      return false;
    } else if (!this.letterSizeExist(this.argv[this.numberArg - 1])) {
      console.log(`\n${this.getHelp()}`);
      return false;
    }
    return true;
  };

  public getArgument = (): Argument => {
    if (this.lettersEnum.length <= 0) {
      this.lettersEnum.push(LetterEnum.A);
      this.lettersEnum.push(LetterEnum.E);
      this.lettersEnum.push(LetterEnum.F);
    }
    return {
      letters: this.lettersEnum,
      letterSize: +this.argv[this.numberArg - 1],
    };
  };

  private filenameExist = (filename: string): boolean => {
    if (
      filename.indexOf(ArgumentParsing.filenameHorizontal) !== -1 ||
      filename.indexOf(ArgumentParsing.filenameVertical) !== -1
    ) {
      return true;
    }
    return false;
  };

  private letterExist = (letterObj: string): boolean => {
    let newLetterObj = letterObj.replace('{', '[');
    newLetterObj = newLetterObj.replace('}', ']');
    newLetterObj = newLetterObj.replace(/([a-zA-Z]+)/g, '"$1"');
    try {
      const letters: string[] = JSON.parse(newLetterObj);
      if (letters && letters.length > 0) {
        let isValid = true;
        letters.forEach((letter) => {
          if (letter !== 'A' && letter !== 'F' && letter !== 'E') {
            isValid = false;
          } else {
            this.lettersEnum.push(toLetterEnum(letter));
          }
        });
        if (!isValid) {
          console.log(`<letter> ${letterObj}: Unknow letter, use only 'A', 'E', 'F'`);
        }
        return isValid;
      }
      console.log(`<letter> ${letterObj}: Empty object`);
      return false;
    } catch (e) {
      console.log(`<letter> ${letterObj}: invalid format`);
      return false;
    }
  };

  private letterSizeExist = (letterSize: string): boolean => {
    try {
      const size: number = +letterSize;
      if (size) {
        if (size < 5) {
          console.log(`<letter-size> ${letterSize}: letter-size value must be minimum 5`);
          return false;
        }
        if (size % 2 === 0) {
          console.log(`<letter-size> ${letterSize}: letter-size must be a odd number`);
          return false;
        }
        return true;
      }
      console.log(`<letter-size> ${letterSize}: letter-size must be a number`);
      return false;
    } catch (e) {
      console.log(`<letter-size> ${letterSize}: letter-size must be a number`);
      return false;
    }
  };

  private getHelp = (): string => {
    return `
    Usage: node <file> <letters> <letter-size>
    where <file> is a file, one of: HorizontalLetterGenerator.ts or VerticalLetterGenerator.ts

    where <letters> is falcultative and is one of: 'A', 'E', 'F'
    default value is '{"A", "E", "F"}'
    ex : node <file> '{"A", "F"}' <letter-size>

    where <letter-size> is a number, represent letter size value
    number must be odd number and minium size value is 5
    `;
  };

  private noArgsError = (): string => {
    return `
    You must pass 2-3 arguments`;
  };

  private tooMuchArgsError = (): string => {
    return `
    You must pass only 2-3 arguments`;
  };

  private filenameNotExistError = (filename: string): string => {
    return `
    The file ${filename} is not valid`;
  };
}

export default ArgumentParsing;
