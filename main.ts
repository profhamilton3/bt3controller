joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
    bluetooth.uartWriteNumber(3)
    music.play(music.createSoundExpression(WaveShape.Triangle, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
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
    music.play(music.createSoundExpression(WaveShape.Square, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.AB, function () {
    bluetooth.uartWriteNumber(0)
    music.play(music.createSoundExpression(WaveShape.Triangle, 5000, 0, 255, 0, 500, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    bluetooth.uartWriteNumber(2)
    music.play(music.createSoundExpression(WaveShape.Sine, 3767, 737, 255, 96, 500, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    bluetooth.uartWriteNumber(1)
    music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
joystickbit.initJoystickBit()
bluetooth.startIOPinService()
bluetooth.startUartService()
music.setVolume(56)
basic.showLeds(`
    . . . . .
    . . # # .
    . . # # #
    . # # # #
    # # # # #
    `)
