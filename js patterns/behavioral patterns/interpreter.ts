(function () {
  class RomanCharsInterpreter {
    interpret(romanChar: string): number {
      switch (romanChar) {
        case "M":
          return 1000;
        case "D":
          return 500;
        case "C":
          return 100;
        case "L":
          return 50;
        case "X":
          return 10;
        case "I":
          return 1;
        default:
          return NaN;
      }
    }
  }

  const interpreter = new RomanCharsInterpreter();
  console.log(interpreter.interpret("C"));
  console.log(interpreter.interpret("M"));
  console.log(interpreter.interpret("X"));
})();
