import Argument from './model/Argument';
import AxisEnum from './model/AxeEnum';
import LetterDraw from './LetterDraw';
import ArgumentParsing from './ArgumentParsing';

class LetterGenerator {
  public static generate = (argv: string[], axis: AxisEnum): string => {
    const argumentParsing: ArgumentParsing = new ArgumentParsing(argv);

    if (argumentParsing.isValidArgument()) {
      const argument: Argument = argumentParsing.getArgument();
      const letters: string = LetterDraw.draw(argument.letters, argument.letterSize, axis);
      return letters;
    }

    return null;
  };
}

export default LetterGenerator;
