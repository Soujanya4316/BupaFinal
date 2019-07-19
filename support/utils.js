var { defineSupportCode } = require('cucumber');
var Selector = require('testcafe').Selector;
const testControllerHolder = require('../features/support/testControllerHolder');
var xPathToCss = require('xpath-to-css');
var testController = null;


var actionsHolder = {

    CheckIfElementVisible : function(selectorType, selectorValue) {

        console.log('inside actions.js - fn GoToUrl');
        console.log(`selectorType (not used now): ${selectorType}, selectorValue: ${selectorValue}`);

        testController
            .expect(Selector(selectorValue).exists).ok();

    },

    XPathCSSFilter : function (selectorType, selectorValue) {

        //console.log(`..... Inside XPathCSSFilter function: ${selectorType}, ${selectorValue}`)

        if(selectorType === "XPath"){
            var xPathValue = selectorValue;
            var cssValue = xPathToCss(xPathValue);
            //console.log(`..... CSS when type is XPATH: ${cssValue}`);
        }else if(selectorType === "CssSelector"){
            var cssValue = selectorValue;
            //console.log(`..... CSS when type is CSSselector ${cssValue}`);
        }

        return cssValue;
        
    }


}



module.exports = actionsHolder;