@Bupa @HomePageElements

Feature: Home Page
    As a Customer
    I would be able see the Home Page bupa.com.au/optical
    So that I know the detailes about Bupa Optical

    Background:
        Given I am browsing the bupa optical online store

    @smokeTest1
    Scenario: At the Global header - Global meanus should be displyed
        Then I see the Global header
        When I click on any of the Global header menu
        Then The corresponding menu list will open with close button visible
        When I click on the Close button the menu list will be closed

    @smokeTest2
    Scenario: At the header - Logo and logo-text should be visible and redirected to the home page
        Then I see the logo
        When I click on logo or logo_text
        Then I will be redirected to the home page

    @smokeTest3
    Scenario: At the header - Menus should be visible and clickable
        Then I will be able to click on the primary menus
        When I hover over the primary menus, I see blue line under the primary and corresponding secondary menu sliding down
        Then this primary menus will open in the same tab
        When I hover over any of the primary menus that doenst have secondary level menus
        Then I dont see any secondary menu overlay
        Then I dont see any blue line under the primary menu that I am hovering over
        When I click on the secondary menus, I will be redirected to corresponding pages
        When I look at below the menus, I will see the Free Shipping & return banner

    @smokeTest4
    Scenario: At the header - Find a store, Book appointment and Cart links are showing and click functions are working
        When I see the Find a store, Book appointment and Cart links
        Then I can click on them them and I will be redirected to corresponding pages

    @smokeTest5
    Scenario: At the footer - menus and connect with us icons are diplayed
        Then I see the footer
        When I click on the footer meanus, I will be redirected to corresponding pages
        When I see the connect to us icons and when click on them I will be redirected to corresponding pages in new tab

    