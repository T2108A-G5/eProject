$(document).ready(function(){
    setTimeout(function () {
        var max = 100;
        var tot, str;
        $('.noiDung').each(function () {
            str = String($(this).html());
            tot = str.length;
            str = (tot <= max) ? str : (str.substring(0, (max + 1))) + "...";
            $(this).html(str);
        })
    }, );
})
