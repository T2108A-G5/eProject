
//  search by dog name
$(document).ready(function(){
    $("#searchNameDog").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#listNameDog .item-name-dog").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)

        });
    });


});





