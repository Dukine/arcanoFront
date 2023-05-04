/// <reference types="cypress" />

describe("User's history app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Shows the main element", () => {
    cy.get("main section").should("have.length.at.least", 1);
  });

  it("Shows Jonh Doe", () => {
    cy.get(".section--user > :nth-child(1)").contains(/nome/i);
    cy.get(".section--user > :nth-child(2)").contains(/email/i);
  });

  it("Shows Jonh Doe history", () => {
    cy.get(".section--history ul").should("have.length.at.least", 2);
  });

  it("Verify Jonh Doe first cart", () => {
    cy.get(":nth-child(1) > .cart--info")
      .contains(/ver mais/i)
      .click();
    cy.get(".cart--itens > :nth-child(1)").contains(/valor:/i);
    cy.get(".cart--itens > :nth-child(1)").contains(/qntd/i);
  });
});
