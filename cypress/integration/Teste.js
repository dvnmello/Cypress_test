/// <reference types="cypress" />
/// <reference path="/support/commands.js"

describe('Meu primeiro teste', function () {
    it('Teste de carrinho', function () {
        //Abrir a página
        cy.visit('http://automationpractice.com/index.php')
        //Verificação se contém a opção "Cart"
        cy.contains('cart')
        //Clicar na opção
        cy.get('[title="View my shopping cart"]').click()
        //Verificar que o Cart está vazio
        cy.get('.alert').contains('Your shopping cart is empty')
        cy.wait(2000)
        //Após aguardar 2 segundos voltar à página inicial
        cy.get('.home').click()

    });
})
