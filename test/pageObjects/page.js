module.exports = class Page {

    get listProduct () { return "//div[starts-with(@class,'MuiContainer-root')]/div//a//img"}

    get lbl_CheckResult () { return $('//div[@data-test-check-result]/p') }
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        browser.url(`https://element-challenge.flood.io/${path}`)
        browser.maximizeWindow()
    }

    // get button (label) {
    //     return $(`//button[normalize-space(.)="${label}"]`)
    // }

    // get textbox (label) {
    //     return $(`//*[text()="${label}"]/following::input[1]`)
    // }

    // get radio(label) {
    //     return $(`//span[text()="${label}"]/..//input[@type='radio']`)
    // }

    // get menu (label) {
    //     return $(`a[@role='button'][text()="${label}"]`)
    // }

    // get checkResult () { return $('//div[@data-test-check-result]/p')}
}