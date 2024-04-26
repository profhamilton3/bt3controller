joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
    bluetooth.uartWriteNumber(3)
})
bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        # . . . #
        # . . . .
        # # # . .
        # . # . .
        # # # . .
        `)
    joystickbit.Vibration_Motor(100)
})
bluetooth.onBluetoothDisconnected(function () {
    joystickbit.Vibration_Motor(100)
    basic.showIcon(IconNames.Skull)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function () {
    bluetooth.uartWriteNumber(4)
})
input.onButtonPressed(Button.AB, function () {
    bluetooth.uartWriteNumber(0)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    bluetooth.uartWriteNumber(2)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    bluetooth.uartWriteNumber(1)
})
joystickbit.initJoystickBit()
bluetooth.startIOPinService()
bluetooth.startUartService()
music.setVolume(56)
