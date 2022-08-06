describe("Main page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("The h1 contains the correct text", () => {
    cy.get('[data-test="hero-heading"] > .block')
      .should("exist")
      .contains("Testing Next.js Applications with Cypress")
  })

  it("The features on the home page are correct", () => {
    cy.get("dt").eq(0).contains("4 Courses")
  })
})
