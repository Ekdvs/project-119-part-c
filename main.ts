input.onButtonPressed(Button.A, function () {
    left = 1
    right = 0
    delay += -200
    tempo += -200
})
input.onButtonPressed(Button.B, function () {
    left = 0
    right = 1
    delay += 200
    tempo += 150
})
let right = 0
let left = 0
let delay = 500
let tempo = 450
left = 0
right = 0
basic.forever(function () {
    music.play(music.stringPlayable("A F E F D G E F ", 120), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
    if (left == 1) {
        basic.showLeds(`
            . # . . .
            # # # . .
            . # # # #
            . # # # .
            . . . . .
            `)
        basic.pause(delay)
        basic.showLeds(`
            . # # . .
            # # # . .
            . # # # #
            . # # # .
            . . . . .
            `)
        basic.pause(delay)
        basic.showLeds(`
            # # . . .
            # # . . .
            # # # # .
            # # # . .
            . . . . .
            `)
        basic.pause(delay)
        basic.showLeds(`
            # . . . .
            # . . . .
            # # # . .
            # # . . .
            . . . . .
            `)
        basic.pause(delay)
        basic.showLeds(`
            . . . . #
            . . . # #
            # # . . #
            # . . . #
            . . . . .
            `)
        basic.pause(delay)
        basic.showLeds(`
            . . . # #
            . . # # #
            # . . # #
            . . . # #
            . . . . .
            `)
        basic.pause(delay)
        basic.showLeds(`
            . . # # .
            . # # # .
            . . # # #
            . . # # #
            . . . . .
            `)
        basic.pause(delay)
        basic.showLeds(`
            . # # . .
            # # # . .
            . # # # #
            . # # # .
            . . . . .
            `)
        basic.pause(delay)
    } else if (right == 1) {
        basic.showLeds(`
            . . # # .
            . . # # #
            # # # # .
            . # # # .
            . . . . .
            `)
        basic.pause(delay)
        basic.showLeds(`
            . . . # #
            . . . # #
            . # # # #
            . . # # #
            . . . . .
            `)
        basic.pause(delay)
        basic.showLeds(`
            . . # # .
            . . # # #
            # # # # .
            . # # # .
            . . . . .
            `)
        basic.pause(delay)
        basic.showLeds(`
            . . . . #
            . . . . #
            # . # # #
            . . # # #
            . . . . .
            `)
        basic.pause(delay)
        basic.showLeds(`
            # . . . .
            # # . . .
            # . . # #
            # . . . #
            . . . . .
            `)
        basic.pause(delay)
        basic.showLeds(`
            # # . . .
            # # # . .
            # # . . #
            # # . . .
            # . . . .
            `)
        basic.pause(delay)
        basic.showLeds(`
            . # # . .
            . # # # .
            # # # . .
            # # # . .
            . . . . .
            `)
        basic.pause(delay)
    }
})
