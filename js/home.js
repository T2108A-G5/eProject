$(document).ready(function (e){
    $('.btn-more').on('mouseenter',function (e){
        x = e.pageX - $(this).offset().left;
        y =e.pageY -$(this).offset().top;
        $(this).find('span').css({top:y, left:x})
    })
    $('.btn-more').on('mouseout',function (e){
        x = e.pageX - $(this).offset().left;
        y =e.pageY -$(this).offset().top;
        $(this).find('span').css({top:y, left:x})
    })
})