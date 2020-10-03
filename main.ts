function cwU () {
    music.setTempo(400)
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.setTempo(133)
    music.playTone(262, music.beat(BeatFraction.Whole))
}
input.onButtonPressed(Button.A, function () {
    cwU()
})
basic.forever(function () {
    basic.showString("D")
    basic.pause(500)
    basic.showString("L")
    basic.pause(500)
    basic.showString("7")
    basic.pause(500)
    basic.showString("H")
    basic.pause(500)
    basic.showString("F")
    basic.pause(2000)
})
