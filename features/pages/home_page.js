const {Selector} = require('testcafe')

module.exports = {

    url: `${process.env.TESTCAFE_URL}`,
    menuBorderBottomColour: '#0079c8',
    
     //Scenario: At the home page banner - Browse Frame and Book an Appointment buttons are visible
    HomePageBanner: 
    {       
        homeBanner: function()
        {
            return Selector('.homepage-banner__image').with({boundTestRun: testController})
        },
        browseFrame: function() 
        {
            return Selector('.button:nth-child(1)').with({boundTestRun: testController})
        },
        bookAppointment: function () 
        {
            return Selector('.button:nth-child(2)').with({ boundTestRun: testController }) 
        }
    },

    //Scenario: Tiles for Frames, Sunglasses and Contact Lenses are displaying with buttons
    homePageThreeTiles: 
    {       
        threeTiles: function (i) 
        {
            return Selector('.homepage-tiles__tile:nth-child(' + i + ')').with({ boundTestRun: testController }) 
        },
        tileImages: function(i)
        {
            return Selector('.col-xs-12:nth-child(' + i + ') .homepage-tiles__image').with({boundTestRun: testController})
        },
        tileButtons: function(i) 
        {
            return Selector('.col-xs-12:nth-child(' + i + ') .homepage-tiles__button').with({boundTestRun: testController})
        }
    },
    //Scenario: Single tile image for See our new Low or No Gap Range is displaying with the button Shop Low & No Gap
    homePageSingleTile: 
    {       
        singleTile: function () 
        {
            return Selector('.homepage-single-tile__image').with({ boundTestRun: testController }) 
        },
        singleTileButton: function()
        {
            return Selector('.homepage-single-tile__button').with({boundTestRun: testController})
        }
    },
    //Scenario: Health Features - Quality Eyecare section is displaying
    homePageHealthFeatures: 
    {       
        healthFeatureSection: function () 
        {
            return Selector('.homepage__features').with({ boundTestRun: testController }) 
        },
        healthFeatureTileImages: function(i)
        {
            return Selector('.slick-slide:nth-child(' + i + ') a').with({ boundTestRun: testController }) 
        }
    },
    //Scenario: Pair up with Bupa today section is displaying with button Learn about switching today
    homePagePairup: 
    {       
        pairupSection: function () 
        {
            return Selector('.pair-up').with({ boundTestRun: testController }) 
        },
        pairupLearnButton: function(i)
        {
            return Selector('.pair-up__button').with({ boundTestRun: testController }) 
        }
    },
}