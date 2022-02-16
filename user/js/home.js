
//  search by dog name
$(document).ready(function(){
    $("#searchNameDog").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#listNameDog .item-name-dog").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)

        });
    });

    $('.pagination').each(function (){
        var $this = $(this);
        var $tab = $this.find('li.active');
        var $link = $tab.find('a');
        var $panel = $($link.attr('href'));

        $this.on('click' , '.page-link', function(e) {
            e.preventDefault();
            var $link = $(this),
                id = this.hash;
            if ( id && !$link.is('.active')) {
                $panel.removeClass('active');
                $tab.removeClass('active');
                $panel.addClass('hide');

                $panel = $(id).addClass('active');
                $panel = $(id).removeClass('hide');
                $tab = $link.parent().addClass('active');
                $tab = $link.parent().removeClass('hide');
            }
        });
    });



});





