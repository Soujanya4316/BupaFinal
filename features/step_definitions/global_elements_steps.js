const { Given, When, Then } = require('cucumber');
const ClientFunction = require('testcafe').ClientFunction;
const { Selector } = require('testcafe');
const headerFooterElements = require('../pages/global_elements_page.js');

var i, m;

Given('I am browsing the bupa optical online store', async function () {
        await testController
                .navigateTo(headerFooterElements.url)
});

//Scenario: At the Global header - Global meanus should be displyed               
Then('I see the Global header', async function () {
        await testController
                .expect(headerFooterElements.globalHeaderElements.globalHeader().visible).ok()
                .wait(500)
});
When('I click on any of the Global header menu', async function () {
        await testController
                .click(headerFooterElements.globalHeaderElements.globalHeader())
                .wait(500)
});
Then('The corresponding menu list will open with close button visible', async function () {
        await testController
                .expect(headerFooterElements.globalHeaderElements.globalHeader_menuContainter().visible).ok()
                .expect(headerFooterElements.globalHeaderElements.globalHeader_closeButton().visible).ok()
                .wait(500)
});
When('I click on the Close button the menu list will be closed', async function () {
        await testController
                .click(headerFooterElements.globalHeaderElements.globalHeader_closeButton())
                .wait(500)
});

//Scenario: At the header - Logo and logo-text should be visible and redirected to the home page
Then('I see the logo', async function () {
        await testController
                .expect(headerFooterElements.logoElements.logo().visible).ok()
                .expect(headerFooterElements.logoElements.logo_text().visible).ok()
});
When('I click on logo or logo_text', async function () {
        await testController
                .click(headerFooterElements.logoElements.logo())
                //.wait(1000)
});
Then('I will be redirected to the home page', async function () {
        await testController
                .expect(headerFooterElements.logoElements.logo().getAttribute('href')).visible.ok(); // == 'https://www.bupa.com.au/optical'
});

//Scenario: At the header - Menus should be visible and clickable
Then ('I will be able to click on the primary menus', async function () {
        for (i = 1; i <= 5; i++) 
        {
                if(i != 4)     
                {                                                 // 4 is the menu "Contact Lenses" and no secondary menus available
                        await testController
                        .click(headerFooterElements.headerMenuElements.primaryMenu(i))
                        .wait(500)
                }
        }
});
When ('I hover over the primary menus, I see blue line under the primary and corresponding secondary menu sliding down', async function () {
        for (i = 1; i <= 5; i++) 
        {
                if(i != 4)     
                {                                                 // 4 is the menu "Contact Lenses" and no secondary menus available
                        await testController
                        .hover(headerFooterElements.headerMenuElements.primaryMenu(i))
                        .expect(headerFooterElements.headerMenuElements.secondaryMenu().visible).ok()

                        //need to write the code to check the bottom border color is blue while hover

                        //.expect(headerFooterElements.headerMenuElements.primaryMenu_style().getAttribute('border-bottom')).contains(headerFooterElements.menuBorderBottomColour)
                        //.expect(headerFooterElements.headerMenuElements.primaryMenu_style().getStyleProperty('color')).eql('rgb(0, 121, 200)')
                        .wait(500)
                }
        }
});
Then ('this primary menus will open in the same tab', async function () {
        await testController
        .expect(headerFooterElements.headerMenuElements.primaryMenu(1).getAttribute('target').exists).notOk() // checking with only the first menu.
});
When ('I hover over any of the primary menus that doenst have secondary level menus', async function () {
        await testController
        .hover(headerFooterElements.headerMenuElements.primaryMenu(4))      
});
Then ('I dont see any secondary menu overlay', async function () {
        await testController
        .expect(headerFooterElements.headerMenuElements.secondaryMenu().exists).notOk()
});
Then('I dont see any blue line under the primary menu that I am hovering over', async function () {
        await testController
        //need to write the code to check the bottom border color is not blue while hover on 
        //.expect(headerFooterElements.headerMenuElements.primaryMenu_style().getAttribute('border-bottom').exists).notOk()
});
When ('I click on the secondary menus, I will be redirected to corresponding pages', async function () {
        for (i = 1; i <= 5; i++) 
        {
                if(i != 4)     // 4 is the menu "Contact Lenses" and no secondary menus available
                {     
                        await testController
                        .hover(headerFooterElements.headerMenuElements.primaryMenu(i))                
                        .click(headerFooterElements.headerMenuElements.secondaryMenu_redirect(0)) // only the first secondary menu's (which is 0) click is checking!
                        .wait(500)
                }
        } 
});
When('I look at below the menus, I will see the Free Shipping & return banner', async function () {
        await testController
                .expect(headerFooterElements.headerMenuElements.shippingBanner().visible).ok()
});

//Scenario: At the header - Find a store, Book appointment and Cart links are showing and click functions are working
When('I see the Find a store, Book appointment and Cart links', async function () {
        for (m = 1; m <= 3; m++) 
        {
                await testController
                        .expect(headerFooterElements.headerFunctions.headerFunctions_visible_Click(m).visible).ok()
        }
});

Then('I can click on them them and I will be redirected to corresponding pages', async function () {
        for (m = 1; m <= 3; m++) 
        {
                await testController        
                .click(headerFooterElements.headerFunctions.headerFunctions_visible_Click(m))   
                if (m == 2)       
                {
                        await testController   
                        .navigateTo(headerFooterElements.url)
                }
                
        }
});

//Scenario: At the footer - menus and connect with us icons are diplayed
Then('I see the footer', async function () {
        await testController
                .expect(headerFooterElements.footerElements.footer().visible).ok()
});
When('I click on the footer meanus, I will be redirected to corresponding pages', async function () {
        await testController
                .click(headerFooterElements.footerElements.footerMenu())  // only the first footer menus click is checking!
                //.wait(1000)
});
When('I see the connect to us icons and when click on them I will be redirected to corresponding pages in new tab', async function () {
        await testController
                //.click(headerFooterElements.footerElements.footerIcons(headerFooterElements.SocialMedias[i]))
                .expect(headerFooterElements.footerElements.footerIconsPanel().visible).ok()
                //Testcafe only supports one tab testing as of now - so just checking the attribut target = _blank, that opens in new tab
                .expect(headerFooterElements.footerElements.footerIcons_redirectLocation().getAttribute('target')).eql('_blank')
                .click(headerFooterElements.footerElements.footerIconsClick())   // only the facebook icon click is checking!
});
