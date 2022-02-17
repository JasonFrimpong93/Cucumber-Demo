const assert = require("assert");
const { Given, When, Then } = require("cucumber");
let app = require("../../../Source/app");

Given("today is {string}", function (givenDay) {
  this.today = givenDay;
});

When("I ask whether it's Friday yet", function () {
  this.actualAnswer = app.isItFriday(this.today);
});

Then("I should be told {string}", function (expectedAnswer) {
  assert.equal(this.actualAnswer, expectedAnswer);
});

When("I ask wheter it's Friday yet", function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});
