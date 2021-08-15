import LetterGenerator from './src/LetterGenerator';
import AxisEnum from './src/model/AxeEnum';

class HorizontalLetterGenerator {
  public static generate = (argv: string[]): string => {
    return LetterGenerator.generate(argv, AxisEnum.Horizontal);
  };
}

console.log(HorizontalLetterGenerator.generate(process.argv));

export default HorizontalLetterGenerator;
