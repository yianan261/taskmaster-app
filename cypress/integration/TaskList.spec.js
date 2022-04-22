describe("renders TaskList page ", () => {
  it("renders correctly", () => {
    cy.visit("/");
  });

  it("allows tasks to be added", () => {
    cy.visit("/");
    cy.get(".task-input").clear();
    cy.get(".task-input").type("test");
    cy.get(".main-page").click();
    cy.get(".task-button").click();
  });

  it("allows tasks to be added, saved to complete chart when checked", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".task-input").clear();
    cy.get(".task-input").type("do another test");
    cy.get(".task-button").click();
    cy.get(".done-icon").click();
  });

  it("allows tasks to edited and updated", () => {
    cy.visit("/");

    cy.get(".task-input").clear();
    cy.get(".task-input").type("do a test");
    cy.get(".task-button").click();
    cy.get(".edit-icon").click();
    cy.get(":nth-child(2) > div > .task-input").clear();
    cy.get(":nth-child(2) > div > .task-input").type("do more tests");
    cy.get("#editBtn").click();
  });
});
