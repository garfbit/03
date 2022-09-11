let valorventa = 0
let IGV = 0
let precioventa = 0
basic.forever(function () {
    valorventa = 100
    IGV = valorventa * 0.19
    precioventa = valorventa + IGV
    basic.showNumber(precioventa)
})
