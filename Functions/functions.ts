// Basic Functions
function sum(a: number, b: number): number {
  return a + b;
}

const countHeroes = (heroes: string[]): number => {
  return heroes.length;
};

const superHeroes: string[] = ["Flash", "Arrow", "Superman", "Green Lantern"];
countHeroes(superHeroes);

// Default parameters
const callBatman = (call: boolean = false): void => {
  if (call) {
    console.log("Bat signal activated");
  }
};

callBatman();

// Rest parameters
const joinHeroes = (...people: string[]): string => {
  return people.join(", ");
};
//

// Function type
type DoNothingType = (
  number: number,
  text: string,
  bool: boolean,
  array: any[]
) => void;

const doNothing: DoNothingType = (number, text, bool, array) => {};

let doNothingEither: DoNothingType;

doNothingEither = doNothing;
