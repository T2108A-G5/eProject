$(document).ready(function (){

    $('#themBaiViet').click(function (){

        var check = true;
        if ( $('#choiceDog').val()=='' || $('#choiceDog').val()== null){
        }else{
            $('choiceDog').removeClass('error');
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