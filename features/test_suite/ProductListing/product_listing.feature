@Bupa @ProductListing

Feature: Product Listing Page
    As a Customer
    I would be able see the product listing page
    So that I know the contents in the listing page

    Background:
        Given I am browsing the bupa optical product listing page

    @smokeTest31
    Scenario: At product listing page - I see the banner and filter dropdowns
        Then I see the product listing page banner

    @smokeTest32
    Scenario: I want to load the product list for frames > Womens
        When I filter the page by Womens, I see all frames for Womens

    @smokeTest33
    Scenario: In product listing page - The dropdown filter function is working as expected
        #When I click on Gender, Brand and Price dropdown values, the product list is filtering as expected
        #When I remove the filtered values one by one, the same is unselecting from dropdown and the product list is filtering as expected
        When I filter the page by Womens, I see all frames for Womens
        Then I see the total number of results showing as label is equal to the total number of products listing

    @smokeTest
    Scenario: In product listing page - I will be able to do all the functionalities related to a product
        #When I filter the page by Womens, I see all frames for Womens
        #Then I see the image is displaying for all products and 2nd image shows for hover
        #Then I see the AVAILABLE ONLINE button is displaying and click action takes the user to the product details page
        When I filter the page by Womens, I see all frames for Womens
        #Then I see the Brand Name or Code and retail price are displaying
        Then I see the color options are displaying and click action on colors changes the image and hover shows the 2nd image




        #Not able to achieve the below scenario as sort function on website works different if there are varients(colours) for a product
        #When I sort the product listing by brand name or price, I see the sorting is working as expected





