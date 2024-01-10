basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        basic.showNumber(0)
        pins.digitalWritePin(DigitalPin.P2, 0)
    } else if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.showNumber(1)
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else {
        basic.showIcon(IconNames.Meh)
    }
    basic.pause(1000)
})
