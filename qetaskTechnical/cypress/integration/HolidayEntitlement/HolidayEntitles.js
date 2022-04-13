
import{Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"
import { Assertion } from "chai";

Given ('I am on UKGV webpage',()=> {
cy.visit('https://www.gov.uk/calculate-your-holiday-entitlement');
cy.clearCookies()
//cy.url().should('contain','entitlement')
cy.contains('Start now').click()
  
})

When ('I start to calculate holiday entitlement',()=> {
cy.get('#response-0').click()
cy.contains('Continue').click()



})

And ('Select days worked per week',()=> {
    cy.get('input[type="radio"]').check
    cy.contains('Continue').click()


})

And ('Select how to work out my holiday',()=> {
    cy.get('#response-0').check()
    cy.contains('Continue').click()

})

And ('I entered number of days worked per week',()=> {
cy.get('#response').type(5)
cy.contains('Continue').click()

})

Then('I should see the result based on my information',()=> {
cy.get('h2').then(($test)=> {
    expect($test.text()).contain('Your answers')

})

})


