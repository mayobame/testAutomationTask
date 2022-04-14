
import{Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"
const entitledPage   =  require ('../../pages/entitledPage')


Given ('I am on UKGV webpage',()=> {
cy.visit('/');
cy.clearCookies()
cy.url().should('contains','entitlement')
cy.contains('Start now').click()
  
})

When ('I start to calculate holiday entitlement',()=> {
cy.get('#response-0').click()
cy.contains('Continue').click()
entitledPage.clickContinue();


})

And ('Select days worked per week',()=> {
    cy.get('input[type="radio"]').check
    entitledPage.clickContinue();


})

And ('Select how to work out my holiday',()=> {
    cy.get('#response-0').check()
    entitledPage.clickContinue();

})

And ('I entered number of days worked per week',()=> {
cy.get('#response').type(5)
entitledPage.clickContinue();

})

Then('I should see the result based on my information',()=> {
// cy.get('h2').then(($test)=> {
//     expect($test.text()).contain('Your answersdddsdsd')
cy.get('h2').should('have.text','mum')

})




