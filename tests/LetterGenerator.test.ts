import LetterGenerator from '../src/LetterGenerator';
import AxisEnum from '../src/model/AxeEnum';

describe('Test LetterGenerator.ts - isValidArgument', () => {
  test('should print A E F vertically', () => {
    expect(
      LetterGenerator.generate(
        ['ts-node', `VerticalLetterGenerator.ts`, '{A, E, F}', '9'],
        AxisEnum.Vertical
      )
    ).toBe(`        *        
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

  test('should print A F horizontally', () => {
    expect(
      LetterGenerator.generate(
        ['ts-node', `HorizontalLetterGenerator.ts`, '{A, E, F}', '5'],
        AxisEnum.Horizontal
      )
    ).toBe(`    *     ***** ***** 
   * *    *     *     
  *****   ***** ***** 
 *     *  *     *     
*       * ***** *     
`);
  });

  test('should print an error', () => {
    expect(
      LetterGenerator.generate(['VerticalLetterGenerator.ts', '{}', '9'], AxisEnum.Horizontal)
    ).toBe(null);
  });
});
