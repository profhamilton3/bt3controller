def my_function():
    bluetooth.uart_write_number(3)
    music.play(music.create_sound_expression(WaveShape.TRIANGLE,
            5000,
            0,
            255,
            0,
            500,
            SoundExpressionEffect.NONE,
            InterpolationCurve.CURVE),
        music.PlaybackMode.UNTIL_DONE)
joystickbit.on_button_event(joystickbit.JoystickBitPin.P14,
    joystickbit.ButtonType.DOWN,
    my_function)

def on_bluetooth_connected():
    basic.show_leds("""
        # . . . #
        # . . . .
        # # # . .
        # . # . .
        # # # . .
        """)
    joystickbit.Vibration_Motor(100)
bluetooth.on_bluetooth_connected(on_bluetooth_connected)

def on_bluetooth_disconnected():
    joystickbit.Vibration_Motor(100)
    basic.show_icon(IconNames.SKULL)
bluetooth.on_bluetooth_disconnected(on_bluetooth_disconnected)

def my_function2():
    bluetooth.uart_write_number(4)
    music.play(music.create_sound_expression(WaveShape.SQUARE,
            5000,
            0,
            255,
            0,
            500,
            SoundExpressionEffect.NONE,
            InterpolationCurve.LOGARITHMIC),
        music.PlaybackMode.UNTIL_DONE)
joystickbit.on_button_event(joystickbit.JoystickBitPin.P15,
    joystickbit.ButtonType.DOWN,
    my_function2)

def on_button_pressed_ab():
    bluetooth.uart_write_number(0)
    music.play(music.create_sound_expression(WaveShape.TRIANGLE,
            5000,
            0,
            255,
            0,
            500,
            SoundExpressionEffect.VIBRATO,
            InterpolationCurve.LINEAR),
        music.PlaybackMode.UNTIL_DONE)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def my_function3():
    bluetooth.uart_write_number(2)
    music.play(music.create_sound_expression(WaveShape.SINE,
            3767,
            737,
            255,
            96,
            500,
            SoundExpressionEffect.VIBRATO,
            InterpolationCurve.LINEAR),
        music.PlaybackMode.UNTIL_DONE)
joystickbit.on_button_event(joystickbit.JoystickBitPin.P13,
    joystickbit.ButtonType.DOWN,
    my_function3)

def my_function4():
    bluetooth.uart_write_number(1)
    music.play(music.create_sound_expression(WaveShape.SINE,
            5000,
            0,
            255,
            0,
            500,
            SoundExpressionEffect.NONE,
            InterpolationCurve.LINEAR),
        music.PlaybackMode.UNTIL_DONE)
joystickbit.on_button_event(joystickbit.JoystickBitPin.P12,
    joystickbit.ButtonType.DOWN,
    my_function4)

joystickbit.init_joystick_bit()
bluetooth.start_io_pin_service()
bluetooth.start_uart_service()
music.set_volume(56)
basic.show_leds("""
    . . . . .
    . . # # .
    . . # # #
    . # # # #
    # # # # #
    """)