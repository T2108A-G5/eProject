$(document).ready(function (){

    $('#themBaiViet').click(function (){

        var check = true;
        if ( $('#listDog').val()=='' || $('#listDog').val()== null){
            $('#listDog').addClass('error');
            $('#listDog').focus();
        }else{
            $('#listDog').removeClass('error');
        }


       if ($('#tieuDe').val() == '' || $('#tieuDe').val() == null){
           $('#tieuDe').addClass('error');
           $('#tieuDe').focus();
            check = false;
       }else{
           $('#tieuDe').removeClass('error');
       }

       if(check == true){
           alert('tao thanh cong');
       }else{
           return false;
       }


    });






});