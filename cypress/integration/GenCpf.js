/// <reference types="cypress" />
/// <reference path="/support/commands.js"

describe('Meu teste', function () {
    it('Teste de carrinho', function () {
            
        //Acesso à página
        cy.visit('https://www.geradordecpf.org/')
        //Verificando se a página contem o texto 'Gerador de CPF'
        cy.get('body > :nth-child(3) > :nth-child(1)').contains('gerador de cpf')
        //Verificar se existe o campo de número
        cy.get('#numero')
        //Seleciona a opção de gerar CPF com os números e traço
        cy.get('#cbPontos').click()
        //Gera um CPF
        cy.get('#btn-gerar-cpf').click()
        //Verifica se existe o Button para validar o CPF gerado
        cy.get('.text-right > .btn').should('have.value','Validar CPF')
        //Clica na opção para validar o CPF gerado
        cy.get('.text-right > .btn').click()
        //Verifica o signal de CPF validado
        cy.get('#checkSign').should('be.visible')
                       
        })
    })

