namespace SpriteKind {
    export const tale = SpriteKind.create()
    export const gap = SpriteKind.create()
    export const _gap = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind._gap, function (sprite, otherSprite) {
    info.changeScoreBy(-1)
    mySprite.setPosition(Math.randomRange(10, 150), Math.randomRange(10, 110))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy(effects.disintegrate, 200)
    apple = sprites.create(img`
. . . . . . . e c 7 . . . . . . 
. . . . e e e c 7 7 e e . . . . 
. . c e e e e c 7 e 2 2 e e . . 
. c e e e e e c 6 e e 2 2 2 e . 
. c e e e 2 e c c 2 4 5 4 2 e . 
c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
. e e e 2 2 2 2 2 2 2 2 2 4 e . 
. 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
. . 2 e e 2 2 2 2 2 4 4 2 e . . 
. . . 2 2 e e 4 4 4 2 e e . . . 
. . . . . 2 2 e e e e . . . . . 
`, SpriteKind.Food)
    apple.setPosition(Math.randomRange(10, 150), Math.randomRange(10, 110))
    apple.z = -1
})
info.onCountdownEnd(function () {
    game.over(false, effects.smiles)
})
let apple: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(7)
info.setScore(0)
game.splash("蘋果追逐戰")
info.startCountdown(30)
scene.setBackgroundColor(3)
mySprite = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
controller.moveSprite(mySprite)
apple = sprites.create(img`
. . . . . . . e c 7 . . . . . . 
. . . . e e e c 7 7 e e . . . . 
. . c e e e e c 7 e 2 2 e e . . 
. c e e e e e c 6 e e 2 2 2 e . 
. c e e e 2 e c c 2 4 5 4 2 e . 
c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
. e e e 2 2 2 2 2 2 2 2 2 4 e . 
. 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
. . 2 e e 2 2 2 2 2 4 4 2 e . . 
. . . 2 2 e e 4 4 4 2 e e . . . 
. . . . . 2 2 e e e e . . . . . 
`, SpriteKind.Food)
apple.setPosition(Math.randomRange(10, 150), Math.randomRange(10, 110))
apple.z = -1
let gap = sprites.create(img`
. . . . . . . . b b b b b . . . 
. . . . . . b b d d d d b b . . 
. . . . . b d d d d d d d c . . 
. . . . c d d d d d d d d c . . 
. . . c b d d d d d d d b c c . 
. . . c b b d d d d b c c c c . 
. . c c d b b b c c c c c c c . 
. . c c c d d d d c c d d d c c 
. c d b c c b b c c d d d d d c 
. c b d d b b b c c d d d d d c 
. c c b b b b c b c b d d d b c 
c b b c c c c c b b b b b c c c 
c c b b c c c c c d d d d d b c 
c c c c c c b b b b b c c c c c 
c c c c c c c b b b b b c c c c 
c c c c c c c c b b b b b c c c 
`, SpriteKind._gap)
let gap2 = sprites.create(img`
. . . . . . c c c c c . . . . . . . . . . . . . 
. . . . b b 3 3 b b b c c 3 . . . . . . . . . . 
. . . b b d 3 3 d 3 b 3 3 3 . . . . . . . . . . 
. . b d d d b 3 3 d 3 3 3 3 c . . . . . . . . . 
. b d d d d b 3 3 3 3 3 3 c b c . . . . . . . . 
. b d d b b 3 3 3 3 3 3 d c b c . . . . . . . . 
b d d b 3 3 3 3 3 3 3 3 3 d b c . . . . . . . . 
b d d b 3 3 3 3 3 3 3 3 3 3 3 c c c b . . . . . 
c d d d d d b b 3 3 3 c c 3 3 b d d d b c . . . 
c d d d d d d 3 3 3 c b b b b d d d d d c c . . 
c b d d d d d 3 3 b b b b b d d d d d d c c c . 
c b b b d d b 3 3 c b b b c d d d d d c b b c c 
. c b b b b b b c b b b c c b d d d c b b c c c 
. c c c b b b b b b b c c c c b b b b b c c c c 
`, SpriteKind._gap)
gap.setPosition(0, 0)
gap2.setPosition(0, 0)
game.onUpdateInterval(2000, function () {
    gap2.destroy()
    gap2 = sprites.create(img`
. . . . . . c c c c c . . . . . . . . . . . . . 
. . . . b b 3 3 b b b c c 3 . . . . . . . . . . 
. . . b b d 3 3 d 3 b 3 3 3 . . . . . . . . . . 
. . b d d d b 3 3 d 3 3 3 3 c . . . . . . . . . 
. b d d d d b 3 3 3 3 3 3 c b c . . . . . . . . 
. b d d b b 3 3 3 3 3 3 d c b c . . . . . . . . 
b d d b 3 3 3 3 3 3 3 3 3 d b c . . . . . . . . 
b d d b 3 3 3 3 3 3 3 3 3 3 3 c c c b . . . . . 
c d d d d d b b 3 3 3 c c 3 3 b d d d b c . . . 
c d d d d d d 3 3 3 c b b b b d d d d d c c . . 
c b d d d d d 3 3 b b b b b d d d d d d c c c . 
c b b b d d b 3 3 c b b b c d d d d d c b b c c 
. c b b b b b b c b b b c c b d d d c b b c c c 
. c c c b b b b b b b c c c c b b b b b c c c c 
`, SpriteKind._gap)
    gap2.setPosition(Math.randomRange(10, 150), Math.randomRange(10, 110))
})
game.onUpdateInterval(3000, function () {
    gap.destroy()
    gap = sprites.create(img`
. . . . . . . . b b b b b . . . 
. . . . . . b b d d d d b b . . 
. . . . . b d d d d d d d c . . 
. . . . c d d d d d d d d c . . 
. . . c b d d d d d d d b c c . 
. . . c b b d d d d b c c c c . 
. . c c d b b b c c c c c c c . 
. . c c c d d d d c c d d d c c 
. c d b c c b b c c d d d d d c 
. c b d d b b b c c d d d d d c 
. c c b b b b c b c b d d d b c 
c b b c c c c c b b b b b c c c 
c c b b c c c c c d d d d d b c 
c c c c c c b b b b b c c c c c 
c c c c c c c b b b b b c c c c 
c c c c c c c c b b b b b c c c 
`, SpriteKind._gap)
    gap.setPosition(Math.randomRange(10, 150), Math.randomRange(10, 110))
})
