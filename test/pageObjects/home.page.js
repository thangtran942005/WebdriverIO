const Page = require('./page')
const {uiButton, uiRadio, uiMenu, uiTextbox} = require('./controls')
/**
 * sub page containing specific selectors and methods for a specific page
 */
 class HomePage extends Page {
    get lbl_Discount () { return $('//h2[@data-test-discount]')}

    get lbl_Category () { return $(`//p[@id='challenge-2-category']`)}

    /**
     * overwrite specific options to adapt it to page object
     */
     open () {
        return super.open('');
    }

    async takeTheChallengeDiscount () {
        await uiButton('TAKE THE CHALLENGE').click()
        let _Discount = await this.lbl_Discount.getText()
        _Discount = _Discount.split(' ')[3]
        await uiRadio(_Discount).click()
        await uiButton('CHECK').click()
    }

    async takeTheChallengeNewArrivals () {
        await uiButton('NEXT').click()
        let _Category = await this.lbl_Category.getText()
        await uiButton(_Category).click()
        let _TotalProduct = await this.listProduct.length
        await uiRadio(_TotalProduct).click()
        await uiButton('CHECK').click()
    }

    async takeTheChallengeRevealTheDeal () {
        await uiButton('NEXT').click()
        await uiButton('Reveal the deal').click()
        await uiButton('Copy the code').click()
        await uiTextbox(`Scroll down to Deal of The Week, click on REVEAL THE DEAL, copy the code, then paste it here.`).click()
        await browser.keys(['Control', 'v'])
        await uiButton('CHECK').click()
    }

    async takeTheChallengeProducts () {
        await uiButton('NEXT').click()
        await uiMenu('Products').click()
        await uiButton('CHECK').click()
    }

 }

 module.exports = new HomePage()