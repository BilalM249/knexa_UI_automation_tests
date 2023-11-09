// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
Cypress.Commands.add('generateRandomNumber', () => {
    const min = 1000000000; // 10-digit minimum number
    const max = 9999999999; // 10-digit maximum number
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber.toString(); // Convert the number to a string
  });