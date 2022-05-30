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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcuc2lnbl9fbGFuZyAuaGVhZCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnLmxzaWduX19sYW5nJykuZmluZCgndWwnKS5zdG9wKCkuc2xpZGVUb2dnbGUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5tZW51LWljb24nKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcuYWRhcHRpdmUnKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgICAgIGlmICgkKCcubWVudS1pY29uJykuaHRtbCgpID09ICc8aSBjbGFzcz1cImZhcyBmYS1iYXJzXCI+PC9pPicpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5odG1sKCc8aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT4nKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmh0bWwoJzxpIGNsYXNzPVwiZmFzIGZhLWJhcnNcIj48L2k+Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pOyJdLCJmaWxlIjoibWFpbi5qcyJ9