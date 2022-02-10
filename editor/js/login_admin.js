$(document).ready(function(){
    $('#showpass').change(function (){
        if ($("#password").attr("type") == "password")
            {
                $("#password").attr("type", "text");
            } else
            {
                $("#password").attr("type", "password");
            }
    });

    $('#login').click(function (){
        if ($('#username').val() =='' || $('#username').val() ==null){
            $('.login-text').text('vui lòng nhập username !');
            $('#username').focus();
            return false;
        }
        else if ($('#password').val() =='' || $('#password').val() ==null){
            $('.login-text').text('vui lòng nhập password !');
            $('#password').focus();
            return false;
        }
        else{
            $('.login-text').text('');
            alert('thanh cong');
            return false;
        }
    });

});
