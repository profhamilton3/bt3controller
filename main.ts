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
input.onButtonPressed(Button.AB, function () {
    bluetooth.uartWriteNumber(0)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
	
})
joystickbit.initJoystickBit()
bluetooth.startIOPinService()
bluetooth.startUartService()
music.setVolume(56)
