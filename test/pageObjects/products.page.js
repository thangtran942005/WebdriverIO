const Page = require('./page')
const {uiButton, uiTextbox} = require('./controls')
/**
 * sub page containing specific selectors and methods for a specific page
 */
 class ProductsPage extends Page {
    get lbl_Range () { return $('//p[@data-test-range]')}

    get sld_PriceRange () { return $(`//span[@data-test-slider]`)}

    get sld_Min () { return $('//span[@role="slider"][@data-index="0"]')}

    get sld_Max () { return $('//span[@role="slider"][@data-index="1"]')}

    get lbl_MinRrice () { return $('//span[@id="challenge-5-min-price"]')}

    get lbl_MaxRrice () { return $('//span[@id="challenge-5-max-price"]')}

    get lnk_GoPage () { return $('(//ul/li/button)[last()-1]')}

    /**
     * overwrite specific options to adapt it to page object
     */
     open () {
        return super.open('products');
    }

    async setPriceValue (element, value) {
        await element.click()
        let _CurrentValue = await element.getAttribute('aria-valuenow')
        _CurrentValue = parseInt(_CurrentValue)
        if(value >= _CurrentValue) {
            for(let i=1 ; i<=value - _CurrentValue; i++){
                await browser.keys('ArrowRight') 
            }
        } else {
            for(let j=1 ; j<=_CurrentValue - value; j++){
                await browser.keys('ArrowLeft')
            } 
        }
         _CurrentValue = await element.getAttribute('aria-valuenow')
    }

    async takeTheChallengePriceFilter () {
        await uiButton('NEXT').click()
        // Get Min and Max chanllenge
        let _MinRrice = await this.lbl_MinRrice.getText()
        _MinRrice = parseInt(_MinRrice.replace('$', ''))
        let _MaxRrice = await this.lbl_MaxRrice.getText()
        _MaxRrice = parseInt(_MaxRrice.replace('$', ''))
        // Move to Slider and change Min and Max value
        await this.sld_Min.dragAndDrop({x:5, y:5})
        await this.setPriceValue(this.sld_Min, _MinRrice)
        await this.setPriceValue(this.sld_Max, _MaxRrice)
        // Get total Products
        let _TotalProduct = await this.listProduct.length
        let _TotalPage = await this.lnk_GoPage.getProperty('textContent')
        // Count next page if have
        if(_TotalPage != '') {
            _TotalPage = parseInt(_TotalPage)
            _TotalProduct = _TotalProduct*(_TotalPage-1)
            await this.lnk_GoPage.click()
            let _LastestPage = await this.listProduct.length
            _TotalProduct = _TotalProduct + _LastestPage
        }
        // Set total Products
        await uiTextbox(`How many products are there ?`).setValue(_TotalProduct)
        await uiButton('CHECK').click()
    }
 }

 module.exports = new ProductsPage()