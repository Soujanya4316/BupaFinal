const { Given, When, Then } = require('cucumber');
const ClientFunction = require('testcafe').ClientFunction;
const { Selector } = require('testcafe');
const homePageElements = require('../pages/home_page.js');

var i;

Given('I am browsing the bupa optical home page', async function () {
    await testController
        .navigateTo(homePageElements.url)
});

//Scenario: At the home page banner - Browse Frame and Book an Appointment buttons are visible           
Then('I see the home page banner', async function () {
    await testController
        .expect(homePageElements.HomePageBanner.homeBanner().visible).ok()
        .wait(500)
});
When('I click on buttons on banner, I will be redirected to the corresponding pages on same tab', async function () {
    await testController
        .click(homePageElements.HomePageBanner.browseFrame())
        .navigateTo(homePageElements.url)
        .click(homePageElements.HomePageBanner.bookAppointment())
        .wait(500)
});

//Scenario: Tiles for Frames, Sunglasses and Contact Lenses are displaying with buttons
Then('I see Tiles for Frames, Sunglasses and Contact Lenses', async function () {
    for (i = 1; i <= 3; i++) 
    {
        await testController        
            .expect(homePageElements.homePageThreeTiles.threeTiles(i).visible).ok()
    }
});
When('I click on images on tile, I will be redirected to the corresponding pages on same tab', async function () {
    for (i = 1; i <= 3; i++) 
    {
        await testController        
            .click(homePageElements.homePageThreeTiles.tileImages(i))
            .navigateTo(homePageElements.url)
    }
});
When('I click on buttons on tile, I will be redirected to the corresponding pages on same tab', async function () {
    for (i = 1; i <= 3; i++) 
    {
        await testController        
            .click(homePageElements.homePageThreeTiles.tileButtons(i))
            .navigateTo(homePageElements.url)
    }
});

//Scenario: Single tile image for See our new Low or No Gap Range is displaying with the button Shop Low & No Gap
Then('I see single tile for See our new Low or No Gap Range', async function () {
    await testController
        .expect(homePageElements.homePageSingleTile.singleTile().visible).ok()
        //.wait(500)
});
When('I click on tile, I will be redirected to the corresponding pages on same tab', async function () {
    await testController
            .click(homePageElements.homePageSingleTile.singleTile())
            .navigateTo(homePageElements.url)
});
When('I click on button on single tile, I will be redirected to the corresponding pages on same tab', async function () {
    await testController
            .click(homePageElements.homePageSingleTile.singleTileButton())
            .navigateTo(homePageElements.url)
});

//Scenario: Health Features - Quality Eyecare section is displaying
Then('I see Health Features - Quality Eyecare section is displaying', async function () {
    await testController
            .expect(homePageElements.homePageHealthFeatures.healthFeatureSection().visible).ok()
            //.wait(500)
});
When('I click on images on Health Features tile, I will be redirected to the corresponding pages on same tab', async function () {
    for (i = 1; i <= 3; i++) 
        {
            await testController
                .click(homePageElements.homePageHealthFeatures.healthFeatureTileImages(i))
                .navigateTo(homePageElements.url)
        }
});

//Scenario: Pair up with Bupa today section is displaying with button Learn about switching today
Then('I see Pair up with Bupa today section is displaying', async function () {
    await testController
        .expect(homePageElements.homePagePairup.pairupSection().visible).ok()
        //.wait(500)
});
When('I click on Learn button, I will be redirected to the corresponding pages on same tab', async function () {
    await testController
        .click(homePageElements.homePagePairup.pairupLearnButton())
        .navigateTo(homePageElements.url)
});