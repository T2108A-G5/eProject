$(document).ready(function (){

    $('.content .row .col-md-8 .answer').hide();
    $('.content .row .col-md-8 button').click(function (){
        var a_href = $(this).children('a').attr('href');
             $(a_href).toggle();
    })
})