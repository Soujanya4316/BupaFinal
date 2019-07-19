const {Selector} = require('testcafe');

module.exports = {

    url: `${process.env.TESTCAFE_URL}`,
    menuBorderBottomColour: '#0079c8',

    //Scenario: At the Global header - Global menus should be displyed
    globalHeaderElements: 
    {       
        globalHeader: function() 
        {
            return Selector('.xnn-heading-overlay').with({boundTestRun: testController})
        },
        globalHeader_menuContainter: function() 
        {
            return Selector('.xnn-accordion-container').with({boundTestRun: testController})
        },
        globalHeader_closeButton: function () 
        {
            return Selector('.xnn-close').with({ boundTestRun: testController }) 
        }
    },

    //Scenario: At the header - Logo and logo-text should be visible and redirected to the home page
    logoElements: 
    {       
        logo: function() 
        {
            return Selector('.header-desktop__logo').with({boundTestRun: testController})
        },
        logo_text: function() {
            return Selector('.header-desktop__name').with({boundTestRun: testController})
        },
        primaryMenu: function () {
            return Selector('.between-xs').with({ boundTestRun: testController }) 
        }
    },
    
    //Scenario: At the header - Menus should be visible and clickable
    headerMenuElements: 
    {
        primaryMenu: function(i) 
        {
            return Selector('.header__primary-menu--nav-with-link:nth-child(' + i + ') .header-desktop__primary-menu-item').with({ boundTestRun: testController })  
        },
        secondaryMenu: function()
        {
            return Selector('.fade-enter-done').with({ boundTestRun: testController }) 
        },
        primaryMenu_style: function()
        {            
            return Selector('.header-desktop__primary-menu-item').with({ boundTestRun: testController })  
        },        
        secondaryMenu_redirect: function(i)
        {           
            //var matchingElements = Selector('.secondary-menu-links-desktop__menu-item > a')
            //var containerSnapshot = await container();
            //console.log(containerSnapshot.childElementCount)
            //var matchingElementsCount = matchingElements.count;
            //return matchingElementsCount;
            return Selector('.secondary-menu-links-desktop__menu-item > a').nth(i).with({ boundTestRun: testController })
        },
        shippingBanner: function()
        {            
            return Selector('.header__shipping-banner:nth-child(2)').with({ boundTestRun: testController })  
        }
    },

    //Scenario: At the header - Find a store, Book appointment and Cart links are showing and click functions are working
    headerFunctions: 
    {       
        headerFunctions_visible_Click: function(m)
        {
            return Selector('.header-desktop__cta-item:nth-child(' + m +') .header-desktop__cta-text').with({boundTestRun: testController})
        }
    },

    //Scenario: At the footer - menus and connect with us icons are diplayed
    footerElements: 
    {       
        footer: function() 
        {
            return Selector('.footer').with({boundTestRun: testController})
        },
        footerMenu: function() {
            return Selector('.footer__link-item > a').nth(0).with({ boundTestRun: testController })
        },
        footerIconsPanel: function () {
            return Selector('.footer__section-social-content').with({ boundTestRun: testController }) 
            //return Selector('.xnn-clos.icon-' + text_SocialMedia + '-circle').with({ boundTestRun: testController }) 
        },
        footerIconsClick: function () {
            return Selector('.icon-facebook-circle').with({ boundTestRun: testController }) 
        },
        footerIcons_redirectLocation: function () {
            return Selector('.footer__section-social-content > a').nth(0).with({ boundTestRun: testController }) 
        }
    },
}