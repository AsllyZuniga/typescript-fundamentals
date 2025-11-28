(() => {
  // Types
  const batman: string = "Bruce";
  const superman: string = "Clark";

  const exists: boolean = false;

  // Tuples
  const heroPair: [string, string] = [batman, superman];
  const villain: [string, number, boolean] = ["Lex Luthor", 5, true];

  // Arrays
  const allies: string[] = ["Wonder Woman", "Aquaman", "San", "Flash"];

  // Enums
  enum Strength {
    flash = 5,
    superman = 100,
    batman = 1,
    aquaman = 0,
  }

  // Function return types
  function activateBatSignal(): string {
    return "activated";
  }

  function callForHelp(): void {
    console.log("Help!!!");
  }

  // Type Assertions
  const power: any = "100";
  const powerLength: number = (power as string).length;
  console.log(powerLength);
})();
