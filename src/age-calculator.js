const mercuryYear = 0.24;
const venusYear = 0.62;
const marsYear = 1.88;
const jupiterYear = 11.86;

/*eslint-disable no-unused-vars*/

export class GalacticAgeCalculator {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = 78;
  }

  mercuryAge() {
    return Math.floor(this.age / mercuryYear);
  }

  venusAge() {
    return Math.floor(this.age / venusYear);
  }

  marsAge() {
    return Math.floor(this.age / marsYear);
  }

  jupiterAge() {
    return Math.floor(this.age / jupiterYear);
  }

  mercuryLeftYears() {
    return Math.max(0, Math.floor(this.lifeExpectancy / mercuryYear - this.mercuryAge()));
  }

  venusLeftYears() {
    return Math.max(0, Math.floor(this.lifeExpectancy / venusYear - this.venusAge()));
  }

  marsLeftYears() {
    return Math.max(0, Math.floor(this.lifeExpectancy / marsYear - this.marsAge()));
  }

  jupiterLeftYears() {
    return Math.max(0, Math.floor(this.lifeExpectancy / jupiterYear - this.jupiterAge()));
  }
}
