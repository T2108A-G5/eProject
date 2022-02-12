$(document).ready(function (){

    $('.message.login-username').hide();
    $('.message.login-password').hide();

    var submitOK = true;

    $('#login').click(function (){

        if ($('#password').val() == '' || $('#password').val() == null ){
            $('.message.login-password').show();
            $('#password').focus();
            submitOK = false;
        }else{
            $('.message.login-password').hide();
        }

        if ($('#username').val() == '' || $('#username').val() == null){
            $('.message.login-username').show();
            $('#username').focus();
            submitOK = false;
        }
        else{
            $('.message.login-username').hide();
        }
        if (submitOK == true){
        alert('đăng nhập thành công');
        }else{
            return false;
        }

    })



    $('#login-showpass').change(function (){
        if($('#password').attr('type')=='password'){
            $('#password').attr('type','text');
        }else{
            $('#password').attr('type','password');
        }
    })

});