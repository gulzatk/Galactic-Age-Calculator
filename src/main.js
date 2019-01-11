import './../src/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GalacticAgeCalculator } from './../src/age-calculator.js';

$(document).ready(function() {
  $("#inputAge").submit(function() {
  event.preventDefault();

  let inputAge = parseInt($("input#age").val());

  let ageCalculator = new GalacticAgeCalculator (age);
  let mercuryAge = ageCalculator.mercuryAge();
  let venusAge = ageCalculator.venusAge();
  let marsAge = ageCalculator.marsAge();
  let jupiterAge = ageCalculator.jupiterAge();
  let leftInMercury = ageCalculator.mercuryLeftYears();
  let leftInVenus = ageCalculator.venusLeftYears();
  let leftInMars = ageCalculator.mercuryLeftYears();
  let leftInJupiter = ageCalculator.jupiterLeftYears();



  $("#mercuryAge").text("You are" + mercuryAge + "years old in Mercury.");
  $("#venusAge").text("You are" + venusAge + "years old in Venus.");
  $("#marsAge").text("You are" + marsAge + "years old in Mars.");
  $("#jupiterAge").text("You are" + jupiterAge + "years old in Jupiter.");
  $("#leftInMercury").text(" You have" + leftInMercury + "years left to live in Mercury.");
  $("#leftInVenus").text(" You have" + leftInVenus + "years left to live in Venus.");
  $("#leftInMars").text(" You have" + leftInMars + "years left to live in Mars.");
  $("#leftInJupiter").text(" You have" + leftInJupiter + "years left to live in Jupiter.");

});
});
