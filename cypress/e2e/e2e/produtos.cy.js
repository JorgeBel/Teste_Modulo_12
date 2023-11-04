/// <reference types="cypress"/>

describe('Funcionalidade páginas de produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
            .contains("Caesar Warm-Up Pant")
            .click()
    });

    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 3

        cy.get('[class="product-block grid"]')
            .contains("Bruno Compete Hoodie").click()
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Black').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()


        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade+' × “Beaumont Summit Kit” foram adicionados no seu carrinho.')

    });

    it('Deve adicionar produtos ao carrinho - Usando Comando customizado', () => {
        cy.addProdutos('Geo Insulated Jogging Pant', '33', 'Blue', 3)
    });

    it('Deve adicionar produtos ao carrinho - Usando Comando customizado', () => {
        cy.addProdutos('Beaumont Summit Kit', 'S', 'Red', 3)
    });

});

