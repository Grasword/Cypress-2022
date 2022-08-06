describe("Newsletter Subscribe Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
    cy.wait(1000)
  })

  it("allows users to subscribe to the email list", () => {
    cy.getByData("email-input").type("hello@there")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("exist").contains("hello@there")
  })

  it("does NOT allow an invalid email address", () => {
    cy.getByData("email-input").type("General_Kenobi")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("not.exist")
  })

  it("does NOT allow already taken email address", () => {
    cy.getByData("email-input").type("john@example.com")
    cy.getByData("submit-button").click()
    cy.getByData("server-error-message")
      .should("exist")
      .contains(
        "Error: john@example.com already exists. Please use a different email address."
      )
  })
})
