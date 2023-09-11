/// <reference types="cypress" /> 


context('Funcionalidade login', () =>{

  beforeEach (() => {
  cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
  });

 afterEach (() => {
  cy.screenshot()
  });

  it('Deve fazer login com sucesso' , () =>{
     cy.get('#username').type('qa@teste.com')
     cy.get('#password').type('teste@teste123')
     cy.get('.woocommerce-form > .button').click()
   
     cy.get('.page-title').should('contain' , 'Minha conta')
    
  })

  it('Deve exibir uma mensagem de erro ao inserir usuario invalido' , () =>{
    cy.get('#username').type('qa@teste.comm')
    cy.get('#password').type('teste@teste123')
    cy.get('.woocommerce-form > .button').click()
      
    cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido')
  })

  it('Deve exibir uma mensagem de erro ao inserir senha invalido' , () =>{
    cy.get('#username').type('qa@teste.com')
    cy.get('#password').type('teste@teste12')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain' , 'Erro: a senha fornecida para o e-mai')
  })    
})