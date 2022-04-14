class entitledPage{


    elements = {
            continue :()=> cy.contains('Continue')
    }

    clickContinue(){
    this.elements.continue().click();
    }

}
module.exports= new entitledPage();