basic.forever(function () {
    led.setBrightness(255 - input.lightLevel())
    basic.showLeds(`
        . . # . .
        # . # . #
        . # # # .
        # . # . #
        . . # . .
        `)
})
