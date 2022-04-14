Feature: Check Holiday entitlement 

As a user 
i want to check my holiday entitlement 
So that I can plan my annual leave 

Background: 
Given I am on UKGV webpage
When I start to calculate holiday entitlement 
And Select days worked per week 

Scenario: Check annual leave based on days worked per week 
And Select how to work out my holiday 
And I entered number of days worked per week
Then I should see the result based on my information 


# Scenario: Check annual leave for someone starting part way
# And I select someone starting Part way 
# And entered employment strat date
# An I emtered leave year 
# And I entered number of days worked per week
# Then I should see the result based on my information 

# Scenario: Check annual leave for someone leaving part way
# And I select someone starting Part way 
# And enter employment strat date
# An I enter leave year 
# And I entered number of days worked per week
# Then I should see the result based on my information 


# Scenario: Check annual leave for someone starting and leaving part way
# And I select someone starting Part way 
# And enter employment strat date
# An I enter leave year 
# And I entered number of days worked per week
# Then I should see the result based on my information

