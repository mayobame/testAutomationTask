
import{Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"
const entitledPage   =  require ('../../pages/entitledPage')


Given ('I am on UKGV webpage',()=> {
    // Go to Holiday entitlement Page 
cy.visit('/');

//Assert Page Url
cy.url().should('contains','entitlement')

  
})
//Click Start 
When ('I start to calculate holiday entitlement',()=> {
cy.contains('Start now').click()



})
//Choose worked days 
And ('Select days worked per week',()=> {
cy.get('#response-0').click()
    entitledPage.clickContinue();

    


})

And ('Select how to work out my holiday',()=> {


    cy.get('#response-0').check()
    entitledPage.clickContinue();

})

//Second Scenario

And ('I entered number of days worked per week',()=> {
cy.get('#response').type(5)
entitledPage.clickContinue();

})

Then('I should see the result based on my information',()=> {
cy.get('h2').should('have.text','Information based on your answers')

})




And ('I select  starting Part way',()=> {
    cy.get('#response-0').click();
    entitledPage.clickContinue();

})

And ('entered employment start date',(datatabble)=> {
    datatabble.hashes().forEach(row => {
        cy.log(row.Day)
        cy.log(row.Month)
        cy.log(row.Year)
        entitledPage.clickContinue();
    })

    And ('I entered leave year',(datatabble)=> {
        datatabble.hashes().forEach(row => {
            cy.log(row.Day)
            cy.log(row.Month)
            cy.log(row.Year)
            entitledPage.clickContinue();
           

        })

    And ('I entered number of days worked per week',()=> {
        cy.get('#response').type(5)
        entitledPage.clickContinue();
            
            })

    Then('I should see the result based on my information',()=> {
    cy.get('h2').should('have.text','Your answers')
                
                })
            


    })

})