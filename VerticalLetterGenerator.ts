import LetterGenerator from './src/LetterGenerator';
import AxisEnum from './src/model/AxeEnum';

class VerticalLetterGenerator {
  public static generate = (argv: string[]): string => {
    return LetterGenerator.generate(argv, AxisEnum.Vertical);
  };
}

console.log(VerticalLetterGenerator.generate(process.argv));

export default VerticalLetterGenerator;
