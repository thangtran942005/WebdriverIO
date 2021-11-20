module.exports = class Page {

    get listProduct () { return $$("//div[starts-with(@class,'MuiContainer-root')]/div//a//img")}

    get lbl_CheckResult () { return $('//div[@data-test-check-result]/p') }

    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        browser.url(`/${path}`)
        browser.maximizeWindow()
    }

}