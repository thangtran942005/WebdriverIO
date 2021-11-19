function uiButton(label) {
    return $(`//button[normalize-space(.)="${label}"]`)
}

function uiTextbox (label) {
    return $(`//*[text()="${label}"]/following::input[1]`)
}

function uiRadio(label) {
    return $(`//span[text()="${label}"]/..//input[@type='radio']`)
}

function uiMenu (label) {
    return $(`//a[@role='button'][.="${label}"]`)
}


module.exports = {uiButton, uiTextbox, uiRadio, uiMenu}