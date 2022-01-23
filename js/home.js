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
    var div = document.getElementsByClassName('listItemBreed');
    console.log(div.length);
})



//  search by dog name
    //("không tìm thấy: " + $("#searchNameDog").text());
$(document).ready(function(){
    $("#searchNameDog").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#listNameDog .item-name-dog").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});





