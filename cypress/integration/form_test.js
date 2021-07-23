describe("Pizza App /home", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  //Helper Functions
  const nameInput = () => cy.get('input[name="username"]');
  const orderNav = () => cy.get('button[id="order-now"]');
  const checkBox = () => cy.get('[type="checkbox"]').check();
  const emailInput = () => cy.get('input[name="email"]');
  const specialInstructionsInput = () =>
    cy.get('input[name="specialInstructions"]');
  const addToOrderButton = () => cy.get('button[id="add-to-order"]');
  const orderNowButton = () => cy.get('button[name="order-button"]');
  const dropDownMenu = () => cy.get("select");
  // .select('small')

  it("Testing true is true", function () {
    expect(true).to.equal(true);
  });
  it("can navigate to the order page", () => {
    orderNav().click();
  });
  it("order now button links to order form", () => {
    orderNowButton().click();
  });

  describe("Pizza App /pizza", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/pizza");
    });
    it("can type inside the name input", () => {
      nameInput()
        .should("have.value", "")
        .type("Test Name")
        .should("have.value", "Test Name");
    });
    it("can type inside email input", () => {
      emailInput()
        .should("have.value", "")
        .type("test@test.com")
        .should("have.value", "test@test.com");
    });
    it("can select a drop down menu option", () => {
      dropDownMenu().select("small");
    });
    it("can select multiple toppings", () => {
      checkBox();
    });
    it("can type inside the special instructions input", () => {
      specialInstructionsInput()
        .should("have.value", "")
        .type("Test None")
        .should("have.value", "Test None");
    });
    it("submit button enables when form is filled out", () => {
      addToOrderButton().should("be.enabled");
    });
  });
});
