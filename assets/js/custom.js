$('.fullscreen').hide()
$(function () {

    //select gallery images
    $('.gallery-img').click(function () {
        imgSource = $(this).attr('src')
        $('.fullscreen-img').prop('src', imgSource)
        //zoom in effect 
        $('.fullscreen').show("scale", 1000)
    })
    //close fullscreen
    $('.btn-close-fullscreen').click(function () {
        //zoom out
        $('.fullscreen').hide('scale', 1000)
    })
    //close user clicks overlay
    $('.fullscreen').click(function () {
        if ($(this).closest(".fullscreen-img").length === 0) {
            $(this).hide('scale', 1000)
        }
    })

})
