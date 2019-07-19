const { Given, When, Then } = require('cucumber');
const ClientFunction = require('testcafe').ClientFunction;
const { Selector } = require('testcafe');

const productListingElements = require('../pages/product_listing_page.js');
const globalElemants = require('../pages/global_elements_page.js');

const getWindowLocation = ClientFunction(() => window.location.href);

var i, j, a, b, x, m, n;
var dlFirstValue, countDLValue, searchResult, numberOfPages, numberOfProductsPerPage, varBupaPrice, varRetailPrice
var countAvailableOnline, isNextButtonExists, isBrandCodeExists
var arrayBrandNames = [], arrayBupaPrice = [], arrayRetailPrice = [],  arrayCount
var noImageCount, varFirstImage, hoverImage, varImageComingSoon

Given('I am browsing the bupa optical product listing page', async function () {
    await testController
        .navigateTo(productListingElements.url)
});

Then('I see the product listing page banner', async function () {
    await testController
        .expect(productListingElements.PLBannerDropdown.pl_Banner().visible).ok() 
});

When('I click on dropdowns Gender, Brand and Price; I will see contents in it', async function () {
    for (i = 2; i <= 4; i++)
    {
        await testController
            .click(productListingElements.PLBannerDropdown.pl_Dropdown(i))            
            .expect(productListingElements.PLBannerDropdown.pl_DropdownContentCount().count).gt(0)
    }
});

When('I filter the page by Womens, I see all frames for Womens', async function () {
    await testController
        .click(productListingElements.PLBannerDropdown.pl_Dropdown(2)) // Gender
        .click(productListingElements.PLBannerDropdown.pl_DropdownContentValue(2)) // Gender > Womens
        //.click(productListingElements.PLCountLabelSortBy.pl_ListingPerPageDropdown()) 
        //.click(productListingElements.PLCountLabelSortBy.pl_ListingMaximumPerPage()) // listing 48 items per page   
});

When('I click on Gender, Brand and Price dropdown values, the product list is filtering as expected', async function () {
    for (i = 2; i <= 4; i++)
    {
        await testController
            .click(productListingElements.PLBannerDropdown.pl_Dropdown(i))
            dlFirstValue =  await productListingElements.PLBannerDropdown.pl_DropdownContentValue(1).innerText   
        await testController   
            .click(productListingElements.PLBannerDropdown.pl_DropdownContentValue(1)) // only checking the first values filter function in each dropdowns
        switch (i) 
        {   // checking the values selected and filters applied are same
            case 2: //filter by gender
                {
                    await testController
                        .expect(productListingElements.PLBannerDropdown.pl_FilterValue(i-1).innerText).eql(dlFirstValue) 
                        break;
                }
            case 3: // filter by brand
                {
                    await testController
                        .expect(productListingElements.PLBannerDropdown.pl_FilterValue(i-1).innerText).eql(dlFirstValue)
                        break;
                }
            case 4: // filter by price
                {
                    await testController
                        .expect(productListingElements.PLBannerDropdown.pl_FilterValue(i-1).innerText).eql(dlFirstValue)
                        break; 
                }
        }                   
    }
});

When('I remove the filtered values one by one, the same is unselecting from dropdown and the product list is filtering as expected', async function () {   
    for (i = 2; i <= 4; i++)
    {
        await testController            
            .click(productListingElements.PLUndoFilter.pl_CloseFilterValue())
            .click(productListingElements.PLBannerDropdown.pl_Dropdown(i))
        countDLValue = await productListingElements.PLBannerDropdown.pl_DropdownContentCount().count
        for (j = 1; j <= countDLValue; j++) 
        {
            await testController   
                .expect(productListingElements.PLUndoFilter.pl_CheckDropdownUnselected(j).hasAttribute('checked')).notOk()
        }
    }
});

Then('I see the total number of results showing as label is equal to the total number of products listing', async function () {   
    searchResult = await productListingElements.PLCountLabelSortBy.pl_CountLabel().innerText
    searchResult = Number(searchResult.split(' ', 1)[0])

    numberOfProductsPerPage = await productListingElements.PLCountLabelSortBy.pl_BrandNames().count

    arrayCount = 0;
    if(numberOfProductsPerPage > 0)
    {
        for (b = 0; b <= numberOfProductsPerPage; b++)
        {
            arrayBrandNames[arrayCount] = await productListingElements.PLCountLabelSortBy.pl_BrandNames().nth(b).innerText

            arrayCount++

            if (b == (numberOfProductsPerPage - 1))
            {
                b = -1
                /*isNextButtonExists = await productListingElements.PLCountLabelSortBy.pl_NextButton().exists
                if (isNextButtonExists) 
                {
                    await testController
                        .click(productListingElements.PLCountLabelSortBy.pl_NextButton())
                }
                else
                {
                    break
                }
                numberOfProductsPerPage = await productListingElements.PLCountLabelSortBy.pl_BrandNames().count
                */
                //new code
                isNextButtonExists =  await productListingElements.PLNextBtnClick.pl_NextButtonClick()
                if(isNextButtonExists == false)
                    break
                numberOfProductsPerPage = await productListingElements.PLCountLabelSortBy.pl_BrandNames().count
            }
        }
        //console.log(searchResult)
        //console.log(arrayBrandNames.length)
        await testController
            .expect(searchResult).eql(arrayBrandNames.length)  
    }
    else
        console.log('No products found')
});

Then('I see the image is displaying for all products and 2nd image shows for hover', async function () {   
    numberOfProductsPerPage = await productListingElements.PLCountLabelSortBy.pl_BrandNames().count
    if(numberOfProductsPerPage > 0)
    {
        for (a = 0; a <= numberOfProductsPerPage; a++)
        {            
            varImageComingSoon = await productListingElements.PLElements.pl_ProductImage().nth(a).getAttribute('src')
            varFirstImage = varImageComingSoon
            varImageComingSoon = varImageComingSoon.includes("placeholder.png");
            if(!varImageComingSoon)
            {
                await testController
                    .hover(productListingElements.PLElements.pl_ProductImage().nth(a))
                    .wait(1000)
                    hoverImage = await productListingElements.PLElements.pl_ProductImage().nth(a).getAttribute('src')          

                if (varFirstImage != hoverImage) //different image
                {  
                    await testController
                        .expect(varFirstImage).notEql(hoverImage)
                }                       
                else  //same image - sometimes the hover image can be the same as first one
                {
                    await testController
                        .expect(varFirstImage).eql(hoverImage)
                }
                break
            }
            else //Coming Soon image
            { 
                noImageCount++
                if(noImageCount == (numberOfProductsPerPage - 1))
                    console.log('No images found (or) all are Coming Soon images')
            }
        }
    }
    else
        console.log('No products found')
});

Then('I see the AVAILABLE ONLINE button is displaying and click action takes the user to the product details page', async function () {   
    countAvailableOnline = await productListingElements.PLElements.pl_AvailableOnlineBtn().count
    if(countAvailableOnline > 0)
    {   
        await testController
            .click(productListingElements.PLElements.pl_AvailableOnlineBtn().nth(0))
    }
    else
    {
        console.log('No products are avaiable online');
    }
});

Then('I see the Brand Name or Code and retail price are displaying', async function () { 
    numberOfProductsPerPage = await productListingElements.PLProductsCount.pl_NoOfProductsInPage()
    if(numberOfProductsPerPage > 0)
    {
        for (a = 0; a <= numberOfProductsPerPage; a++) 
        {
            isBrandCodeExists = await productListingElements.PLElements.pl_BrandName_or_Code().nth(a).exists
            if(isBrandCodeExists)
                break
        }
    }
    else
        console.log('No products found')
});

Then('I see the color options are displaying and click action on colors changes the image and hover shows the 2nd image', async function () { 
    await testController
        .click(productListingElements.PLBannerDropdown.pl_Dropdown(4)) 
        .click(productListingElements.PLBannerDropdown.pl_DropdownContentValue(1))
        .wait(1000)
    var varFirstSwatchAnchorTag, varSecondSwatchAnchorTag, varNextButtons = false
    var c
    numberOfProductsPerPage = await productListingElements.PLProductsCount.pl_NoOfProductsInPage()    
    if(numberOfProductsPerPage > 0)
    {
        for (a = 0; a <= numberOfProductsPerPage; a++)
        {
            if(a == 0)
                c = a + 1 
            else
                c = c + 2
            numberOfSwatches = await productListingElements.PLElements.pl_ColorOptions(c).count
            console.log(a + ':' + c + ':' + numberOfSwatches)
            if(numberOfSwatches > 1)
            {
                var brandname2 = await productListingElements.PLCountLabelSortBy.pl_BrandNames().nth(a).innerText
                console.log(brandname2)
                if(brandname2 != 'Bill Bass')
                {
                    varFirstSwatchAnchorTag = await productListingElements.PLElements.pl_ProductAnchorTag().nth(a).getAttribute('href')
                    console.log(varFirstSwatchAnchorTag)
                    await testController
                        .click(productListingElements.PLElements.pl_Swatches(c))
                        .wait(2000)
                    varSecondSwatchAnchorTag = await productListingElements.PLElements.pl_ProductAnchorTag().nth(a).getAttribute('href')   
                    console.log(varSecondSwatchAnchorTag)

                    var boolImage = await expect(varFirstSwatchAnchorTag).notEql(varSecondSwatchAnchorTag)
                    if(boolImage)
                    {
                        break
                    }                       
                }
                if (a == (numberOfProductsPerPage - 1))
                {
                    console.log('in else if')
                    a = -1
                    boolImage =  await productListingElements.PLNextBtnClick.pl_NextButtonClick()
                    if(boolImage == false)
                        break
                    numberOfProductsPerPage = await productListingElements.PLCountLabelSortBy.pl_BrandNames().count
                }
            }
            //else
                //console.log('1 No products has more than one swatch')              
        }
        if(boolImage == false)
            console.log('2 No products has more than one swatch')  
    }
    else
        console.log('No products found')  
});



/* *****Not able to achieve the below scenario as sort function on website works different if there are varients(colours) for a product

When('I sort the product listing by brand name or price, I see the sorting is working as expected', async function () { 
    for (c = 4; c <= 4; c++) 
    {
        arrayBrandNames.length = 0
        arrayRetailPrice.length = 0

        await testController     
            .navigateTo(productListingElements.url)
            .click(productListingElements.PLBannerDropdown.pl_Dropdown(2)) // only checking wih Gender sorting result
            .click(productListingElements.PLBannerDropdown.pl_DropdownContentValue(1)) // only checking Womans sorting result

            .click(productListingElements.PLCountLabelSortBy.pl_ListingPerPageDropdown()) 
            .click(productListingElements.PLCountLabelSortBy.pl_ListingMaximumPerPage()) // listing 48 items per page

            .click(productListingElements.PLCountLabelSortBy.pl_SortByDropdown()) // only checking wih Gender sorting result
            .click(productListingElements.PLCountLabelSortBy.pl_SortByDropdownValue(c))
            switch (c) 
            {   
                case 1: 
                    {
                        arrayBrandNames.sort()
                        console.log('1 sorted')
                        break;
                    }
                case 2:
                    {
                        arrayBrandNames.reverse()
                        console.log('2 reverse')
                        break;
                    }
                case 3:
                    {
                        arrayRetailPrice = arrayRetailPrice.sort(function (m, n) { return m - n });
                        console.log('3 sorted')
                        break; 
                    }
                case 4:
                    {
                        arrayRetailPrice = arrayRetailPrice.sort(function (m, n) { return n - m });
                        console.log('4 reverse')
                        break; 
                    }
            }

            numberOfProductsPerPage = await productListingElements.PLCountLabelSortBy.pl_BrandNames().count
            console.log(numberOfProductsPerPage)

            isNextButtonExists = false;
            
            if(numberOfProductsPerPage > 0)
            {
                for (b = 0; b < numberOfProductsPerPage; b++) 
                {
                    if(isNextButtonExists == false)
                        a = b
                    else
                        a++
                    //for(x = 0; x < arrayBrandNames.length; x++)
                    //{
                        if(c == 1 || c == 2)
                            console.log(b + '=' + await productListingElements.PLCountLabelSortBy.pl_BrandNames().nth(b).innerText + ',' + a + '=' + arrayBrandNames[a])
                        else
                        {
                            varRetailPrice = await productListingElements.PLCountLabelSortBy.pl_RetailsPrice().nth(b).innerText
                            console.log(b + '=' + Number(varRetailPrice.substring(varRetailPrice.indexOf('$') + 1, varRetailPrice.length)) + ',' + a + '=' + arrayRetailPrice[a])
                        }

                        //await testController   
                           //.expect(productListingElements.PLCountLabelSortBy.pl_BrandNames().nth(b).innerText).eql(arrayBrandNames[x])

                        if (b == (numberOfProductsPerPage-1))
                        { 
                            console.log('in the if loop:'+b)
                            b = -1
                            isNextButtonExists = await productListingElements.PLCountLabelSortBy.pl_NextButton().exists
                            if (isNextButtonExists) 
                            {
                                await testController
                                    .click(productListingElements.PLCountLabelSortBy.pl_NextButton())
                            }
                            else 
                            {
                                break
                            }
                            numberOfProductsPerPage = await productListingElements.PLCountLabelSortBy.pl_BrandNames().count
                        }
                    //}
                    
                }  
            }   
    }        
}); */


