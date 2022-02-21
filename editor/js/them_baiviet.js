$(document).ready(function (){

    $('#themBaiViet').click(function (){
        var data = CKEDITOR.instances.noiDung.getData();

        var check = true;
        if (data == '' || data == null){
            $('#getdata').text(data);
           $ ('#cke_1_contents').addClass('error');
            $ ('#cke_1_contents').focus();
            check = false;
        }else{
            $ ('#cke_1_contents').removeClass('error')
        }
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