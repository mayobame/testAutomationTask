Feature: Check Holiday Entilement 

As a user 
i want to check my holiday entitlement 
So that I can plan my annual leave 

Background: 
Given I am on UKGV webpage
When I start to calculate holiday entitlement 

Scenario: Check annual leave based on days worked per week 
And Select days worked per week 
And Select how to work out my holiday 
And I entered number of days worked per week
Then I should see the result based on my information 


# Scenario:  Check annual leave based on hours  worked per week 
# And   Select hours  worked  per week 
# And Select how to work out my holiday 
# And I entered number of days worked per week
# Then I should see the result base on my information


# Scenario:  Check annual leave based on casul or irregular hours 
# And   Select hours irregular hours  
# And Select how to work out my holiday 
# And I entered number of days worked per week
# Then I should see the result base on my information