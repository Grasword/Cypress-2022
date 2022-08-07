/// <reference types="cypress-xpath" />

describe("Main page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
    cy.wait(1000)
  })

  context("Hero Section", () => {
    it("The h1 contains the correct text", () => {
      cy.get('[data-test="hero-heading"] > .block')
        .should("exist")
        .contains("Testing Next.js Applications with Cypress")
    })

    it("The features on the home page are correct", () => {
      cy.get("dt").eq(0).contains("4 Courses")
      cy.get("dt").eq(1).contains("25+ Lessons")
      cy.get("dt").eq(2).contains("Free and Open Source")
    })
  })

  context("Course section", () => {
    it("Testing Your First Next.js Application", () => {
      // cy.xpath(`.//div[@data-test="course-0"]//a`).should("exist")
      cy.getByData("course-0").find("a").contains("Get started").click()
      cy.location("pathname").should("eq", "/testing-your-first-application")
    })

    it("Testing Foundations", () => {
      cy.getByData("course-1").find("a").contains("Get started").click()
      cy.location("pathname").should("eq", "/testing-foundations")
    })

    it("Cypress Fundamentals", () => {
      cy.getByData("course-2").find("a").contains("Get started").click()
      cy.location("pathname").should("eq", "/cypress-fundamentals")
    })
  })
})
