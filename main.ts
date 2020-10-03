function cwK () {
    lang()
    kurz()
    lang()
}
function cwD () {
    lang()
    kurz()
    kurz()
}
input.onButtonPressed(Button.A, function () {
    cwD()
    p_kurz()
    cwL()
    p_kurz()
    cw9()
    p_kurz()
    cwK()
    p_kurz()
    cwC()
    p_kurz()
    cwE()
})
function p_kurz () {
    music.setTempo(400)
    music.rest(music.beat(BeatFraction.Whole))
}
function p_lang () {
    music.setTempo(133)
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
}
input.onButtonPressed(Button.B, function () {
    basic.showString("D")
    basic.pause(500)
    basic.showString("L")
    basic.pause(500)
    basic.showString("9")
    basic.pause(500)
    basic.showString("K")
    basic.pause(500)
    basic.showString("C")
    basic.pause(500)
    basic.showString("E")
    basic.pause(2000)
    basic.clearScreen()
})
function cw9 () {
    lang()
    lang()
    lang()
    lang()
    kurz()
}
function cwC () {
    lang()
    kurz()
    lang()
    kurz()
}
function cwL () {
    kurz()
    lang()
    kurz()
    kurz()
}
function kurz () {
    music.setTempo(400)
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
}
function cwE () {
    kurz()
}
function lang () {
    music.setTempo(133)
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
}
basic.forever(function () {
	
})
