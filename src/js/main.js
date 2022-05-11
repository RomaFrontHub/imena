$(function() {
    $('.sign__lang .head').click(function() {
        $(this).closest('.lsign__lang').find('ul').stop().slideToggle();
    });

    $('.menu-icon').click(function() {
        $('.adaptive').slideToggle();
        if ($('.menu-icon').html() == '<i class="fas fa-bars"></i>') {
            $(this).html('<i class="fas fa-times"></i>');
        } else {
            $(this).html('<i class="fas fa-bars"></i>');
        }
    });
});