let mySprite = sprites.create(img`
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . 5 f f f f f f f 5 5 . . . 
    . . . 5 f 4 4 5 4 4 f . . . . . 
    . . . 5 f 1 f 5 f 1 f . . . . . 
    . . . 5 f 5 5 9 5 5 f . . . . . 
    . . . 5 f 5 4 4 4 5 f . . . . . 
    . . f f f f f f f f f f f . . . 
    . . f 5 f 5 5 5 5 5 f 5 f . . . 
    . . f 5 f 5 5 5 5 5 f 5 f . . . 
    . . f 5 f 5 5 5 5 5 f 5 f . . . 
    . . f 5 f 5 5 5 5 5 f 5 f . . . 
    . . f f f f f f f f f f f . . . 
    . . . . f 5 5 f 5 5 f . . . . . 
    . . . . f 5 5 f 5 5 f . . . . . 
    . . . . f 5 5 f 5 5 f . . . . . 
    . . . . f 5 5 f 5 5 f . . . . . 
    `, SpriteKind.Player)
scene.setBackgroundImage(img`
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222ddd111122222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222222222222dddd1111111222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222ddd111111111222222222222222222222222222222222222222222222222222222222222222222dd2222222222222222222222
    222222222222222222222222222222222222222222222222222222222dd111111111111222222222222222222222222222222222222222222222222222222222222222ddddd112222222222222222222
    222222222222222222222222222222222222222222222222222222222dd111111111111ddddddd2222222222222222222222222222222222222222222222222222222dd1111111222222222222222222
    222222222222222222222222222222222222222222222222222222221dd11111111111dddddddddd22222222222222222222222222222222222222222222222222222d11111111222222222222222222
    222222222222222222222222222222222222222222222222222222111d1111111111111d111111dd2222222222222222222222222222222222222222222222ddd121dd11111111122222222222222222
    2222222222222222222222222222222222222222222222222ddd211111111111111111111111111dd2222222222222222222222222222222222222222ddddddddd11dd11111111122222222222222222
    22222222222222222222222222222222222222222222222dddddd11111111111111111111111111dd12222222222222222222222222222222222222ddddd11111111dd11111111122222222222222222
    2222222222222222222222222222222222222222222222ddd111dd11111111111111111111111111dd2222222222222222222222222222222222221ddddd11111111d1111111111dddddddd122222222
    2222222222222222222222222222222222222222222222dd1111dd11111111111111111111111111d1222222222222222222222222222222222221111111111111111111111111ddddddddddd2222222
    222222222222222222222222222222222222222222222dd11111111111111111111111dd11111111dddd222222222222222222222222222222221111111111111111111111111dd11111111dd1222222
    222222222222222222222222222222222222222222222dd111111111111111111111111dd111111dd1ddd2222222222222222222222222222222111111111111111111111111111111111111dd222222
    222222222222222222222222222222222222222222222dd111111111111111111111111dd1111111111ddd2222222222222222222222222222221111111111111111111111111111111111111dd22222
    222222222222222222222222222222222222222222222dd1111111111111111111111111111111111111dd2222222222222222222222222222221111111111111dd1111111111111111111111dd22222
    2222222222222222222222222222222222222222222222dd1111111111111111111111111111111111111d2222222222222222222222222222221111111111111dd11111111111111111111111122222
    2222222222222222222222222222222222222222222222dd1111111111111111111111111111111111111d2222222222222222222222222222221b1111111111dd111111111111111111111111122222
    22222222222222222dddd11222222222222222222222222dd111111111dd111111111111111111111111112222222222222222222222222222222bbb111bbb11dd111111111111111111111111222222
    222222222222222ddddd1111122222222222222222222221d111111111dd1111111111111111111111111122222222222222222222222222222222bbbbbbbbbbdd111111111111111111111111222222
    22222221111122ddd11111111122222222222222222222211111111111dd11111111111111111111111112222222222222222222222222222222222221122222bbb111111bbb1111111111bb12222222
    2222211dd1111ddd1111111111ddddd222222222222222221111111111dd1111111111111bbbbbbbbbbb222222222222222222222222222222222222222222222bbbbbbbbbbbbbbbbbbbbbbb22222222
    22221dddd1111dd11111111ddddddddd22222222222222222bbbbbbbbbdd11111111111bbbbbbbbbbbbb22222222222222222222222222222222222222222222221bbbbb1222bbbbbbbbbb1222222222
    2222dd1111111dd11111111dd111111d12222222222222222222bbbbbbbdbb1111111bbbb222222222222222222222222222222222222222222222222222222222221112222222222222222222222222
    2222dd111111111111111111111111111122222d2222222222222222222bbbbbbbbbbbb22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2221dd1111111111111111111111111111dddddddddd2222222222222222222bbbbb22222222222222222222222222222ddddd2222222222222222222222222222222222222222222222222222222222
    2222dd11111111111111111111111111ddddd11111ddd2222222222222222222222222222222222222222222222222dddfdddddddddddddd222222222222222222222222222222222222222222222222
    2222dd11111111111111111111111111dd1111111111122222222222222222222222222222222222222222222222ddddf11111dddd111dddfff222222222222222222222222222222222222222222222
    22221dd111111111111111111111111111111111111112222222222222222222222222222222222222222222222ddd1f1111111dd111111f111ddddddddd222222222222222222222222222222222222
    222221dd11111111111dd111111111111111111111111222222222222222222222222222222222222222222211dd111f11111111111111f11ddddd1dddddd12222222222222222222222222222222222
    2222211d11111111111dd1111111111111111111111112222222222222222222222222222222222222dd111111d111f11111111111111f1dddd11111111111ff22222222222222222222222222222222
    22222221b111111111ddddd111111111111111111111222222222222222222222222222222222222dddd111111d11f11111111111111f11dd11111111111ffdd12222222222222222222222222222222
    22222222bbbbbbbbbbbbbbbbbbb111bbbbbbbbbbbbb222222222222222222222222222222222222dd111111111111f1111111111111f11111111111111ffddddddddd122222222222222222222222222
    2222222222bbb22222222bbbbbbbbbbbb2222222bbb22222ffffffff2222222222222222222222dd111111111111f111dd11111111f11111111111111f11111111111112222222222222222222222222
    22222222222222222222222222222222222222222222ffffeeeeeeeef222222222222222222222d111111111111f1111dd1111111f1111111111111ff111111111111112222222222222222222222222
    22222222222222222222222222222222222222222fffeeeeeeeeeeeef222222222222222222222d111111111111f111dd1111111f1111111111111f11111111111111111222222222222222222222222
    2222222222222222222222222222222222ddddddfeeeedddddeeeeeeed22222222222222222222111111111111f1111dd111111f111111111111ff111111111111111112222222222222222222222222
    2222222222222222222222222222222dddeeeedffddddddddddddddeedd222222222222222222211111111111f111111d11bbbfbbbbbb1111dff111bbbbb111111111112222222222222222222222222
    22222222222222222222222222222ddeddddfffddddddddddddddddddd2222222222222f222222211bbbbbbbbfbbbbbbbbbbbbfbbbbbbbbbbfbbbbbbbbbbbbb111bbb122222222222222222222222222
    22222222222222222222222222222dddddddddddddfffddddddddddddddd2222222222f222222222bbbbbbbbfbbbbbbb22222f222222222ff22bb2222222bbbbbbbbb222222222222222222222222222
    2222222222222222222222222222feddddddfdddddddffffffffffdddddd2222222222f22222222222222222f22222222222f222222222f2222222222222222222222222222222222222222222222222
    222222222222222222222222222feedddddddfdddddddfdfdddddddddddd2222222222f2222222222222222f22222222222f22222222ff22222222222222222222222222222222222222222222222222
    22222222222222222222222222feeddddddddffddddddfddffffffdddddd2222222222f2222222222222222f2222222222f22222222f2222222222222222222222222222222222222222222222222222
    2222222222222222222222222feeeddddddddfddddddddffddddddddddd22222222222f2222222222222222f222222222f22222222f22222222222222222222222222222222222222222222222222222
    2222222222222222222222222feedddddddddffdddddddffdddddddddddd2222222222f222222222222222f222222222f222222222f22222222222222222222222222222222222222222222222222222
    22222222222222222222222222dedddddddffffdddddddffdddddddddddd222222222f2222222222222222f22222222f222222222f222222222222222222222222222222222222222222222222222222
    22222222222222222222222222dddddddddffdfdddddddfdfddddddddddd222222222f222222222222222f22222222f2222222222f222222222222222222222222222222222222222222222222222222
    22222222222222222222222222dddddddddddfddddddddfdfddddddddddd222222222f222222222222222f222222222222222222f2222222222222222222222222222222222222222222222222222222
    22222222222222222222222222deddddddddddddddddddfddfdddddddddd222222222f22222222222222f2222222222222222222f2222222222222222222222222222222222222222222222222222222
    22222222222222222222222222deedddddd2dddfddddddfddfddddddd222222222222f22222222222222f2222222222222222222f2222222222222222222222222222222222222222222222222222222
    22222222222222222222222222dddd22222222ddddddddddddfdd2222222222222222f2222222222222f2222222222222222222f22222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222f22222222222222222f2222222222222f2222222222222222222f22222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222222222222222222222f2222222222222f222222222222222222f222222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222222222222222222222f222222222222f2222222222222222222f222222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222222222222222222222f222222222222f222222222222222222f2222222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222222222222222222222f22222222222f2222222222222222222f2222222222222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222222222222222222222222222222222f22222222222222222222f2222222222222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222222222222222222222222222222222f2222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222c222
    222222222223322222222222222222322222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222cc22
    2c2ccc2223233222222222222222233332333222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222322222222222222222222222
    cc22c22223333332222222222222339333333222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222232333222222222222222c22222
    c22ccc2233b33333222222222222233353332222222222222222222222222222222222222222222222222222222222222222332222222222222222222222222222222233333332222222222332cc2222
    2222cc2333553333222222222222333555333222222222222222222222222222222222222222222222222222222222222233333222222222222222222222222222222233333332222222cc3333322c22
    222ccc23335553322222222222223333553332222222222cc222222222cc222222222222222222222222222222222cc22333333222ccc22222cc22222222222222223333353332222222333333332cc2
    2ccccc22c3353333222222c22222233333322222222222ccc2222c2222cc222222c22222222cc222222cc2cc22222222233355333222222222cc2222222222cc222223335553322222cc33335339c9cc
    2ccccccccc33333322222ccc222cc33333332cccc2222222c2222c222222222222c2222c22222222222c222c2222222223333533322222222222222222cc22cc222c33333533332c22cc9335553cc99c
    222cccccc333333222222cc2222cc93733372cccc22ccc22222cc2222cc2c222c22222cc22222cc2222222222c222222223333333222cc222222c222222cc22222222333333333222cc9933333339cc9
    22cc9cc993972222cc222cc2222c9977777722cc222c2222222cc22222222222cc222c2222222cc2222222c22c222cc2c233333332222222222222c22222222cc22222333333222222cc93333333ccc9
    22cc9cc997777222cc222c2222cc99977777222222222222222226222222cc222c222cc2cc222222222c22c222222c2222333393222222a2222222c22222222cc22222c77779772222ccc933779ccccc
    22cc9cc99777727722222c2222cc7999777222c2aa7cc772cc27262227c277222c722aa2c2277222222cc2222c222227777737797c7722aa7772227722c27aa222222227777977722279c997777799cc
    22cccc99cc777aa7a7c22277c77c7777977277c6a977c772c72726222772772277772a6a977772c2772227722c77227777777779777aaaaa777727772c7277a6277c727777777972777777977777977c
    2c7977c9799777a7a722777777777777777777aa7aa777777777aa777777777777777aa777777777777777777c77c77777777777777777777777777777777aaa277c727797777c7777a7779777797779
    2c7977cc777777a77777777777777777777777777aa77777777777777aa77777777777777777777777777777772777777777777777777777777777777777777777777777777777777aa7777777799779
    777777777777777777777777777777777777777777777777777777777aa7777777777777777777aa777777777227777777777a777777777777777777777777777a777777777777777777777777777777
    777777777777777777777777777a77777777777777777777777777777777777777aa777777777777777777777277777777777aa77777777777777777777777777a777777777777777777777777777777
    777777777777777777777777777a7777777777777777777777777777777777772227777777777777777777772277777777777a7777777777777777aa7777777777777777777777777777777777777777
    777777777777777777777777777777777777777777777777777772277777772222777777777777777777777727777777777777777777aa77777777aa777777777777777777777aa77777777777777777
    777777777aa7777777777777777777777777777777777277772222777777222222777777777777777777777222272a777777777777777a77777777777777777227777777777777777777777777777777
    7777777777777777777777777777777777222777777222722222a7777722222227777777777777777a777222227277777777777777777777777777777777722277777777777777777777777777777777
    77777777777777777777777777777777227a2777772222222277777772272227777777aa7777777777722222272777777777777777777777777777777722227777777777777777777777777777777777
    77777777777777777777777777777722272222222222277777777772272227777777777a777777777727222772277777777777777777777777aa77222222777777777777777777777777777777777777
    77777777777777777777777777222222222722222722777777777222227777777777777777777777722222272277777777777a777777777727aa2227227a777777777aa77777777777777777aa777777
    777777777777777777777aa777777727772227777722777777722222aa777777777777777777777277722272227227777777aa777777772227222222777a7777777777777777777777777777aa777777
    777777777777777777777a777777727222227777722777777777727777777777777777777777777272272222222277777777777777777272222222777777777777777777777777777777777777777777
    7777777777777777777777777772222227277777722777777777777777777777777777777777772722772722222777777777777777772722222277777777777777777777777777777777777777777777
    77777777777777777777777777722777777777777227777777777777777777777777777777aa722227722222277777777777777777727222227777777777777777777777777777727777777777777777
    7777777aa77777777777777777777777777777777727777777777777777777777777777777b7222227222227777777777777777777277227777777777777777777777777777777227777777777777777
    777777777722222222277777777777777777777777777aa7777777777777777777777777777222222222227777777aa77777777777222277777777777777777777777777777777227777777777777777
    777777777777722222227777777777777777777777777777777777777777777777777777772222772222777777777777777777722222277777777aa77777777777777777777772227777777777777777
    7777777777777772222227777777777777777777777777777777777777777777777777777272777722777777777777777777777722227777777777a7777777777777277777772a222277777777777777
    777777777777722222277777777777a777777777777777777777777777777777777777777777777227777777777777777777772222777777777777777777777777722777777727222227777777777777
    7777777777777777777222222777777777777777777777777777777777777777777777777777772777777777777777777777727227777777777777777777777777727777777722222227777777777777
    7777777777777777777777722777777777777777777777777777777777777777777777777777777777777777777777777777272777777777777777777777777777227777777727222727777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777772227777777777777777777777777777277777777722272727777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777772777777777777777777777777777777277777777722272277777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777772777777777722222777777777777777
    7777777777777777777777777777772277777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777772277777777722222777777777777777
    7777777777777777777777777777772777777777777777777277777777777777777777777777777777777777777777777777777777777777777777777777777722777777777222222777777777777777
    7777777777777777777777777777727777777777777777772277777777777777777777777777777777777777777777777777772227777777777777777777277722777777772222222277777777777777
    7777777777777777777777777777222777777777777777772272727777777777777777777777777777777777777777777222227777777777777777777722277227777777722222222277777777777777
    7777777777777777777777777722227777777777777777772277727777777777777777777777722222777777777777222227777777777777777777777222227277777777727222222277777777777777
    7777777777777777777777772222277777777777777777772277727777777777777777777222222227777777777222777277777777777777777777222222777277777777722222222777777777777777
    7777777777777777777777227227777777777777777777777227727777777777777777722222222222277777777777777777777777777777777777777777772777777777222772272777777777777777
    7777777777777777777777777777777777777777777777777722222777777777777777222272777772222777777777777777777777777777777777777777772777777772277772227777777777777777
    7777777777777777777777777777777777777777777777777727222777777777777777777722222222227777777777777777777777777777777777777777727777777777777772777777777777777777
    7777777777777777777777777777777777777777777777777772277777777777777777777772222277777777777777777777777777777777777777777777727777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777772277777777777777777772222222277777777777777777777777777777777777777777777227777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777722277777777777777777222272277777777777777777777777777777777777777777777777277777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777722277777777777777777777777777777777777777777777777777777777777777777777772277777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777722277777777777777777777777777777777777777777777777777777777777777777777722777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777722277777777777777777777777777777777777777777777777777777777777777777777722777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777727777777777777777777777777777777777777777777777777777777777777777777777277777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
controller.player2.moveSprite(mySprite)
info.player2.changeLifeBy(-1)
music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 9999, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . 7 d d d 7 . . . . . . 
    . . . . . 1 7 d 7 1 . . . . . . 
    . . . . . 1 f d f 1 . . . . . . 
    . . . . . d d d d d . . . . . . 
    . . . . . d d f d d . . . . . . 
    . . . . . d d d d d . . . . . . 
    . . . f f f f f f f f f . . . . 
    . . . f d f d d d f d f . . . . 
    . . . f f f d d d f f f . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f d f d f . . . . . . 
    `)
scroller.setLayerImage(scroller.BackgroundLayer.Layer4, img`
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . 5 f f f f f f f 5 5 . . . 
    . . . 5 f 4 4 5 4 4 f . . . . . 
    . . . 5 f 1 f 5 f 1 f . . . . . 
    . . . 5 f 5 5 9 5 5 f . . . . . 
    . . . 5 f 5 4 4 4 5 f . . . . . 
    . . f f f f f f f f f f f . . . 
    . . f 5 f 5 5 5 5 5 f 5 f . . . 
    . . f 5 f 5 5 5 5 5 f 5 f . . . 
    . . f 5 f 5 5 5 5 5 f 5 f . . . 
    . . f 5 f 5 5 5 5 5 f 5 f . . . 
    . . f f f f f f f f f f f . . . 
    . . . . f 5 5 f 5 5 f . . . . . 
    . . . . f 5 5 f 5 5 f . . . . . 
    . . . . f 5 5 f 5 5 f . . . . . 
    . . . . . . . f 5 5 f . . . . . 
    `)
mySprite.setBounceOnWall(true)
scroller.setLayerImage(scroller.BackgroundLayer.Layer4, img`
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . 5 f f f f f f f 5 5 . . . 
    . . . 5 f 4 4 5 4 4 f . . . . . 
    . . . 5 f 1 f 5 f 1 f . . . . . 
    . . . 5 f 5 5 9 5 5 f . . . . . 
    . . . 5 f 5 4 4 4 5 f . . . . . 
    . . f f f f f f f f f f f . . . 
    . . f 5 f 5 5 5 5 5 f 5 f . . . 
    . . f 5 f 5 5 5 5 5 f 5 f . . . 
    . . f 5 f 5 5 5 5 5 f 5 f . . . 
    . . f 5 f 5 5 5 5 5 f 5 f . . . 
    . . f f f 5 5 f 5 5 f f f . . . 
    . . . . f 5 5 f 5 5 f . . . . . 
    . . . . f 5 5 f 5 5 f . . . . . 
    . . . . . . . . . . f . . . . . 
    . . . . f 5 5 f 5 5 f . . . . . 
    `)
scroller.setLayerImage(scroller.BackgroundLayer.Layer4, img`
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . 5 f f f f f f f 5 5 . . . 
    . . . 5 f 4 4 5 4 4 f . . . . . 
    . . . 5 f 1 f 5 f 1 f . . . . . 
    . . . 5 f 5 5 9 5 5 f . . . . . 
    . . . 5 f 5 4 4 4 5 f . . . . . 
    . . f f f f f f f f f f f . . . 
    . . f 5 f 5 5 5 5 5 f 5 f . . . 
    . . f 5 f 5 5 5 5 5 f 5 f . . . 
    . . f 5 f 5 5 5 5 5 f 5 f . . . 
    . . f 5 f 5 5 5 5 5 f 5 f . . . 
    . . f f f f f f f f f f f . . . 
    . . . . f 5 5 f 5 5 f . . . . . 
    . . . . f 5 5 f 5 5 f . . . . . 
    . . . . f 5 5 f 5 5 f . . . . . 
    . . . . f 5 5 . f 5 5 f . . . . 
    `)
scroller.setLayerImage(scroller.BackgroundLayer.Layer4, img`
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . 5 f f f f f f f 5 5 . . . 
    . . . 5 f 4 4 5 4 4 f . . . . . 
    . . . 5 f 1 f 5 f 1 f . . . . . 
    . . . 5 f 5 5 9 5 5 f . . . . . 
    . . . 5 f 5 4 4 4 5 f . . . . . 
    . . f f f f f f f f f f f . . . 
    . . f 5 f 5 5 5 5 5 f 5 f . . . 
    . . f 5 f 5 5 5 5 5 f 5 f . . . 
    . . f 5 f 5 5 5 5 5 f 5 f . . . 
    . . f 5 f 5 5 5 5 5 f 5 f . . . 
    . . f f f f f f f f f f f . . . 
    . . . . f 5 5 f 5 5 f . . . . . 
    . . . . f 5 5 f 5 5 f . . . . . 
    . . . . f 5 5 f 5 5 f . . . . . 
    . . . . f . . . . . . . . . . . 
    `)
scroller.setBackgroundScrollOffset(100, 100)
forever(function () {
    break;
continue;
})
