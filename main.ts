input.onSound(DetectedSound.Loud, function () {
    if (lights_on) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    } else {
        basic.clearScreen()
    }
    lights_on = !(lights_on)
})
let lights_on = false
input.setSoundThreshold(SoundThreshold.Loud, 100)
basic.forever(function () {
	
})
