info.onCountdownEnd(function () {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(-1)
})
let projectile2: Sprite = null
let projectile: Sprite = null
scene.setBackgroundImage(assets.image`snow`)
let mySprite = sprites.create(assets.image`Santa`, SpriteKind.Player)
controller.moveSprite(mySprite, 0, 100)
mySprite.setStayInScreen(true)
scroller.scrollBackgroundWithSpeed(-50, 0)
info.startCountdown(15)
forever(function () {
    projectile = sprites.createProjectileFromSide(assets.image`present`, -90, 0)
    projectile.y = randint(15, 115)
    pause(1000)
})
forever(function () {
    projectile2 = sprites.createProjectileFromSide(assets.image`myImage0`, -90, 0)
    projectile2.y = randint(15, 115)
    projectile2.setKind(SpriteKind.Enemy)
    pause(2100)
})
