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
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


/* eslint-disable no-undef */
/// <reference path="./index.js/" />

Cypress.Commands.add('dataCy', (value) => cy.get(`[data-cy=${value}]`));

Cypress.Commands.add('id', (value) => cy.get(`[id=${value}]`));

Cypress.Commands.add('name', (elemento, value) => cy.get(`${elemento}[name="${value}"]`));

Cypress.Commands.add('class', (value) => cy.get(`[class="${value}"]`));

Cypress.Commands.add('href', (value) => cy.get(`a[href*="${value}"]`));

Cypress.Commands.add('dataCyType', (dataCy, type, value) => cy.dataCy(dataCy).clear().type(type).should('have.value', value !== undefined ? value : type));

Cypress.Commands.add('dataCySelect', (dataCy, select, value) => cy.dataCy(dataCy).select(select).should('have.value', value !== undefined ? value : select));



Cypress.Commands.add('sample', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.url()
        .should('include', '/commands/actions')    
    cy.get('.action-email')
    .type('fake@email.com')
    .should('have.value', 'fake@email.com')

});