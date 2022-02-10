$(document).ready(function (){

    $('.message.login-username').hide();
    $('.message.login-password').hide();

    $('#login').click(function (){
        if ($('#username').val() == '' || $('#username').val() == null){
            $('.message.login-username').show();
            $('#username').focus();
            return false;
        }else{
            $('.message.login-username').hide();
        }
        if ($('#password').val() == '' || $('#password').val() == null ){
            $('.message.login-password').show();
            $('#password').focus();
            return false;
        }else{
            $('.message.login-password').hide();
        }

        alert('đăng nhập thành công');

    })

    $('#login-showpass').change(function (){
        if($('#password').attr('type')=='password'){
            $('#password').attr('type','text');
        }else{
            $('#password').attr('type','password');
        }
    })

});