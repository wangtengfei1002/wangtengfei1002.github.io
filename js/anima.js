$(function() {
    function checkScroll() {
        if ($(document).scrollTop() + 500 > $('.junk-logo').offset().top) {
            $('.junk-logo').addClass('active')
        }
    }
    $(window).on('scroll', function(e) {
        checkScroll()
    })
    checkScroll()
})