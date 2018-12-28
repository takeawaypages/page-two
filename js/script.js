/**
 * Created by spiros.dimopulos on 12/19/18.
 */
var $bg = $('.bg');
function updateBg() {
    $('*[data-textLine]').each(function() {
        if ($(this).isOnScreen()) {
            $bg.attr('style', 'background-image: url("img/'+ $(this).attr('data-textLine') +'.png")');
            return false;
        }
    });
}
updateBg();
$(window).scroll(function () {
    updateBg();
});