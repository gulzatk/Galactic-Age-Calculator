import './../src/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GalacticAgeCalculator } from './../src/age-calculator.js';

$(document).ready(function() {
  $("#inputAge").submit(function() {
  event.preventDefault();

  let inputAge = parseInt($("input#age").val());

  let ageCalculator = new GalacticAgeCalculator(inputAge);
  let mercuryAge = ageCalculator.mercuryAge();
  let venusAge = ageCalculator.venusAge();
  let marsAge = ageCalculator.marsAge();
  let jupiterAge = ageCalculator.jupiterAge();
  let leftInMercury = ageCalculator.mercuryLeftYears();
  let leftInVenus = ageCalculator.venusLeftYears();
  let leftInMars = ageCalculator.marsLeftYears();
  let leftInJupiter = ageCalculator.jupiterLeftYears();



  $("#mercuryAge").text(`You are ${mercuryAge}  year old in Mercury.`);
  $("#venusAge").text(`You are ${venusAge} year old in Venus.`);
  $("#marsAge").text(`You are ${marsAge} year old in Mars.`);
  $("#jupiterAge").text(`You are ${jupiterAge} year old in Jupiter.`);
  $("#leftInMercury").text(`You have ${leftInMercury} years left to live in Mercury.`);
  $("#leftInVenus").text(`You have ${leftInVenus} years left to live in Venus.`);
  $("#leftInMars").text(`You have ${leftInMars} years left to live in Mars.`);
  $("#leftInJupiter").text(`You have ${leftInJupiter} years left to live in Jupiter.`);

});
});
