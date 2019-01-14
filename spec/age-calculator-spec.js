import { GalacticAgeCalculator } from './../src/age-calculator.js';

describe("Galactic age calculator", function() {
  let inputOne;
  let inputTwo;
  let inputTree;

  beforeEach(function() {
    inputOne = new GalacticAgeCalculator(27);
    inputTwo = new GalacticAgeCalculator(78);
    inputTree = new GalacticAgeCalculator(90);
  });

  it("should calculate user's age in Mercury years.", function() {
    expect(inputOne.mercuryAge()).toEqual(Math.floor(inputOne.age/0.24));
  });

  it("should calculate user's age in Venus years.", function() {
    expect(inputOne.venusAge()).toEqual(Math.floor(inputOne.age/0.62));
  });

  it("should calculate user's age in Mars years.", function() {
    expect(inputOne.marsAge()).toEqual(Math.floor(inputOne.age/1.88));
  });

  it("should calculate user's age in Jupiter years.", function() {
    expect(inputOne.jupiterAge()).toEqual(Math.floor(inputOne.age/11.86));
  });

  it("should determines how many years a user has left to live on each planet based on average life expectency.", function() {
    expect(inputOne.mercuryLeftYears()).toEqual(Math.floor(78/0.24-inputOne.mercuryAge()));
    expect(inputOne.venusLeftYears()).toEqual(Math.floor(78/0.62-inputOne.venusAge()));
    expect(inputOne.marsLeftYears()).toEqual(Math.floor(78/1.88-inputOne.marsAge()));
    expect(inputOne.jupiterLeftYears()).toEqual(Math.floor(78/11.86-inputOne.jupiterAge()));
  });

  it("should return the number of years they have lived past the life expectancy on each planet", function() {
    expect(inputTree.mercuryPassedYears()).toEqual(Math.floor(inputTree.mercuryAge()-78/0.24));
    expect(inputTree.venusPassedYears()).toEqual(Math.floor(inputTree.venusAge()-78/0.62));
    expect(inputTree.marsPassedYears()).toEqual(Math.floor(inputTree.marsAge()-78/1.88));
    expect(inputTree.jupiterPassedYears()).toEqual(Math.floor(inputTree.jupiterAge()-78/11.86));


  })
});
