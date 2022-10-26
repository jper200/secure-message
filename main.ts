radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 17) {
        basic.showIcon(IconNames.Happy)
    } else if (receivedNumber == 23) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Surprised)
    }
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    radio.sendNumber(17)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Surprised)
    radio.sendNumber(42)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
    radio.sendNumber(23)
    basic.clearScreen()
})
radio.setGroup(1)
