# Letter printer (AEF)

Print letter AEF depending on the letter requested in the paramater and depending on size

## Stack

- Node v14.17.4
- Typescript v4.3.5
- Jest v27.0.6

## Get Started

1. `git clone` the repository to your local machine.
2. Run `npm install` to install all the dependencies.
3. Run `npm start <file> <letters> <letter-size>` to start local development server.
4. View result directly on the console
5. Run `npm test` to see the code coverage

## Usage

Usage: `npm start <file> <letters> <letter-size>`
where `<file>` is a file, one of: HorizontalLetterGenerator.ts or VerticalLetterGenerator.ts

where `<letters>` is falcultative and is one of: 'A', 'E', 'F'
default value is '{"A", "E", "F"}'
ex : node `<file>` '{"A", "F"}' `<letter-size>`

where `<letter-size>` is a number, represent letter size value
number must be odd number and minium size value is 5

You can direclty use `npm run horizontal <letters> <letter-size>` for horizontal file and `npm run vertical <letters> <letter-size>` for vertical file.
