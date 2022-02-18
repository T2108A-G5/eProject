$(document).ready(function (){

    $('.message').hide();
    var submitOK = true;

    $('#register').click(function (){





        if ($('#comfirm-password').val() == '' || $('#comfirm-password').val() == null){
            $('#form-comfirm-password').addClass('error');
            $('.message.comfirm-password').show();
            $('.message.comfirm-password').text("vui lòng nhâp mật khẩu !");
            $('#comfirm-password').focus();
            submitOK = false;
        }else if($('#comfirm-password').val() != $('#register-password').val()){
            $('.message.comfirm-password').text('mật khẩu không khớp !');
            $('.message.comfirm-password').show();
            $('#form-comfirm-password').addClass('error');
            $('#comfirm-password').focus();
            submitOK = false;
        }
        else{
            $('#form-comfirm-password').removeClass('error');
            $('.message.comfirm-password').hide();
        }


        // mật khẩu

        if ($('#register-password').val() == '' || $('#register-password').val() == null){
            $('#form-register-password').addClass('error');
            $('.message.register-password').show();
            $('#register-password').focus();
            submitOK = false;
        }
        else{
            $('#form-register-password').removeClass('error');
            $('.message.register-password').hide();
        }

        // tài khoản

        if ($('#register-username').val() == '' || $('#register-username').val() == null){
            $('#form-register-username').addClass('error');
            $('.message.register-username').show();
            $('#register-username').focus();
            submitOK = false;
        }
        else{
            $('#form-register-username').removeClass('error');
            $('.message.register-username').hide();
        }


        // họ và tên
        if ($('#register-name').val() == '' || $('#register-name').val() == null ){
            $('#form-name').addClass('error');
            $('.message.register-name').show();
            $('#register-name').focus();
            submitOK = false;
        }else{
            $('#form-name').removeClass('error');
            $('.message.register-name').hide();
        }




        if (submitOK == true){
            alert('đăng nhập thành công');
        }else{
            return false;
        }

    })


    $('.showpass').change(function (){
        if($('#register-password').attr('type')=='password' ||$('#comfirm-password').attr('type')=='password' ){
            $('#register-password').attr('type','text');
            $('#comfirm-password').attr('type','text');
        }else{
            $('#register-password').attr('type','password');
            $('#comfirm-password').attr('type','password');

        }
    })

    $('#Form-register').click(function (){
        $('#FormDangNhap').removeClass('active');
        $('#FormDangNhap').addClass('hide');
       $('#FormDangKy').addClass('active');
       $('#FormDangKy').removeClass('hide');
    });

});