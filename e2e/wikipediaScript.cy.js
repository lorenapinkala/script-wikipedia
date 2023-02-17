describe('Script Wikipedia', () => {

  it('entrar en la pagina web de wikipedia', () => {
    cy.visit('https://es.wikipedia.org/');
  })

  beforeEach(function(){
    cy.visit('https://es.wikipedia.org/')
  })

  it('checar si tiene el cartel de bienvenidos', ()=>{
    cy.get('div.main-top').contains('Bienvenido')
  })

  it('checar que apunte a Wikipedia:Bienvenidos',()=>{
    cy.visit("https://es.wikipedia.org/wiki/Wikipedia:Bienvenidos");
    cy.title().should('include', 'Wikipedia:Bienvenidos');
  })

  it('ingresar cypress.io',()=>{
    cy.get("#searchInput").type("cypress.io");
  })

  it('realizar la busqueda',()=>{
    cy.get("#searchInput").type("cypress.io");
    cy.get('#searchButton').click();
  })

  it('ir al primer link de busqueda',()=>{
    cy.get("#searchInput").type("cypress.io");
    cy.get('#searchButton').click();
    cy.get('[class = extiw]').eq(1).click();
  })

})
