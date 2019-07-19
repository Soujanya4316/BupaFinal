@Bupa @HomePage

Feature: Home Page
    As a Customer
    I would be able see the Home Page bupa.com.au/optical
    So that I know the contents in the home page

Background:
    Given I am browsing the bupa optical home page

@smokeTest11
Scenario: At the home page banner - Browse Frame and Book an Appointment buttons are visible
    Then I see the home page banner
    When I click on buttons on banner, I will be redirected to the corresponding pages on same tab

@smokeTest12
Scenario: Tiles for Frames, Sunglasses and Contact Lenses are displaying with buttons
    Then I see Tiles for Frames, Sunglasses and Contact Lenses
    When I click on images on tile, I will be redirected to the corresponding pages on same tab
    When I click on buttons on tile, I will be redirected to the corresponding pages on same tab

@smokeTest13
Scenario: Single tile image for See our new Low or No Gap Range is displaying with the button Shop Low & No Gap
    Then I see single tile for See our new Low or No Gap Range
    When I click on tile, I will be redirected to the corresponding pages on same tab
    When I click on button on single tile, I will be redirected to the corresponding pages on same tab

@smokeTest14
Scenario: Health Features - Quality Eyecare section is displaying
    Then I see Health Features - Quality Eyecare section is displaying
    When I click on images on Health Features tile, I will be redirected to the corresponding pages on same tab

@smokeTest15
Scenario: Pair up with Bupa today section is displaying with button Learn about switching today
    Then I see Pair up with Bupa today section is displaying
    When I click on Learn button, I will be redirected to the corresponding pages on same tab

