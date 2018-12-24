/**
 * Created by spiros.dimopulos on 12/19/18.
 */
var $bg = $('.bg');

$(window).scroll(function () {
    if ($('.text1').isOnScreen()){
        $bg.attr('data-bg-scene', '1');
    } else if ($('.text2').isOnScreen()){
        $bg.attr('data-bg-scene', '2');
    } else if ($('.text3').isOnScreen()){
        $bg.attr('data-bg-scene', '3');
    } else if ($('.text4').isOnScreen()){
        $bg.attr('data-bg-scene', '4');
    } else if ($('.text5').isOnScreen()){
        $bg.attr('data-bg-scene', '5');
    } else if ($('.text6').isOnScreen()){
        $bg.attr('data-bg-scene', '6');
    } else if ($('.text7').isOnScreen()){
        $bg.attr('data-bg-scene', '7');
    } else if ($('.text8').isOnScreen()){
        $bg.attr('data-bg-scene', '8');
    } else if ($('.text9').isOnScreen()){
        $bg.attr('data-bg-scene', '9');
    } else if ($('.text10').isOnScreen()){
        $bg.attr('data-bg-scene', '10');
    }
});