const mercuryYear = 0.24;
const venusYear = 0.62;
const marsYear = 1.88;
const jupiterYear = 11.86;

export class GalacticAgeCalculator {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = 78;
  }

  mercuryAge() {
    return (this.age / mercuryYear);
  }

  venusAge() {
    return (this.age / venusYear);
  }

  marsAge() {
    return (this.age / marsYear);
  }

  jupiterAge() {
    return (this.age / jupiterYear);
  }

  mercuryLeftYears() {
    return (this.lifeExpectancy / mercuryYear - this.mercuryAge);
  }

  venusLeftYears() {
    return (this.lifeExpectancy / venusYear - this.venusAge);
  }

  marsLeftYears() {
    return (this.lifeExpectancy / marsYear - this.marsAge);
  }
  
  jupiterLeftYears() {
    return (this.lifeExpectancy / jupiterYear - this.jupiterAge);
  }
}
