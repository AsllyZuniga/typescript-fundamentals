// Basic Functions
function add(a: number, b: number): number {
  return a + b;
}

// Counting heroes
const countHeroes = (heroes: string[]): number => {
  return heroes.length;
};

const superHeroes: string[] = ["Flash", "Arrow", "Superman", "Green Lantern"];
countHeroes(superHeroes);

// Default parameters
const callBatman = (call: boolean = false): void => {
  if (call) {
    console.log("Bat-signal activated");
  }
};

callBatman();

// Join heroes
const joinHeroes = (people: string[]): string => {
  return people.join(", ");
};

// Function type example
const doNothing = (
  numberValue: number,
  text: string,
  bool: boolean,
  array: unknown[]
): void => {};

// Create a function type that matches "doNothing"
type DoNothingType = (
  numberValue: number,
  text: string,
  bool: boolean,
  array: unknown[]
) => void;

let alsoDoesNothing: DoNothingType;
alsoDoesNothing = doNothing;
