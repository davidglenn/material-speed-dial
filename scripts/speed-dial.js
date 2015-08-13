$(function() {

    /* support touch by opening the speed dial on click */
    $('.speed-dial').each(function () {
        var elm = $(this);
        elm.find('.toggle').on('click', function () {
            elm.children('.dials').find('a').toggleClass('pop-in');
        });
    });

});

