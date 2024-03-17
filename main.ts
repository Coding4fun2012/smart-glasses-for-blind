input.onButtonPressed(Button.A, function () {
    _switch = _switch + 1
    if (1 == _switch % 2) {
        music.setBuiltInSpeakerEnabled(true)
    } else {
        music.setBuiltInSpeakerEnabled(false)
    }
})
let JULI = 0
let _switch = 0
_switch = 0
basic.forever(function () {
    JULI = 400
    JULI = cbit_传感器类.Ultrasonic(DigitalPin.P1, DigitalPin.P2)
    music.stopAllSounds()
    serial.writeValue("JULI", JULI)
    if (0 == JULI) {
        JULI = 400
        music.stopAllSounds()
    } else {
        music.play(music.stringPlayable("C5 - C5 - C5 - C5 - ", Math.map(JULI, 2, 120, 600, 100)), music.PlaybackMode.LoopingInBackground)
    }
    basic.pause(500)
})
