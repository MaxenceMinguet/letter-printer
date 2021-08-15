import LetterDraw from '../src/LetterDraw';
import LetterGenerator from '../src/LetterGenerator';
import Argument from '../src/model/Argument';
import AxisEnum from '../src/model/AxeEnum';
import LetterEnum from '../src/model/LetterEnum';

describe('Test LetterDraw.ts - draw', () => {
  test('should be A E F vertically', () => {
    const letters: string = getLetters(
      { letters: [LetterEnum.A, LetterEnum.E, LetterEnum.F], letterSize: 9 },
      AxisEnum.Vertical
    );
    expect(letters).toBe(`        *        
       * *       
      *   *      
     *     *     
    *********    
   *         *   
  *           *  
 *             * 
*               *

*********
*        
*        
*        
*********
*        
*        
*        
*********

*********
*        
*        
*        
*********
*        
*        
*        
*        
`);
  });

  test('should be A F horizontally', () => {
    const letters: string = getLetters(
      { letters: [LetterEnum.A, LetterEnum.F], letterSize: 5 },
      AxisEnum.Horizontal
    );
    expect(letters).toBe(`    *     ***** 
   * *    *     
  *****   ***** 
 *     *  *     
*       * *     
`);
  });

  const getLetters = (argument: Argument, axis: AxisEnum): string => {
    const letters: string = LetterDraw.draw(argument.letters, argument.letterSize, axis);
    return letters;
  };
});
