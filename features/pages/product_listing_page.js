const {Selector} = require('testcafe')

module.exports = {

    url: `${process.env.TESTCAFE_URL}/collections/glasses`,
    
    PLBannerDropdown: 
    {       
        pl_Banner: function()
        {
            return Selector('img:nth-child(4)').with({boundTestRun: testController})
        },
        pl_Dropdown: function(i) 
        {
            return Selector('.toolbar-desktop__filter:nth-child(' + i + ')').with({ boundTestRun: testController })
        },
        pl_DropdownContentCount: function() 
        {
            return Selector('.toolbar-desktop__filter-options--open > li > input').with({ boundTestRun: testController })
        },
        pl_DropdownContentValue: function(i) 
        {
            return Selector('.toolbar-desktop__filter-options--open > .toolbar-desktop__filter-option:nth-child(' + i + ') > label').with({ boundTestRun: testController })
        },
        pl_FilterValue: function(i) 
        {
            return Selector('.toolbar-desktop__filter-remove:nth-child(' + i + ')').with({ boundTestRun: testController })
        },
    },
    PLUndoFilter: 
    {       
        pl_CloseFilterValue: function()
        {
            return Selector('.toolbar-desktop__filter-remove:nth-child(1) .icon-cross').with({boundTestRun: testController})
        },
        pl_CheckDropdownUnselected: function(j) 
        {
            return Selector('.toolbar-desktop__filter-options--open > .toolbar-desktop__filter-option:nth-child(' + j + ') > input').with({ boundTestRun: testController })
        }
    },
    PLCountLabelSortBy:
    {       
        pl_CountLabel: function()
        {
            return Selector('.toolbar-desktop__count > div').with({boundTestRun: testController})
        },
        pl_ListingPerPageDropdown: function()
        {
            return Selector('.pagination__per-page-select').with({boundTestRun: testController})
        },
        pl_ListingMaximumPerPage: function()
        {
            return Selector('.pagination__per-page-select > option:nth-child(3)').with({boundTestRun: testController})
        },
        pl_numberOfPages: function()
        {
            return Selector('.pagination > span:nth-child(1)').with({boundTestRun: testController})
        },
        pl_NextButton: function()
        {
            return Selector('.icon-chevron-right').with({boundTestRun: testController})
        },
        pl_BrandNames: function()
        {
            return Selector('.product-block__brand').with({boundTestRun: testController})
        },
        pl_BupaPrice: function()
        {
            return Selector('.product-block__member-price').with({boundTestRun: testController})
        },
        pl_RetailsPrice: function()
        {
            return Selector('.product-block__retail-price').with({boundTestRun: testController})
        },

        pl_SortByDropdown: function() 
        {
            return Selector('.toolbar-desktop__sort').with({ boundTestRun: testController })
        },
        pl_SortByDropdownValue: function(m)
        {
            return Selector('.toolbar-desktop__sort > select > option:nth-child(' + m + ')').with({ boundTestRun: testController })
        }
    },
    PLElements:
    {       
        pl_ProductImage: function()
        {
            return Selector('.product-block__image > img').with({boundTestRun: testController})
        },
        pl_ProductAnchorTag: function()
        {
            return Selector('.product-block > a').with({boundTestRun: testController})
        },
        pl_AvailableOnlineBtn: function()
        {
            return Selector('.product-block__badge-content').with({boundTestRun: testController})
        },
        pl_BrandName_or_Code: function()
        {
            return Selector('.product-block__name').with({boundTestRun: testController})
        },
        pl_ColorOptions: function(c)
        {
            return Selector('.product-block:nth-child(' + c + ') > .swatches > li > span').with({boundTestRun: testController})
        },
        pl_Swatches: function(a)
        {
            return Selector('.product-block:nth-child(' + a + ') > .swatches > li:nth-child(2)').with({boundTestRun: testController})
        },
    },


    /************************ Common Functions ************************/
    PLProductsCount: 
    {
        pl_NoOfProductsInPage: async function() 
        {
            var numberOfProductsElelmentsPerPage = Selector('.product-block__brand').with({boundTestRun: testController})
            var productCount = await numberOfProductsElelmentsPerPage.count

            return productCount;
        }
    },
    PLNextBtnClick:
    {
        pl_NextButtonClick: async function()
        {
            var isClicked = false
            var isNextButtonExists = await Selector('.icon-chevron-right').with({boundTestRun: testController}).exists
            if(isNextButtonExists)
            {
                await testController
                        .click(Selector('.icon-chevron-right').with({boundTestRun: testController}))
                isClicked = true
                //console.log('isClicked: ' + isClicked);
                return isClicked
            }
            else
                return isClicked
        }
    }
}

    