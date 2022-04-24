describe("renders Tracker page ", () => {
  it("renders correctly", () => {
    cy.visit("/Tracker");
  });

  it("allows search by keyword and gets results", () => {
    cy.visit("/Tracker");
    cy.get(":nth-child(2) > .nav-link").click({ force: true });
    cy.get(".input-group > .form-control").clear({ force: true });
    cy.get(".input-group > .form-control").type("test");
    cy.get("#search-addon > .search-icon > path").click({ force: true });
  });

  it("allows search by date and gets results", () => {
    cy.visit("/Tracker");

    cy.get(":nth-child(2) > .nav-link").click({ force: true });
    cy.get("#example").click({ force: true });
    cy.get(".button > .btn").click({ force: true });
  });
});
