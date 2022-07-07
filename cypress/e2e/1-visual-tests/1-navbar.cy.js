/// <reference types="cypress" />

describe("open portfolio page", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("https://luboweb-portfolio.netlify.app/");
  });

  it("check main logo", () => {
    cy.get("body > nav > div > div.logo > a > img");
  });

  it("check navbar links", () => {
    const labels = [
      "Domov",
      "O mne",
      "Služby",
      "Znalosti",
      "Môj tím",
      "Kontakt",
    ];

    cy.get("ul li").each((item, index, list) => {
      // Returns the elements from the cy.get command
      expect(list).to.have.length(6);

      // Returns the current element from the loop
      expect(Cypress.$(item).text()).to.eq(labels[index]);
    });
  });
});
