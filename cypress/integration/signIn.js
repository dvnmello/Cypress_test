/// <reference types="cypress" />
/// <reference path="/support/commands.js"

describe('Meu Teste', function () {
    it('Teste de sign in', function () {
        //Acesso à página com click na opção de Sign In
        cy.visit('http://automationpractice.com/index.php')
        cy.contains('Sign in').click()
        //Verificação da página
        cy.get('#login_form > .form_content > :nth-child(1)').contains('Email address')
        //Preenchimento dos dados e envio pelo button
        cy.get('#email').type('d@d.com.br').should('have.value', 'd@d.com.br')
        cy.get('#passwd').type('abcd1234')
        cy.get('#SubmitLogin > span').click()
        
        //É esperado que ocorra o erro sendo assim é feito o check de erro
        cy.get('ol > li')
    });
})