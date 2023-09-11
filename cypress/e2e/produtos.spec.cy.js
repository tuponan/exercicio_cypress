/// <reference types="cypress" /> 

describe('Funcionalidade página de produtos', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
  });

  it('Deve selecionar um produto da lista', () => {
    cy.get('[class="product-block grid"]')
      .first()
      .click()
  });
  
  it('Deve adicionar um produto ao carrinho', () => {
    var quantidade = 5

    cy.get('[class="product-block grid"]')
    .first()
    .click()
    cy.get('.button-variable-item-XL').click()
    cy.get('.button-variable-item-Red').click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()

    cy.get('.woocommerce-message').should('contain' , '5 × “Abominable Hoodie” foram adicionados no seu carrinho.')

  });

});